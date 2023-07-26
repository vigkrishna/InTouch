const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique:true},
    password: {type:String, required: true},
    pic: {type:String, 
        default: "https://tse4.mm.bing.net/th?id=OIP.Xi5HZyCo4UpdOUF-pWEbGQHaHa&pid=Api&P=0&h=180" }
},
{
    timestamps: true,
})

const User = mongoose.model("User", userSchema);
module.exports = User;