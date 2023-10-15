
export const logout  = (req,res)=>{

    res.status(200).cookie("token","",{
        expires:new Date(Date.now()),
    }).json({
        success:true,
        message:"Logged Out Successfully",
    })
}