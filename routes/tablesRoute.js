const { response } = require("express");
const express=require("express");//specifica pt express router
const router=express.Router();//specifica pt express router
const Table=require("../models/tableModel") //asa am importat user model 

router.get("/getalltables", async(req,res)=>{
    try{
        const tables=await Table.find({})
        res.send(tables)
    }catch(error){
        return res.status(400).json({message:error})
    }
});

router.post("/edittable",async(req,res)=>{
    const editedtable=req.body.editedtable

    try{
    const table=await Table.findOne({_id: editedtable._id })
    table.name=editedtable.name
    table.bookings=editedtable.bookings

    await table.save()
    res.send('Masa editata cu succes')
    }catch(error){
        return res.status(400).json({message:error});
    }
});
module.exports=router