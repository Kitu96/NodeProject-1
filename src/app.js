const express  = require('express');
const connectDB = require("./config/database");
const User = require("./models/user")

const app = express();
app.use(express.json());

app.post("/signup" , async (req,res)=>{
    const user = new User({
      firstName : "Laxmiprava",
      lastName : "Mohapatra",
      emailId: "laxmiprava@gmail.com",
      password : "laxmi@123"
    });
try{
 await user.save();
 res.send("User Data is saved successfully!");
}catch(err){
    console.log("User data is not saved.");
}
}) 

connectDB().then(()=>{
    console.log('Database connected successfully!');
      },
    app.listen(8080,()=>{
        console.log("Server is running on port 8080...")
       })).catch((err)=>{
    console.log("Database is not connected");
})



