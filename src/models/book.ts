import mongoose from "mongoose";

const bookSchema=new mongoose.Schema({
    _id:{type:Number, required:true},
    title:{type:String, required:true},
    author_id:{type:Number, required:true},
    genre:{type:String}
})

export default mongoose.model("Books",bookSchema);