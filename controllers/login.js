import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";
import ErrorHandler from "../middleware/err.js"


export const login = async(req,res,next)=>{
try {
    
    const { email, password } = req.body;

    const user = await User.findOne({email}).select("+password");

    if(!user) return next(new ErrorHandler("User Not Exist",400))

    const isMatched = await bcrypt.compare(password,user.password)

    if(!isMatched) return next(new ErrorHandler("Invalid Password",400))

    sendCookie(user,res,"Login SuccessFully",200)

} catch (error) {
    next(error)
}
}