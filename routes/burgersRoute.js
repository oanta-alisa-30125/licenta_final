const express=require("express");
const res = require("express/lib/response");
const router=express.Router();
const Burger=require('../models/burgerModel')

router.get("/getallburgers",async(req,res)=>{
    try{
        const burgers=await Burger.find({}) 
        res.send(burgers)
    } catch(error){
        return res.status(400).json({message:error});
    }
});

router.post("/addburger",async(req,res)=>{
    const burger=req.body.burger
    try{
        const newburger=new Burger({
            name:burger.name,
            image:burger.image,
            description:burger.description,
            category:burger.category,
            price:burger.price
        })
        await newburger.save()
        res.send("New burger added successfully")
    }catch(error){
        return res.status(400).json({message:error});

    }

});

router.post("/getburgerbyid", async(req,res)=>{
    const burgerid=req.body.burgerid

    try{
        const burger=await Burger.findOne({_id:burgerid})
     res.send(burger)
    }catch(error){
        return res.status(400).json({message:error});

    }
});

router.post("/editburger",async(req,res)=>{
    const editedburger=req.body.editedburger
    try{
    const burger=await Burger.findOne({_id: editedburger._id })
    burger.name=editedburger.name,
    burger.description=editedburger.description,
    burger.image=editedburger.image,
    burger.category=editedburger.category,
    burger.price=editedburger.price
    await burger.save()
    res.send('Burger details edited successfully')
    }catch(error){
        return res.status(400).json({message:error});
    }
})


router.post('/deleteburger',async(req,res)=>{
    const burgerid=req.body.burgerid
    try{
        await Burger.findOneAndDelete({_id:burgerid})
        res.send('Burger deleted successfully')
    }catch(error){
        return res.status(400).json({message:error});
    }
})

module.exports=router;