const express = require('express');

const app = express();

app.use("/user" , (req,res,next)=>{
    console.log("Handling user response");
    next();
},(req,res,next)=>{
    console.log("Handling 2nd response");
    //res.send("2nd response");
    next();
},(req,res,next)=>{
    console.log("Handling 3rd response");
    res.send("3rd response");
});

app.listen(8080,()=>{
    console.log("Server is running on port 8080...")
})