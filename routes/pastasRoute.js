const express=require("express");
const res = require("express/lib/response");
const router=express.Router();
const Pasta=require('../models/pastaModel')

router.get("/getallpastas",async(req,res)=>{
    try{
        const pastas=await Pasta.find({})
        res.send(pastas)
    } catch(error){
        return res.status(400).json({message:error});
    }
});

router.post("/addpasta",async(req,res)=>{
    const pasta=req.body.pasta
    try{
        const newpasta=new Pasta({
            name:pasta.name,
            image:pasta.image,
            description:pasta.description,
            category:pasta.category,
            prices:pasta.price
        })
        await newpasta.save()
        res.send("New pasta added successfully")
    }catch(error){
        return res.status(400).json({message:error});
    }
});

router.post("/getpastabyid", async(req,res)=>{
    const pastaid=req.body.pastaid

    try{
        const pasta=await Pasta.findOne({_id:pastaid})
     res.send(pasta)
    }catch(error){
        return res.status(400).json({message:error});

    }
});

router.post("/editpasta",async(req,res)=>{
    const editedpasta=req.body.editedpasta

    try{
    const pasta=await Pasta.findOne({_id: editedpasta._id })
    pasta.name=editedpasta.name,
    pasta.description=editedpasta.description,
    pasta.image=editedpasta.image,
    pasta.category=editedpasta.category,
    pasta.price=editedpasta.price
    await pasta.save()
    res.send('pasta details edited successfully')
    }catch(error){
        return res.status(400).json({message:error});
    }
})


router.post('/deletepasta',async(req,res)=>{
    const pastaid=req.body.pastaid
    try{
        await Pasta.findOneAndDelete({_id:pastaid})
        res.send('pasta deleted successfully')
    }catch(error){
        return res.status(400).json({message:error});
    }
})
module.exports=router;