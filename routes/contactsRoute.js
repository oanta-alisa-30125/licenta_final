const { response } = require("express");
const express=require("express");
const router=express.Router();
const Contact=require("../models/contactModel") 

router.post("/messages", async(req,res)=>{
    const {name,email,mesaj}=req.body
    const newContact=new Contact({name, email,mesaj}) 

    try{
        newContact.save()
        res.send('Mesaj trimis cu succes')
    }catch(error){
        return res.status(400).json({message:error});
    }
});

router.get("/getallmessages", async(req,res)=>{
    try{
        const contacts=await Contact.find({}).sort({createdAt:-1})
        res.send(contacts)
    }catch(error){
        return res.status(400).json({message:error})
    }
});

router.post("/deletecontact",async(req,res)=>{
    const contactid=req.body.userid
    try{
        await Contact.findOneAndDelete({_id:contactid})
   res.send('Mesaj sters cu succes')
    }catch(error){
        return res.status(400).json({message:error})

    }
});

module.exports=router