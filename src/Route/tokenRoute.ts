import { Router, Request, Response } from 'express';
import { RfToken } from '../Handler/TOKEN.ts';


export const tokenR = Router();

tokenR.get('/reftok',RfToken)

