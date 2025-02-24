import { Request,Response } from "express"

import { idBrng, nameBrng, pagePagi, regBrng } from "../VALI/vali_barang";
import {  Del_img, uploads_ImgUR } from "./uploads";
import fs from 'fs'
import { prismaDb2 } from "../Cfg/PRX";






const prisma = prismaDb2
interface Img {
    path: string;  // Assuming `img` has a 'path' property which is a string
}
const delImgPath = async(imgs:Img[])=>{
    const del = await Promise.all(imgs.map(async(img:Img)=>{
        fs.unlinkSync(img.path)
    }))
}
const genId = async (): Promise<number> => {
    const random = Math.floor(Math.random() * 9) + 1;
    const count = await prisma.barang.count();
    const c = count + random;
  
    const ex = await prisma.barang.findUnique({
      where: {
        id: c,
      },
    }).finally(async () => await prisma.$disconnect());
  
    if (ex?.id) {
   
      return await genId();
    }
  
  
    return c;
  };
  
export const brngRegist = async(req:Request,res:Response)=>{
    const {name,userId} = req.user
    const {namab,jml,berat,tpjml,tpbrt,harga,desk,status,jenis,delimg_id,brng_id} = req.body
    
 
    const images = req.validImages  as Express.Multer.File[]
 
    const { error } = regBrng.validate({namab,jml,berat,tpjml,tpbrt,harga,desk,status,jenis,brng_id})
    if (error) {
        //  await delImgPath(images)
         return res.status(400).json({message:error.message});
    }
   
    if(delimg_id?.length > 0){
        const delimgIds = Array.isArray(delimg_id) ? delimg_id : [delimg_id];
       const c = await prisma.gambar.count({
        where:{
            barangId:parseInt(brng_id)
        }
       }).finally( async()=> await prisma.$disconnect())

       const total = c - delimgIds.length
       if(total === 0){
        return res.status(400).json({message:"1 Item must have 1 images"})
       }
      
       const delimg = await Promise.all(delimgIds.map(async(x:number)=>{
            const gamb = await prisma.gambar.findFirst({
                where:{
                    id:Number(x)
                },
                select:{
                    url:true,
                    hashdel:true
                }
            })
            if(!gamb) return res.status(404).json({message:"Image not found"})
           const xGD = await Del_img(gamb?.hashdel)
            const del = await prisma.gambar.delete({
                where:{
                    id:Number(x)
                }
            }).finally( async()=> await prisma.$disconnect())
      
       }))
      
    }else if(!brng_id && images.length === 0){
        // await delImgPath(images)
        return res.status(400).json({message:"Sorry 1 item must have 1 images"})
       
    }
    const c = await genId()
    const processTransaction = async () => {
        const transaction = await prisma.$transaction(async (prisma) => {
          // Operasi upsert barang
          const brng = await prisma.barang.upsert({
            where: {
              id: brng_id ? parseInt(brng_id) : c,
            },
            update: {
              deskripsi: desk,
              nama: namab,
              status: status,
              jenis: jenis,
              harga: parseInt(harga),
              satuan_jml: parseInt(jml),
              satuan_berat: parseInt(berat),
              type_jml: tpjml,
              type_brt: tpbrt,
            },
            create: {
              nama: namab,
              author: name,
              deskripsi: desk,
              status: status,
              jenis: jenis,
              harga: parseInt(harga),
              satuan_jml: parseInt(jml),
              satuan_berat: parseInt(berat),
              type_jml: tpjml,
              type_brt: tpbrt,
            },
          });
      
         
          if (images.length > 0) {
            await Promise.all(images.map(async (img) => {
   
              const uploadImgUR = await uploads_ImgUR(img)
             
              await prisma.gambar.create({
                data: {
                  barangId: brng.id,
                  url: uploadImgUR.link,
                  hashdel: uploadImgUR.id
                },
              })
          
            }));
          }
      
        
          return brng;
        },{timeout:10000});
      
        return transaction;
      };
 
    try {
       
        const result = await processTransaction();
        return res.status(201).json({message:"Success"})
    } catch (error) {
        if(error.code === "P2002"){
            return res.status(404).json({message:'item name used another id'})
        }
        console.log(error,'thus err')
        return res.status(404).json({message:'Sorry something Err!!'})
    }finally {
        await prisma.$disconnect();  // Pastikan koneksi prisma ditutup
      }

}
export const editBrng = async (req:Request,res:Response)=>{
    const {namabrng,jml,berat,tpjml,tpbrt,harga,desk,status,jenis,author,id }   = req.body

    try {
        const brng = await prisma.barang.update({
            where:{
                id:id
            },
            data:{
                nama:namabrng,
                author:author,
                deskripsi:desk,
                status:status,
                jenis,
                harga:parseInt(harga),
                satuan_jml:jml,
                satuan_berat:berat,
                type_jml:tpjml,
                type_brt:tpbrt,
            }
        }).finally( async()=> await prisma.$disconnect())
        if(!brng)return res.status(404).json({message:"Items Not Found!!"})
        return res.status(201).json({message:"Item Upated"})
    } catch (error) {
        return res.status(500).json({message:'Sorry something Err!!'})
    }
}
export const getBrng = async(req:Request,res:Response)=>{
    const {page ,perPage} = req.params
   
    const pageNumber = Number(page); 
    const itemsPerPage = Number(perPage); 
    if (isNaN(pageNumber) || isNaN(itemsPerPage)) {
        return res.status(400).json({ message: 'Invalid page or perPage parameter' });
      }
    const { error } = pagePagi.validate({page:pageNumber,perPage:itemsPerPage})
    if (error) {
         return res.status(400).json({message:error.message});
    }
    try {
        const totalItems = await prisma.barang.count().finally( async()=> await prisma.$disconnect())
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        
        const brng = await prisma.barang.findMany({
            skip: ( pageNumber   - 1) * itemsPerPage,
            take: itemsPerPage,
            include: {
                gambar: true 
              }
          }).finally( async()=> await prisma.$disconnect())
          if(!brng || brng.length === 0)return res.status(404).json({message:"Items Not Found"})
        const nextPage = pageNumber < totalPages ? pageNumber + 1 : 1;
        return res.status(200).json({brng,nextPage, totalPages,totalItems})
    } catch (error) {
        return res.status(500).json({message:'Sorry something Err!!'})
    }
}
export const getBarangByName = async(req:Request,res:Response)=>{
    const {name} = req.params
    console.log(name)
    const { error } = nameBrng.validate({name})
    if (error) {
         return res.status(400).json({message:error.message});
    }
    try {
        const brng = await prisma.barang.findMany({
            where:{
                nama:{
                    contains: name, 
                    mode: 'insensitive'
                }
            },
            include: {
                gambar: true 
              }
        }).finally( async()=> await prisma.$disconnect())
        if(!brng || brng.length === 0)return res.status(404).json({message:"Items Not Found"})
        return res.status(200).json({brng})
    } catch (error) {
        return res.status(500).json({message:'Sorry something Err!!'})
    }
}
export const getBarangById = async(req:Request,res:Response)=>{
   
    const {id} = req.params
    const {error} = idBrng.validate({id})
    if (error) {
        return res.status(400).json({message:error.message});
   }
    try {
        const brng = await prisma.barang.findUnique({
            where: {
              id: parseInt(id) 
            },
            include: {
              gambar: true
            }
          }).finally(async () => await prisma.$disconnect());
         
          if(!brng || !brng.nama)return res.status(404).json({message:"Items Not Found"})
        return res.status(200).json({brng})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:'Sorry something Err!!'})
    }
}

export const deleteBarang = async(req:Request,res:Response)=>{

    const {id} = req.query
    const {error} = idBrng.validate({id})
    if (error) {
        return res.status(400).json({message:error.message});
   }
   
        const delBrng = await prisma.$transaction(async(prism)=>{
            const gamb = await prism.gambar.findMany({
                where:{
                    barangId:Number(id)
                },
                select:{
                    url:true,
                    hashdel:true
                }
            })
            const delgamb = await Promise.all(gamb.map(async(x)=>{
                
                const z = await Del_img(x.hashdel)
            }))
            const gam = await prism.gambar.deleteMany({
                where:{
                    barangId:Number(id)
                }
            })
            const brng = await prism.barang.delete({
                where:{
                    id:Number(id)
                }
            })
        }).finally( async()=> await prisma.$disconnect())

    try {
        const xsz = await Promise.all([delBrng])
        
        return res.status(200).json({message:"Item berhasil dihapus"})
    } catch (error) {
       
        return res.status(500).json({message:'Sorry something Err!!'})
    }
}