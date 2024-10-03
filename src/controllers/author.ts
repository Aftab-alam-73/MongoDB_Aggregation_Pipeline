import { Request,Response } from "express";
import author from "../models/author";

class AuthorController {

   async findMany(req: Request, res: Response):Promise<any> {
        try{
           const authors=await author.find();
           return res.status(200).json(authors);
        }catch(err){
            return res.status(500).json({message:"Something went wrong", error: err});
        }
    }
}

export const authorController=new AuthorController();