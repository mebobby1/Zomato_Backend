import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
 location:{
   type:String,
   required:true,
 }
})

export const Location = mongoose.model("Location",locationSchema)