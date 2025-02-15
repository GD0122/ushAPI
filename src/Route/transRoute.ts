import express,{Router,Request,Response} from 'express';
import { authenticateToken } from '../Handler/TOKEN.ts';
import { _addPend, _addTRX, DelTrxx, getAllBrng, getAllStats, getItemsbyDay, getPopularItems, getTrx } from '../Handler/tranx.ts';


export const transR = Router()

transR.get('/',(req:Request,res:Response)=>{
    return res.status(200).json({message:'active'})
})
transR.post('/add',authenticateToken,_addTRX)
transR.post('/addpnj',authenticateToken,_addPend)
transR.get('/trx',getTrx)
transR.delete('/deltrx',authenticateToken,DelTrxx)
transR.get('/pol',getPopularItems)
transR.get('/byd',getItemsbyDay)
transR.get('/alls',getAllStats)
transR.get('/allb',getAllBrng)
