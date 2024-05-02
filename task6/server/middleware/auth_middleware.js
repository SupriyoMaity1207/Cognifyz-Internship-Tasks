const jwt=require("jsonwebtoken")
const model=require("../model/user_model")

const auth=async(req,res)=>{
    try {
        const token=req.cookies.jwtToken;
        const verify=jwt.verify(token,process.env.privateKey);
        const user=model.findOne({_id:verify._id, "tokens.token":verify.token})

        if(!user){
            throw new Error("User not found")
        }

        req.user=user;
        next();
        
    } catch (error) {
        console.log(error)
        next(error)
    }

}

module.exports=auth