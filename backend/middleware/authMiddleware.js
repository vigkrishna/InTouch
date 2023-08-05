const jwt = require("jsonwebtoken");
const User = require("../models/userModel.js")
const asyncHandler =require("express-async-handler");

const protect = asyncHandler(async(req,res,next)=>{
    let token;

    if(req,headers.authorisation && req.headers.authorisation.startsWith("Bearer"))
    {
        try{
            token = req.headers.authorisation.split(" ")[1];
            const decoded = jwt.verify(token,process.env.JWT_SECRET);

            req.user = await User.findById(decoded.id).select("-password");

            next();
        }
        catch(error){
            res.status(401);
            throw new Error("Not authorized, token failed")
        }
    }

if(!token){
    res.status(401);
    throw new Error("Not authorized, no token")
}
});

module.exports ={protect};
