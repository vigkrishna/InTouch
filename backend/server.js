const express = require("express");
const app = express();
const dotenv = require("dotenv")
const {chats} = require("./data")
const userRoutes = require("./routes/userRoutes")

dotenv.config();
const connectDB = require("./config/db")
const PORT = process.env.PORT || 7000;
const cors = require('cors');


connectDB();
app.use(cors());

app.get("/", (req,res)=>{
    res.send("api is running")
})

app.use('/api/user', userRoutes)

app.get("/api/chats", (req,res)=>{
    res.send(chats);
})

app.get("/api/chats/:id", (req,res)=>{
    // console.log(req.params.id)
    const idno =  chats.find((c)=>c._id === req.params.id);
    res.send(idno)
})



app.listen(PORT, (res,req)=>{
    console.log("server is running")
})