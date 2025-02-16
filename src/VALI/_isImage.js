
import sharp from 'sharp'
import fs from 'fs'
import imageType from 'image-type';

export const _IsImage = async(req,res,next)=>{
  
    const images = req.files ;
    console.log(req.files,'dasdasds')
    
   
    let  maxSizeImg = 3 * 1024 * 1024
    const validImages = [];
    const invalidImages = [];
    const validExtensions = ['png', 'jpg', 'jpeg'];
    try {
      
      const _ViewImage = await Promise.all(images?.map(async (image) => {
     const isValid = await imageType(image.buffer)
     const val2 = await isImage(image.buffer)
    //  return console.log(isValid,val2,"===asdasd")
    if (!val2 || image.size > maxSizeImg || !validExtensions.includes(isValid.ext)  ) {
        invalidImages.push(image);
        
        try {
          // await fs.unlinkSync(image.path);
          console.log('gambar gagal berhasil dihapus')
        } catch (error) {
          console.error('Error deleting invalid image:', error);
        }
      } else {
        validImages.push(image);
        
      }
      }))
    //   if(validImages.length === 0) return res.status(404).json({message:'maaf tidak dapat memproses gambar'})
      req.validImages = validImages
      req.invalidImages = invalidImages
      console.log(validImages,'thiss')
     
      next()
    
    } catch (error) {
        console.log("Terjadi kesalahan:", error);
        res.status(500).send("Terjadi kesalahan saat memproses gambar.");
    }

}
const isImage = async (filepath) => {
    try {
       await sharp(filepath).metadata()
       .then((metadata)=>{
        if (metadata.width > 0 && metadata.height > 0) {
          console.log(`Gambar valid dengan dimensi: ${metadata.width}x${metadata.height}`);
        } else {
          throw new Error()
        }
       })
       return true; 
    } catch (error) {
        return false; 
    }
};