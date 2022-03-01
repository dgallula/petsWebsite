import { request } from "express";

const logger= (req,res, next ) => {
    console.log('method:'+ req.method+ ',url:')
}


