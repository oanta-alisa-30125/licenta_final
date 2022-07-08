const express=require("express");
const res = require("express/lib/response");
const router=express.Router();
const Grill=require('../models/grillModel')

router.get("/getallgrills",async(req,res)=>{
    try{
        const grills=await Grill.find({})
        res.send(grills)
    } catch(error){
        return res.status(400).json({message:error});
    }
});
router.post("/addgrill",async(req,res)=>{
    const grill=req.body.grill
    try{
        const newgrill=new Grill({
            name:grill.name,
            image:grill.image,
            description:grill.description,
            category:grill.category,
            price:grill.price
        })
        await newgrill.save()
        res.send("New grill added successfully")
    }catch(error){
        return res.status(400).json({message:error});

    }

});
router.post("/getgrillbyid", async(req,res)=>{
    const grillid=req.body.grillid

    try{
        const grill=await Grill.findOne({_id:grillid})
     res.send(grill)
    }catch(error){
        return res.status(400).json({message:error});

    }
});

router.post("/editgrill",async(req,res)=>{
    const editedgrill=req.body.editedgrill

    try{
    const grill=await Grill.findOne({_id: editedgrill._id })
    grill.name=editedgrill.name,
    grill.description=editedgrill.description,
    grill.image=editedgrill.image,
    grill.category=editedgrill.category,
    grill.price=editedgrill.price
    await grill.save()
    res.send('grill details edited successfully')
    }catch(error){
        return res.status(400).json({message:error});
    }
})


router.post('/deletegrill',async(req,res)=>{
    const grillid=req.body.grillid
    try{
        await Grill.findOneAndDelete({_id:grillid})
        res.send('grill deleted successfully')
    }catch(error){
        return res.status(400).json({message:error});
    }
})

module.exports=router;