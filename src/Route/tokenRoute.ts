import { Router, Request, Response } from 'express';
import { RfToken } from '../Handler/TOKEN';


export const tokenR = Router();

tokenR.get('/reftok',RfToken)

