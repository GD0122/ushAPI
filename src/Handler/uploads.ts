import { Request,Response, type NextFunction } from "express";
import multer from "multer";
import path from "path";

import fs, { createReadStream } from "fs";
import { Stream } from "stream"
import { PrismaClient } from "@prisma/client";
import axios from "axios";
import { CID, prismaDb2 } from "../Cfg/PRX";
import { clientIMGUR, } from "../Cfg/Qzx";

const prisma = prismaDb2



// export const upload_go = async(filesObj:any)=>{
//     const fileData = fs.readFileSync(filesObj.path);
//     const bufferS = new Stream.PassThrough()
//     bufferS.end(fileData)
//     const fileExtension = filesObj.originalname.split('.').pop();
//     const newFileName = Date.now() + '.' + fileExtension;
//     const response = await google.drive({ version: "v3", auth }).files.create({
//         media: {
//             mimeType: filesObj.mimeType,
//             body: bufferS,
//         },
//         requestBody: {
//             name: newFileName,
//             parents: [PARENT],
//         },
//         fields: "id,name",
//     }).catch((err)=>{
//         throw err
//     })as any;

//     const data = response.data
//     return {data}
// }

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
export const _deleteFilesImg =  async(fileId?:string)=>{
    try {
        
      const xz =  await google.drive({version:"v3",auth}).files.delete({fileId})
   
        return {message:`file ${fileId} berhasil dihapus`}
    } catch (error) {
       
        throw error
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
// export const uploads_img = async(req:Request,res:Response)=>{

//     const images = req.validImages as Express.Multer.File[]
//     const SaveImages = await Promise.all(images.map(async (image) => {
//        const uploadG = await upload_go(image)
//        const savedImage = await prisma.gambar.create({
//         data: {
        
         
         
          
//         }
//       }).

//        fs.unlinkSync(image.path)

//     }))
//     return res.status(200).json({msg:"test"})
// }