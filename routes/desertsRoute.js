const express=require("express");
const res = require("express/lib/response");
const router=express.Router();
const Desert=require('../models/desertModel')

router.get("/getalldeserts",async(req,res)=>{
    try{
        const deserts=await Desert.find({})
        res.send(deserts)
    } catch(error){
        return res.status(400).json({message:error});
    }
});

router.post("/adddesert",async(req,res)=>{
    const desert=req.body.desert
    try{
        const newdesert=new Desert({
            name:desert.name,
            image:desert.image,
            description:desert.description,
            category:desert.category,
            price:desert.price
        })
        await newdesert.save()
        res.send("New desert added successfully")
    }catch(error){
        return res.status(400).json({message:error});

    }

});
router.post("/getdesertbyid", async(req,res)=>{
    const desertid=req.body.desertid

    try{
        const desert=await Desert.findOne({_id:desertid})
     res.send(desert)
    }catch(error){
        return res.status(400).json({message:error});

    }
});

router.post("/editdesert",async(req,res)=>{
    const editeddesert=req.body.editeddesert

    try{
    const desert=await Desert.findOne({_id: editeddesert._id })
    desert.name=editeddesert.name,
    desert.description=editeddesert.description,
    desert.image=editeddesert.image,
    desert.category=editeddesert.category,
    desert.price=editeddesert.price
    await desert.save()
    res.send('desert details edited successfully')
    }catch(error){
        return res.status(400).json({message:error});
    }
})


router.post('/deletedesert',async(req,res)=>{
    const desertid=req.body.desertid
    try{
        await Desert.findOneAndDelete({_id:desertid})
        res.send('desert deleted successfully')
    }catch(error){
        return res.status(400).json({message:error});
    }
})
module.exports=router;