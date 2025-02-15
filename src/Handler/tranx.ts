
import { prismaDb1, prismaDb2 } from "../Cfg/PRX";






const prism1 = prismaDb1
const prism2 = prismaDb2


export const _addTRX = async(req:Request,res:Response)=>{
    const {name,userId} = req.user
    const {category,amount,deskripsi} = req.body
    
    try {
        
        const x = await prism1.trans.create({
            data:{
                category,
                user_name:name,
                amount:parseInt(amount),
                deskripsi
            }
        }).finally(async()=>await prism1.$disconnect())
        return res.status(201).json({message:"success",}).end()
    } catch (error) {
     
        return res.status(500).json({message:"Sorry something went wrong!!"})
    }
}

export const _addPend  = async(req:Request,res:Response)=>{
    const {name,userId} = req.user
    const {category,amount,deskripsi,brng_id,jml} = req.body
  
    const trxz = prism1.$transaction(async (prisma) => {
        try {
            const tx1 = await prisma.trans.create({
                data: {
                    category,
                    user_name: name,
                    amount: amount,
                    deskripsi,
                    brng_id,
                    jml_terjual:parseInt(jml)
                }
            });
            return tx1;
        } catch (error) {
            throw new Error( error.message);  
        }
    });
    
    const trxz1 = prism2.$transaction(async (prisma) => {
        try {
            const barang = await prisma.barang.findUnique({
                where: {
                    id: parseInt(brng_id)
                },
                select: {
                    satuan_jml: true
                }
            });
    
            
            if (!barang) {
                throw new Error("Barang tidak ditemukan");
            }
            
    
            if (barang.satuan_jml >= parseInt(jml)) {
                const tx2 = await prisma.barang.update({
                    where: {
                        id: brng_id
                    },
                    data: {
                        satuan_jml: {
                            decrement: parseInt(jml)
                        }
                    }
                });
    
                if (tx2.satuan_jml === 0) {
                    await prisma.barang.update({
                        where: {
                            id: brng_id
                        },
                        data: {
                            status: 'Habis'
                        }
                    });
                }
    
                return tx2;
            } else {
                throw new Error("Sepertinya Stock Telah Habis");
            }
        } catch (error) {
            throw new Error( error.message);  
        }
    });
    
    try {
        const results = await Promise.all([trxz, trxz1]);
      
        return res.status(201).json({ message: "Success" });
    } catch (error) {
      
        if(error.message){
            return res.status(400).json({message:error.message})
        }
        return res.status(500).json({ message: "Sorry something went wrong!!" });
    }
}

export const getTrx = async(req:Request,res:Response)=>{

    const {month,year} = req.query

  
    try {
        const resq = await prism1.trans.findMany({
            where:{
                updatedAt:{
                    gte: new Date(month),  
                    lt: new Date(year), 
                  }
            }
        }).finally(async()=>await prism1.$disconnect())
        
        return res.status(200).json({data:resq})
    } catch (error) {
        if(error.message){
            return res.status(400).json({message:error.message})
        }
        return res.status(500).json({ message: "Sorry something went wrong!!" });
    }
    
}

export const DelTrxx = async(req:Request,res:Response)=>{
    const {id,user_name} = req.user
    const {id_trx} = req.query
   
  
        const reqs = await prism1.trans.findUnique({
            where:{
                id:id_trx
            }
        })
        if (!reqs) {
            throw new Error("Barang tidak ditemukan");
        }
        if(!reqs.brng_id ){
            const trxz = prism1.$transaction(async (prisma) => {
                try {
                    const tx1 = await prisma.trans.delete({
                     where:{
                        id:id_trx
                     }
                    });
                    return tx1;
                } catch (error) {
                    throw new Error( error.message);  
                }
            })
            try {
                const xz = await Promise.all([trxz])
                return res.status(200).json({message:"Success"})
            } catch (error) {
                if(error.message){
                    return res.status(400).json({message:error.message})
                }
                return res.status(500).json({ message: "Sorry something went wrong!!" });
            }
        }
    
        const trxz1 = prism2.$transaction(async (prisma) => {   
            try {
             
                  const xs = await prisma.barang.update({
                            where: {
                                id: reqs.brng_id
                            },
                            data: {
                                satuan_jml:{
                                    increment:parseInt(reqs.jml_terjual)
                                }
                            }
                        });
              return xs
            } catch (error) {
                throw new Error( error.message);  // Add more specific error message
            }
        })
        const trxz = prism1.$transaction(async (prisma) => {
            try {
                const tx1 = await prisma.trans.delete({
                 where:{
                    id:id_trx
                 }
                })
                return tx1;
            } catch (error) {
                throw new Error( error.message);  
            }
        });

        try {
            const xz = await Promise.all([trxz,trxz1])
            return res.status(200).json({message:"Success"})
        } catch (error) {
            
            if(error.message){
                return res.status(400).json({message:error.message})
            }
            return res.status(500).json({ message: "Sorry something went wrong!!" });
        }
        
  
}


export  const getPopularItems = async(req:Request,res:Response)=>{


    try {
        const top3Penjualan = await prism1.trans.groupBy({
            by: ['brng_id'],  
            _sum: {
              jml_terjual: true,  
            },
            orderBy: {
              _sum: {
                jml_terjual: 'desc',  
              },
            },
            take: 3,  // Ambil hanya 3 data teratas
          }).finally(async()=>await prism1.$disconnect())
          
          res.status(200).json({top3:top3Penjualan})
    } catch (error) {
        if(error.message){
            return res.status(400).json({message:error.message})
        }
        return res.status(500).json({ message: "Sorry something went wrong!!" });
    }
}

export const getItemsbyDay = async(req:Request,res:Response)=>{
    const {date} = req.query
   
    const today = new Date(date);
    const startOfDay = new Date(today.setHours(0, 0, 0, 0));  
    const endOfDay = new Date(today.setHours(23, 59, 59, 999)); 
    try {
        const pens = await prism1.trans.findMany({
            where: {
                updatedAt: {
                    gte: startOfDay,  
                    lte: endOfDay,  
                },
                category:"Pendapatan"
            },
           
           
          
        }).finally(async()=>await prism1.$disconnect())
        return res.status(200).json({dt:pens})
    } catch (error) {
        if(error.message){
            return res.status(400).json({message:error.message})
        }
        return res.status(500).json({ message: "Sorry something went wrong!!" });
    }
}


export const getAllStats = async(req:Request,res:Response)=>{
    try {
        const statsDB1  = await prism1.trans.findFirst()
        const totalBrng = await prism2.barang.count()
        const totalJML  = await prism2.barang.aggregate({
            _sum:{
                satuan_jml:true
            }
        })
        if(!statsDB1){
           throw new Error("Sorry something wrong")
        }
      
        return res.status(200).json({stats1:'Active',stats2:'Active',totjml:totalJML?._sum.satuan_jml,totalBrng:totalBrng})

    } catch (error) {
        if(error.message){
            return res.status(400).json({message:error.message})
        }
        return res.status(500).json({ message: "Sorry something went wrong!!" });
    }finally{
        await prism1.$disconnect()
        await prism2.$disconnect()
    }
}

export const getAllBrng = async(req:Request,res:Response)=>{
    try {
        const brng = await prism2.barang.findMany()

        return res.status(200).json({brng})
    } catch (error) {
        if(error.message){
            return res.status(400).json({message:error.message})
        }
        return res.status(500).json({ message: "Sorry something went wrong!!" });
    }
}