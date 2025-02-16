
import sharp from 'sharp'


export const _IsImage = async(req,res,next)=>{
  
    const images = req.files ;

    
   
    let  maxSizeImg = 3 * 1024 * 1024
    const validImages = [];
    const invalidImages = [];
    const validExtensions = ['png', 'jpg', 'jpeg'];
    try {
      
      const _ViewImage = await Promise.all(images?.map(async (image) => {
    
     const val2 = await isImage(image.buffer)
  
    if (!val2 || image.size > maxSizeImg || !validExtensions.includes(image.mimetype)  ) {
        invalidImages.push(image);
        
      
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