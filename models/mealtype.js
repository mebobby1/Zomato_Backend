import mongoose from "mongoose";

const mealtypeSchema = new mongoose.Schema({
    mealtype:{
        type:String,
        required:true,
    }
})

export const Mealtype = mongoose.model("Mealtype",mealtypeSchema)