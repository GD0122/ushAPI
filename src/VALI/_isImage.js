
import sharp from 'sharp'
import fs from 'fs'


export const _IsImage = async(req,res,next)=>{
  
    const images = req.files ;

    
   
    let  maxSizeImg = 3 * 1024 * 1024
    const validImages = [];
    const invalidImages = [];
 
    try {
      
      const _ViewImage = await Promise.all(images?.map(async (image) => {
     const isValid = await isImage(image.path)
    
    if (!isValid || image.size > maxSizeImg) {
        invalidImages.push(image);
        
        try {
          await fs.unlinkSync(image.path);
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
     
      next()
    
    } catch (error) {
        console.log("Terjadi kesalahan:", error);
        res.status(500).send("Terjadi kesalahan saat memproses gambar.");
    }

}
const isImage = async (filepath) => {
    try {
       await sharp(filepath).metadata()
        return true; 
    } catch (error) {
        return false; 
    }
};