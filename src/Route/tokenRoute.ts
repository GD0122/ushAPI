import { Router, Request, Response } from 'express';
import { RfToken } from '../Handler/TOKEN';


const tokenR = Router();

tokenR.get('/reftok',RfToken)

export default tokenR;