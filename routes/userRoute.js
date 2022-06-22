const { response } = require("express");
const express=require("express");//specifica pt express router
const router=express.Router();//specifica pt express router
const User=require("../models/userModel") //asa am importat user model 

router.post("/register", async(req,res)=>{
    const {name,email,password}=req.body
    try{
        const user=await User.find({email: email})
        if(user.length>0)
            res.status(400).json({message:'Emailul există'});
        else{
            const newUser=new User({name, email,password}) //asa creez modelul
            newUser.save()
            res.send('User Registered successfully')
        }
    }catch(error){
        return res.status(400).json({message:error});
    }
});

router.post("/login", async(req,res)=>{//login endpoint
    const{email,password}=req.body
    try{
        const user=await User.find({email,password})
        //cautam in mongodb obiecte si daca se potriveste emailul cu parola vom avea user deci valoarea lauser creste cu 1
        if(user.length>0)//adica userul este deja prezent in mongodb
        {
            const currentUser={
                name:user[0].name,
                email:user[0].email,
                isAdmin:user[0].isAdmin,
                _id:user[0]._id
            }
            res.send(currentUser);
        }
        else{
            return res.status(400).json({message:'User login failed'});
        }
    }catch(error){
        return res.status(400).json({message:'Something went wrong'});
    }
});

router.get("/getallusers", async(req,res)=>{
    try{
        const users=await User.find({})
        res.send(users)
    }catch(error){
        return res.status(400).json({message:error})
    }
});

router.post("/deleteuser",async(req,res)=>{
    const userid=req.body.userid
    try{
        await User.findOneAndDelete({_id:userid})
   res.send('user deleted successfully')
    }catch(error){
        return res.status(400).json({message:error})

    }
});

module.exports=router