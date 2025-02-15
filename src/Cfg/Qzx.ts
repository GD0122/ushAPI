
import { ImgurClient } from 'imgur';


const CLIENT_ID = process.env.CID_IMGUR2
const CLIENT_SECRET = process.env.SEC_IMGUR2
export const clientIMGUR = new ImgurClient({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    refreshToken: "ea0672ba3d3128f26dd5e700d8b4d01732d2588c",
  });

