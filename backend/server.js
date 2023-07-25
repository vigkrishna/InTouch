const express = require("express");
const app = express();
const dotenv = require("dotenv")
const {chats} = require("./data")
dotenv.config();
const PORT = process.env.PORT || 7000;

app.get("/", (req,res)=>{
    res.send("api is running")
})

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