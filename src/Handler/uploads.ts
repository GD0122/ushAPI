import { Request,Response, type NextFunction } from "express";


import fs, { createReadStream } from "fs";
import { CID, prismaDb2 } from "../Cfg/PRX";
import { clientIMGUR, } from "../Cfg/Qzx";

const prisma = prismaDb2




export const checkBrng = async(req:Request,res:Response,next:NextFunction)=>{

    const {id_brng} = req.body
    const images = req.validImages  as Express.Multer.File[]
 
    try {
        if(id_brng || images.length > 5){
            const count = await prisma.gambar.count({
                where:{
                    barangId:id_brng
                }
            }).finally( async()=> await prisma.$disconnect())
            const total = count + images.length
            if(total >= 5){
                const rmv = await Promise.all(images.map(async(image:any)=>{
                    fs.unlinkSync(image.path)
                }))
                return res.status(400).json({message:"1 Item Maximal have 5 images"}) 
            }
        }
        next()
    } catch (error) {
        return res.status(500).json({message:"Sorry something wrong!!"}) 
    }

}


export const Del_img = async(field:string)=>{
  
    try {
        const del = await clientIMGUR.deleteImage(field)
      
        return del
    } catch (error) {
        throw error
    }
}
export const uploads_ImgUR = async(filesObj:any)=>{
    const fileData = filesObj.path;

    try {
        const response = await clientIMGUR.upload({
            image: createReadStream(fileData),
            type: 'stream',
        })
 
        if (response.data) {
            
            return response.data;  
          } else {
            throw new Error('Upload Failed');
          }
    } catch (error) {
        // console.log(error)
        throw error;

    }

}

export const ChekFileImgCount = async(req:Request,res:Response,next:NextFunction)=>{
    const {id_brng} = req.body
    const images = req.validImages  as Express.Multer.File[]

    try {
        if(id_brng){
            const count = await prisma.gambar.count({
                where:{
                    barangId:id_brng
                }
            }).finally( async()=> await prisma.$disconnect())
            if(count + images.length > 5) {
                const rmv = await Promise.all(images.map(async(image:any)=>{
                    fs.unlinkSync(image.path)
                }))
                return res.status(400).json({message:"Sorry 1 item only have  maximal 5 images"})
            }
        }
        next()
    } catch (error) {
        return res.status(500).json({message:"Sorry something wrong!!"}) 
    }
}
