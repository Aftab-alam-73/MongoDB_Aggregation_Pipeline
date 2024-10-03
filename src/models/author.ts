import mongoose from "mongoose";

const authorSchema=new mongoose.Schema({
    _id:{type:Number, required:true},
    name:{type:String, required:true},
    birth_year:{type:Number, required:true}
})

export default mongoose.model("author", authorSchema);