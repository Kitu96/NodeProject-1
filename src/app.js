const express = require('express');

const app = express();
app.use("/test" , (req,res)=>{
    res.send("Hello Kitu!!");
})

app.listen(8080 , ()=>{
    console.log("Server running on port no 8080...");
})