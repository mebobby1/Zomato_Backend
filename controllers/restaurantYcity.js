import { Restaurant } from "../models/restaurant.js";


export const restaurantYcity = async(req,res)=>{
   try {
    const {city_name} = req.params;

    const restaurant = await Restaurant.find({city_name})

    res.status(200).json({
        restaurant,
        message:"Restaurant Fetched Successfully",
    })

   } catch (error) {
    next(error)
   }
}