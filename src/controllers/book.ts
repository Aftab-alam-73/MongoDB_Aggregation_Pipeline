import { Request,Response } from "express";
import book from "../models/book";
class Book{

   async findMany(req:Request,res:Response):Promise<any>{
      try{
         const books=await book.find();
         return res.status(200).json(books);
      }catch(err){
        return res.status(500).json({message:"Something went wrong",error:err});
      }
    }
}

export const bookController=new Book();