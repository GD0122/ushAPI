import Joi from 'joi';


export const  pagePagi = Joi.object({
    page: Joi.number().min(1).max(100).required(),
    perPage : Joi.number().min(10).max(100).required()
})
export const nameBrng = Joi.object({
    name:Joi.string().min(1).max(50).required()
})

export const idBrng = Joi.object({
    id :Joi.number().min(1).max(10000).required(),
})

export const regBrng = Joi.object({
    namab: Joi.string().min(1).max(155).required(),
    jml: Joi.number().min(1).max(10000).required(),
    berat: Joi.number().max(1).max(10000).required(),
    tpjml: Joi.string().min(1).max(30).required(),
    tpbrt: Joi.string().required(),
    harga: Joi.number().min(200).max(100000000).required(),
    desk: Joi.string().min(1).max(700).required(),
    status: Joi.string().min(1).max(50).required(),
    jenis: Joi.string().required(),
    
    brng_id:Joi.number(),
})


export const valiGetD = Joi.object({
    
})