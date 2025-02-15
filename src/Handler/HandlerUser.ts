import { Request,Response } from "express"
import { userEdit, userLog, userPassEdit, userRegist } from "../VALI/vali_user"
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { isForInitializer } from "typescript";
import { createToken } from "./TOKEN";
import { prismaDb2 } from "../Cfg/PRX";


const prisma = prismaDb2;
const REFTOKEN = process.env.REF_TOKEN
const ACCTOKEN = process.env.ACC_TOKEN
async function hashPassword(password:string){
    const saltRounds = 10; 
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  }
const emailCheck = async( name:  string,  email:string, )=>{
  
    const foundByEmail = await prisma.user.findUnique({
        where: { email: email }
      }).finally( async()=> await prisma.$disconnect())
      
      const foundByName = await prisma.user.findUnique({
        where: { name: name }
      }).finally( async()=> await prisma.$disconnect())
      
     if (foundByEmail || foundByName) {
        return true
      }else{
        return false
      }
}


export const userRegister = async(req:Request,res:Response)=>{

    const {name,email,password} = req.body
    const { error } = userRegist.validate({name,email,password});
    if (error) {
        console.error('Validation failed:', error.details);
        return res.status(400).json({message:error.message});
      }
    const check = await emailCheck(name,email)
    if(check)return res.status(400).json({message:'Sorry Email or Username as Registered, Please Login'})
    const hash = await hashPassword(password)
    try {
        const user = await prisma.user.create({
            data: {
              name: name,
              email: email,
              password: hash, 
            },
          })
          .finally( async()=> await prisma.$disconnect())
        const userStats = await prisma.userstatus.create({
            data:{
                refresh_token:null,
                userId: user.id
            }
        }).finally( async()=> await prisma.$disconnect())
        return res.status(201).json({message:'Success Account Created'})
    } catch (error) {
        return res.status(404).json({message:'Sorry something Err!!'})
    }
   
  
}

export const userLogin = async(req:Request,res:Response)=>{
    const {name,password} = req.body;
    const {error} = await userLog.validate({user:name,password});
    if(error)return res.status(400).json({message:error.message});
    try {
        const user = await prisma.user.findFirst({
            where:
            {
                    OR: [
                        { email: name},
                        { name: name }, 
                      ],
                
            }
        }).finally(async()=>await prisma.$disconnect())
        if(!user)return res.status(404).json({message:'User Not Found'})
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) return res.status(403).json({message:'Invalid Password'})
        const  reftoken = await createToken(user.name,user.id,'1d',REFTOKEN)
        const  acctoken = await createToken(user.name,user.id,'20s',ACCTOKEN)
        const stats = await prisma.userstatus.upsert({
            where:{
                userId:user.id
            },
            update: {
                status: "Active",
                refresh_token: reftoken  // Update refresh token jika data ada
              },
              create: {
                userId: user.id,// Jika data belum ada, buat data baru dengan userId
                status: 'Active',  // Status yang baru
                refresh_token: reftoken,  // Refresh token yang baru
              },
        }).finally( async()=> await prisma.$disconnect())
        res.cookie('rn', reftoken, {
            httpOnly: true, 
            secure: true,
            maxAge: 1 * 24 * 60 * 60 * 1000, 
        });

        
        return res.status(200).json({message:'Login Berhasil',aq: acctoken})
    } catch (error) {
        return res.status(500).json({message:'Sorry something wrong'})
    }
}


export const userLogout = async(req:Request,res:Response)=>{

    const {name,userId} = req.user
  
    try {
        const users= await prisma.userstatus.update({
            where:{
                userId:userId,
            },
                data:{
                    status:'nonActive',
                    refresh_token:null,
                }
            
        }).finally( async()=> await prisma.$disconnect())
        return res.status(201).json({message:"Logout Success"})
    } catch (error) {
        return res.status(500).json({message:'Sorry something wrong'})
    }
}

const checkAnother = async(name:string,email:string,id:number)=>{
   
  const userWithSameName = await prisma.user.findUnique({
    where: {
      name: name,
    },
  }).finally( async()=> await prisma.$disconnect())

  const userWithSameEmail = await prisma.user.findUnique({
    where: {
      email: email,
    },
  }).finally( async()=> await prisma.$disconnect())

  if (
    (userWithSameName && userWithSameName.id !== id) ||
    (userWithSameEmail && userWithSameEmail.id !== id)
  ) {
    return true; 
  }

  return false;
}

export const editUser = async(req:Request,res:Response)=>{
    const {name,userId} = req.user
    const {newname,newmail,pass}= req.body
    
    const { error } = userEdit.validate({name:newname,email:newmail})
    if (error) {
        console.error('Validation failed:', error.details);
        return res.status(400).json({message:error.message});
      }

    const check = await checkAnother(newname,newmail,userId)
    if(check)return res.status(400).json({message:'Sorry Email or Username as Used Another User'})
    try {
        const getUser = await prisma.user.findUnique({
            where:{
                id:userId
            }
        }).finally( async()=> await prisma.$disconnect())
        if(!getUser){
            return res.status(404).json({message:"Sorry something went wrong"})
        }
        const compare = await bcrypt.compare(pass, getUser?.password)
        if(!compare) return res.status(403).json({message:'Invalid Password'})

        const user = await prisma.user.update({
            where:{
                id:userId
            },
            data:{
                name:newname,
                email:newmail
            }
        }).finally( async()=> await prisma.$disconnect())
        return res.status(201).json({message:"Username has changed"})
    } catch (error) {
        return res.status(500).json({message:'Sorry something wrong'})
    }
}

const checkPass = async(pass:string,newPass:string)=>{
    const compare = bcrypt.compare(newPass,pass)
    return compare
}

export const editPassword = async(req:Request,res:Response)=>{
    const {name,userId} = req.user

    const {newPass,oldPass} = req.body
    
    const { error } = userPassEdit.validate({newpass:newPass})
    if (error) {
        console.error('Validation failed:', error.details);
        return res.status(400).json({message:error.message});
      }
    try {
        const getuser = await prisma.user.findUnique({
            where:{
                id:userId
            }
        }).finally( async()=> await prisma.$disconnect())
        if(!getuser){
            return res.status(404).json({message:"Sorry something went wrong"})
        }
        const compare = await bcrypt.compare(oldPass,getuser.password)
        if(!compare) return res.status(403).json({message:'Invalid Password'})
        const hashnew = await hashPassword(newPass)
        const check = await checkPass(getuser.password,newPass)
        if(check)return res.status(400).json({message:"Failed old password  and new password must not same"})

        const user = await prisma.user.update({
            where:{
                id:userId
            },
            data:{
                password:hashnew
            }
        }).finally( async()=> await prisma.$disconnect())
        return res.status(201).json({message:"Password Changed"})
    } catch (error) {
        return res.status(500).json({message:"Sorry something  wrong!! "})
    }

}
