import { Router, } from 'express';
import { editPassword, editUser, userLogin, userLogout, userRegister } from '../Handler/HandlerUser';
import { authenticateToken } from '../Handler/TOKEN';



export const userR = Router()

// userR.get('/',(req:Request,res:Response)=>{
//     res.status(200).json({message:'halaman user'})
// })

userR.post('/register',userRegister)
userR.post('/login',userLogin)
userR.delete('/logout', authenticateToken,userLogout)
userR.put('/edit', authenticateToken,editUser)
userR.put('/editpass',authenticateToken,editPassword)
