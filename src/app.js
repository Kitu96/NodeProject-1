const express = require('express');

const app = express();

app.get("/user" , (req,res)=>{
    res.send({firstName : "Laxmiprava" , lastName :"Mohapatra"});
})

app.post("/user",(req,res)=>{
    res.send("Data saved successfully")
});

app.delete("/user", (req,res)=>{
    res.send("Data deleted successfully!")
});

app.use("/test" , (req,res)=>{
    res.send("Hello Kitu!!");
})

app.listen(8080 , ()=>{
    console.log("Server running on port no 8080...");
})