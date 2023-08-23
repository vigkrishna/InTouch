const jwt = require("jsonwebtoken");

const generateToken =(id)=>{
    //generating new user token
    return jwt.sign({id}, process.env.JWT_SECRET,{
        //expiry of user for a single time, to clear cookies 
        expiresIn: "0d"
    } )
}

const tokenExpiry =(id)=>{
    //this function is to permanently delete a token of a particular user,
    //if he/she is not chatting for a particular time period

    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn: "45d"
    })
}
module.exports =generateToken