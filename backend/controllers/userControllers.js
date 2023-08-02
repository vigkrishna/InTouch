const expressAsyncHandler = require("express-async-handler");
const User = require("../models/userModel")
const generateToken =  require("../config/generateToken")


const registerUser = expressAsyncHandler(async (req,res)=>{
    const {name,email,password,pic} = req.body;

    if(!name || !email || !password){
        res.status(400);
        throw new Error("Please enter all fields");

    }

    const userExists = await User.findOne({email});

    if(userExists){
        res.status(400);
        throw new Error("user already exits");
    }


    const user = await User.create({
        name,
        email,
        password,
        pic,
    })
    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),

        })
    }
    else{
        res.status(400);
        throw new Error("user not found")
    }
});


const authUser = expressAsyncHandler(async(req,res)=>{
    const {email, password} = req.body;

    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password)))
    {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
        }
    );
    }
    else{
        res.status(401);
        throw new Error("invalid email or password");
    }

})

const allUsers =expressAsyncHandler(async(req,res)=>{

const keyword = req.query.search ?{
    $or: [
        {
            name: {$regex: req.query.search, $option: "i"}
        },
        {
            email: {$regex: req.query.search, $option: "i"}
        },
    ],
}
: {};

const users = await User.find(keyword);

res.send(users);



})


const chatpersons =expressAsyncHandler(async(req,res)=>{

    const searchUsers = req.query.UserG ?{
        $or: [
            {
                name: {$regex: req.query.UserG, $option: "i"}
            },
            {
                email: {$regex: req.query.UserG, $option: "i"}
            },
        ],
    }
    : {};
    
    const users1 = await User.find(searchUsers);
    
    res.send(users1);
    






})

module.exports= {registerUser, authUser, allUsers,chatpersons}
