import { Request, Response } from "express";
import User from "../models/user";

class UserController {

  // Find all users that are active
  async totalActiveUsers(req:Request,res:Response): Promise<any> {
    try{
         const totalActiveUsers=await User.aggregate([
           {
            $match:{
              isActive:true
            }
            },
            {

              $count:"ActiveUsers: "
            }
           
         ]);
         return res.status(200).json(totalActiveUsers);
    }catch(err:any){
      return res
      .status(500)
      .json({ message: "Something went wrong", error: err.message });
    }
  }
  
  // Find five top most commmon fruits.
  async fiveTopMostCommonFruits(req:Request,res:Response): Promise<any> {
    // IN SORTING IF YOU GIVE 1 IT WILL SORT IN ASSENDING  ORDER AND IF -1 IT WILL SORT IN DESSENDING ORDER.
    try{
         const totalActiveUsers=await User.aggregate([
          {
            $group: {
              _id: "$favoriteFruit",
              count:{
                $sum:1
              }
              }
          },
          {
            $sort:{
              count:-1
            }
          },
          {
            $limit:5
          }  
           
         ]);
         return res.status(200).json(totalActiveUsers);
    }catch(err:any){
      return res
      .status(500)
      .json({ message: "Something went wrong", error: err.message });
    }
  }

  async findMany(req: Request, res: Response): Promise<any> {
    try {
      const users = await User.find();
      return res.status(200).json(users);
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Something went wrong", error: err });
    }
  }
  // Find all users whose age is greater than 20;
  async userAboveTwenty(req: Request, res: Response): Promise<any> {
    try {
      const users = await User.aggregate([
        {
          $match: {// match==where in sql. used for filtering
            age: { $gt: 20 },
            isActive:true
          },
        },
        // uncomment below stage if you want count;
        //   {
        //     $count: "userCount",

        //   }
      ]);
      return res.json(users);
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Something went wrong", error: err });
    }
  }
  // find the average age of all the users
  async findAverageAge(req: Request, res: Response): Promise<any> {
    try{
       const averageAge=await User.aggregate([
        {$group:{
            _id:"$gender",
            Average:{$avg:"$age"}
        }},
       ])
       return res.json(averageAge);
    }catch (err){
        return res
        .status(500)
        .json({ message: "Something went wrong", error: err });
    }
  }

  // Find all the user of a company from a specific country.
  async findAllTheUsersOfASpecificCountryFromASpecificLocation(req: Request, res: Response): Promise<any> {
    try{
       const averageAge=await User.aggregate([
        {$group:{
            _id:"$company.location.country",
            userCount:{
              $sum:1
            }
        }},
        {
          $sort:{
            userCount:1
          }
        }
       ])
       return res.json(averageAge);
    }catch (err){
        return res
        .status(500)
        .json({ message: "Something went wrong", error: err });
    }
  }

}

export const userController = new UserController();
