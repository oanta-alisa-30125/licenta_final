const express=require("express");
const res = require("express/lib/response");
const router=express.Router();
const Salad=require('../models/saladModel')

router.get("/getallsalads",async(req,res)=>{
    try{
        const salads=await Salad.find({})
        res.send(salads)
    } catch(error){
        return res.status(400).json({message:error});
    }
});
router.post("/addsalad",async(req,res)=>{
    const salad=req.body.salad
    try{
        const newsalad=new Salad({
            name:salad.name,
            image:salad.image,
            description:salad.description,
            category:salad.category,
            price:salad.price
        })
        await newsalad.save()
        res.send("New salad added successfully")
    }catch(error){
        return res.status(400).json({message:error});

    }

});

router.post("/getsaladbyid", async(req,res)=>{
    const saladid=req.body.saladid

    try{
        const salad=await Salad.findOne({_id:saladid})
     res.send(salad)
    }catch(error){
        return res.status(400).json({message:error});

    }
});

router.post("/editsalad",async(req,res)=>{
    const editedsalad=req.body.editedsalad

    try{
    const salad=await Salad.findOne({_id: editedsalad._id })
    salad.name=editedsalad.name,
    salad.description=editedsalad.description,
    salad.image=editedsalad.image,
    salad.category=editedsalad.category,
    salad.price=editedsalad.price
    await salad.save()
    res.send('salad details edited successfully')
    }catch(error){
        return res.status(400).json({message:error});
    }
})


router.post('/deletesalad',async(req,res)=>{
    const saladid=req.body.saladid
    try{
        await Salad.findOneAndDelete({_id:saladid})
        res.send('salad deleted successfully')
    }catch(error){
        return res.status(400).json({message:error});
    }
})
module.exports=router;