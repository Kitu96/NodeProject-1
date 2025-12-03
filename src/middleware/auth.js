const adminAuth =(req,res,next)=>{
    const token ="xyz";
    const isAdminAuthorized = token === "xyz";
    if(!isAdminAuthorized){
        res.status(400). send("Admin is unauthorized");
    }else{
        res.send("Admin is authorized");
    }
}

const userAuth =(req,res,next)=>{
    const token ="abc";
    const isUserAuthorized = token === "abc";
    if(!isUserAuthorized){
        res.status(400).send("User is unauthorized");
    }
    next();
}

module.exports={adminAuth, userAuth}