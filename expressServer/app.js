const express = require("express");

const app = express();

app.use("/test",(req,res) =>{
    res.send("hello from the test..!");
});

app.use("/hello",(req,res) =>{
    res.send("hello!!");
});



app.listen(7777,() =>{
    console.log("Server successfully listen on port 7777..!")
});