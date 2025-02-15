import { Router, Request, Response,NextFunction } from 'express';
import multer from 'multer';


import path from 'path';
import fs from 'fs'
import {_IsImage} from '../VALI/_isImage'



const File_filters = (req:any, file:any, cb:any) => {
    const allowedTypes = ['.jpg', '.jpeg', '.png'];
    const fileExtension = path.extname(file.originalname).toLowerCase();
    console.log(`Received file: ${file.originalname}, type: ${fileExtension}`);
  
    if (allowedTypes.includes(fileExtension)) {
      cb(null, true); 
    } else {
      cb(new Error('Hanya file JPG atau PNG yang diizinkan!'), false); 
    }
  };
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const uploadDir = 'uploads';
  
  
      fs.access(uploadDir, fs.constants.F_OK, (err) => {
        if (err) {
  
          fs.mkdir(uploadDir, { recursive: true }, (mkdirErr) => {
            if (mkdirErr) {
              console.error('Gagal membuat folder uploads:', mkdirErr);
              return cb(mkdirErr, null); 
            }
           
            cb(null, uploadDir);
          });
        } else {
       
          cb(null, uploadDir);
        }
      });
    },
    filename: function (req, file, cb) {
      const fileExtension = path.extname(file.originalname).toLowerCase(); 
      if (!file.originalname || !file.originalname.trim()) {
       
        const error = new Error('Nama file tidak valid');
        return cb(error, null);  
      }
      const fileName = Date.now()+"_img"+fileExtension;
      cb(null, fileName);
    }
  });

  const upload = multer({ storage, fileFilter: File_filters });

const uploadsR = Router()

// uploadsR.post('/add',upload.array('image',5),_IsImage,uploads_img)
uploadsR.use((err:any, req:any, res:any, next:NextFunction) => {
    if (err instanceof multer.MulterError) {
      // Error spesifik Multer
      return res.status(400).json({ message: err.message });
    } else if (err) {
      return res.status(500).json({ message: err.message });
    }
    next();
  });

export default uploadsR