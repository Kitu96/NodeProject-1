const express = require('express');

const app = express();

const { adminAuth, userAuth } = require("./middleware/auth");

app.get("/admin/getAllData" ,adminAuth,(req,res,next)=>{
res.send("Data fetched");
});

app.get("/admin/deleteAdmin" ,adminAuth, (req,res,next)=>{
    res.send("Admin deleted successfully");
})

app.get("/user" , userAuth , (req,res,next)=>{
    res.send("User information");
})

app.use("/" , (err,req,res,next)=>{
    res.status(500).send("Something went wrong!")
});

app.listen(8080,()=>{
    console.log("Server is running on port 8080...")
})