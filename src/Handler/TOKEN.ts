
import { Request,Response, NextFunction  } from "express"
import jwt from 'jsonwebtoken';
import { prismaDb2 } from "../Cfg/PRX";
import {IncomingHttpHeaders} from 'http';






const prisma =  prismaDb2



const REFTOKEN = process.env.REF_TOKEN
const ACCTOKEN = process.env.ACC_TOKEN


const verifyToken = (token: string, type: 'access' | 'refresh') => {
    const secret = type === 'access' ? ACCTOKEN:REFTOKEN;
    try {
      return jwt.verify(token, secret);
    } catch (error) {
      return null; 
    }
  };
export  const createToken =async(name:string,userId:number,expired:string ,infoToke:string)=>{
    const payload = { name, userId};
    const exp = expired?expired : '1d'
    const token = jwt.sign(payload, infoToke ,{expiresIn: exp});
    return token;
  };


export const RfToken = async(req:Request,res:Response)=>{
    const refreshToken = req.cookies.rn; 
    if (!refreshToken) {
      return res.status(403).json({ message: 'No refresh token ' });
    }
    const decoded = verifyToken(refreshToken, 'refresh');
    if (!decoded && typeof decoded === 'string') {
        return res.status(401).json({ message: 'Invalid or expired refresh token' });
      }else{
        try {
            const user = await prisma.userstatus.findFirst({
                where:{
                    userId:decoded.userId,
                }
            }).finally(async()=> await prisma.$disconnect());
            if(user.refresh_token !== refreshToken  ) return res.status(401).json({ message: 'Invalid or expired refresh token' });
            const acc = await createToken(decoded?.name,decoded?.userId,'20s',ACCTOKEN)
            return res.status(200).json({acc: acc  })
        } catch (error) {
            return res.status(500).json({message:"Sorry something Err!!"})
        }
        
      }
   
  
}

export  const authenticateToken = (req: Request, res: Response , next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];  
  
    if (!token) {
      return res.status(401).json({ message: 'Access token is missing' });
    }
  
   
    const decoded = verifyToken(token, 'access');
    
    if (!decoded) {
      return res.status(403).json({ message: 'Invalid or expired access token' });
    }
  
    req.user = {
        name: decoded?.name as string,
        userId: decoded?.userId as number
      };
  
    next();
  };
