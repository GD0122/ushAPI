import express, { Request, Response } from "express";
import {userR} from "./Route/userRoute";
import cookieParser from 'cookie-parser';
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import {tokenR} from "./Route/tokenRoute";
import {barangR} from "./Route/barangRoute";
import {uploadsR} from "./Route/uploadsRoute";
import {transR} from "./Route/transRoute";
import { IncomingHttpHeaders } from "http";
import cors from 'cors';
import dotenv from 'dotenv';
import { env } from "process";
dotenv.config();
// Create a new express application instance
const app = express();

// Set the network port
const port = process.env.PORT || 4544;
app.use(cookieParser());
app.use(express.json());
app.disable('x-powered-by')

app.use(helmet.xFrameOptions({action:'deny'}))

app.use(helmet.contentSecurityPolicy({
    directives:{
        "script-src":["'self'",]
    },
})
)
const Limiter = rateLimit({
    windowMs:1*60*1000,
    max:50,
    message:"Server sedang sibuk"
})
declare module 'express'{
    interface Request{
        headers?:IncomingHttpHeaders
        user?:{
            name:string;
            userId:number;
        }
        files?:any
        validImages?:Express.Multer.File[]
        invalidImages?:any

       
    }
}
const xz = process.env.APP1
const xz2 = process.env.APP2
let corsOptions = {
    origin: ['http://localhost:3000',xz ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    maxAge:86400 
}
const corsOptions2 = {
    origin: [xz2],
    methods: ['GET'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    maxAge:86400 
  };
  
app.use(cors(corsOptions))
app.use(Limiter)
// Define the root path with a greeting message
app.get("/", (req: Request, res: Response) => {
    res.json({ message: "API ACTIVE" });
});
app.use('/user',userR)
app.use('/token',tokenR)
app.use('/brg',cors(corsOptions2),barangR)
app.use('/img',uploadsR)
app.use('/trans',transR)

// app.use('/*',( req:Request,res:Response )=>{
//     return res.status(404).json({message:"Sorry Page Not Found"})
// })

// Start the Express server
app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`);
});
app.use('*',(req:Request,res:Response)=>{
    return res.status(404).json({message:"not found"}).end()
})