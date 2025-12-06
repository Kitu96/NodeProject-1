const express  = require('express');
const connectDB = require("./config/database");
const User = require("./models/user")

const app = express();
app.use(express.json());

app.post("/signup" , async (req,res)=>{
    const user = new User(req.body);
   try{
   await user.save();
   res.send("User Data is saved successfully!");
    }catch(err){
    console.log("User data is not saved.");
}}) 

app.get("/user" , async (req,res)=>{
  try{
    const user = await User.find({emailId:req.body.emailId});
    if(user.length===0)
    {
      res.status(400).send("something went wrong");
    }
    res.send(user);
  }catch(err){
    console.error("USer not found!")
  }
})

app.get("/feed" , async(req,res)=>{
  try{
    const user = await User.find({});
    res.send(user);
  }catch(err){
    console.error("No found the feeds" + err.message);
    
  }
})

app.delete("/user" , async(req,res)=>{
  const id = req.body;
  try{
    const user = await User.findOneAndDelete({_id :id});
    res.send(user);
  }catch(err){
    res.status(400).send("Unable to delete the user");
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



