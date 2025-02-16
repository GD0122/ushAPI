import { Router, Request, Response,NextFunction } from 'express';
import { brngRegist, deleteBarang, editBrng, getBarangById, getBarangByName, getBrng } from '../Handler/brngHand';
import { authenticateToken } from '../Handler/TOKEN';
import { _IsImage } from '../VALI/_isImage';
import  multer from 'multer';
import * as path from 'path';
import * as fs from 'fs';
import { checkBrng, ChekFileImgCount } from '../Handler/uploads';


const File_filters = (req:any, file:any, cb:any) => {
    const allowedTypes = ['.jpg', '.jpeg', '.png'];
    const fileExtension = path.extname(file.originalname).toLowerCase();
 
  
    if (allowedTypes.includes(fileExtension)) {
      cb(null, true); 
    } else {
      cb(new Error('Hanya file JPG atau PNG yang diizinkan!'), false); 
    }
  };
  // const storage = multer.diskStorage({
  //   destination: function (req, file, cb) {
  //     const uploadDir = 'uploads';
  
  
  //     fs.access(uploadDir, fs.constants.F_OK, (err) => {
  //       if (err) {
  
  //         fs.mkdir(uploadDir, { recursive: true }, (mkdirErr) => {
  //           if (mkdirErr) {
  //             console.error('Gagal membuat folder uploads:', mkdirErr);
  //             return cb(mkdirErr, null); 
  //           }
           
  //           cb(null, uploadDir);
  //         });
  //       } else {
       
  //         cb(null, uploadDir);
  //       }
  //     });
  //   },
  //   filename: function (req, file, cb) {
  //     const fileExtension = path.extname(file.originalname).toLowerCase(); 
  //     if (!file.originalname || !file.originalname.trim()) {
       
  //       const error = new Error('Nama file tidak valid');
  //       return cb(error, null);  
  //     }
  //     const fileName = Date.now()+"_img"+fileExtension;
  //     cb(null, fileName);
  //   }
  // });

  const upload = multer({ fileFilter: File_filters });
export const barangR = Router()

barangR.get('/vp/:page/:perPage',getBrng)
barangR.get('/vn/:name',getBarangByName)
barangR.get('/vi/:id',getBarangById)
barangR.post('/ade',authenticateToken,upload.array('image',5),_IsImage,ChekFileImgCount,brngRegist)
// barangR.put('/edit',authenticateToken,editBrng)
barangR.delete('/delete',authenticateToken,deleteBarang)
// barangR.get('/test',getAccessToken)
// ,upload.array('image',5),_IsImage,authenticateToken, brngRegist
barangR.use((err:any, req:any, res:any, next:NextFunction) => {
    if (err instanceof multer.MulterError) {
      // Error spesifik Multer
      return res.status(400).json({ message: err.message });
    } else if (err) {
      return res.status(500).json({ message: err.message });
    }
    next();
  });
