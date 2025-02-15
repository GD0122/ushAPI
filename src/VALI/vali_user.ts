
import Joi from 'joi';


export const userRegist = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required(),
    password:Joi.string().min(8).max(32).required()
})

export const userLog = Joi.object({
    user:Joi.string().max(100).required()
    ,password:Joi.string().max(100).required()
})

export const userEdit = Joi.object({
    name:Joi.string().min(3).max(100).required(),
    email:Joi.string().email().required()
})

export const userPassEdit = Joi.object({
   newpass:Joi.string().min(8).max(32).required()
})