import { Request, Response } from 'express';

async function getAll(req:Request,res:Response){
    res.send("GET ALL")
}

async function getById(req:Request,res:Response){
    res.send(req.params)
}

async function createOne(req:Request,res:Response){
    res.send(req.body)
}


export {
    getAll,
    getById,
    createOne
}