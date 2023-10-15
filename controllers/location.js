import { Location } from "../models/location.js"

export const getLocation = (req,res)=>{

    Location.find().then((response)=>{
      res.status(200).json({
       location:response,
       message:"Location Fetched Successfully",
      })
    }).catch((e)=>console.log(e))
}