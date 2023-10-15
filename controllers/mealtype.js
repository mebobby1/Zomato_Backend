import { Mealtype } from "../models/mealtype.js"


export const getMealtype = async(req,res)=>{

   try {
    const mealtype = await Mealtype.find()

    res.status(200).json({
        mealtype,
        message: "Mealtype fecthed Successfully",
    })

   } catch (error) {
    next(error)
   }
}