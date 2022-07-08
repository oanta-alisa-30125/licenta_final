const express=require("express");
const res = require("express/lib/response");
const router=express.Router();
const Dish=require('../models/dishModel')

router.get("/getalldishes",async(req,res)=>{
    try{
        const dishes=await Dish.find({})
        res.send(dishes)
    } catch(error){
        return res.status(400).json({message:error});
    }
});
router.post("/adddish",async(req,res)=>{
    const dish=req.body.dish
    try{
        const newdish=new Dish({
            name:dish.name,
            image:dish.image,
            description:dish.description,
            category:dish.category,
            price:dish.price
        })
        await newdish.save()
        res.send("New dish added successfully")
    }catch(error){
        return res.status(400).json({message:error});

    }

});
router.post("/getdishbyid", async(req,res)=>{
    const dishid=req.body.dishid

    try{
        const dish=await Dish.findOne({_id:dishid})
     res.send(dish)
    }catch(error){
        return res.status(400).json({message:error});

    }
});

router.post("/editdish",async(req,res)=>{
    const editeddish=req.body.editeddish

    try{
    const dish=await Dish.findOne({_id: editeddish._id })
    dish.name=editeddish.name,
    dish.description=editeddish.description,
    dish.image=editeddish.image,
    dish.category=editeddish.category,
    dish.price=editeddish.price
    await dish.save()
    res.send('dish details edited successfully')
    }catch(error){
        return res.status(400).json({message:error});
    }
})


router.post('/deletedish',async(req,res)=>{
    const dishid=req.body.dishid
    try{
        await Dish.findOneAndDelete({_id:dishid})
        res.send('dish deleted successfully')
    }catch(error){
        return res.status(400).json({message:error});
    }
})
module.exports=router;