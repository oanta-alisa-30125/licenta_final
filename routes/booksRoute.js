const { response } = require("express");
const express=require("express");
const router=express.Router();
const Book=require("../models/bookingModel")
const moment=require("moment")

router.post("/newbooking", async(req,res)=>{
    const {name,email,phone,date,hour,table}=req.body
    const newBook=new Book({name,email,phone,date,hour,table}) 
    try{
        newBook.save()
        res.send('Rezervare trimisa cu succes')
    }catch(error){
        return res.status(400).json({message:error});
    }
});

router.get("/getallbookings", async(req,res)=>{
    try{
        const books=await Book.find({})
        res.send(books)
    }catch(error){
        return res.status(400).json({message:error})
    }
});

router.post("/deletebooking",async(req,res)=>{
    const bookid=req.body.bookid
    try{
        await Book.findOneAndDelete({_id:bookid})
   res.send('Rezervare stearsa cu succes')
    }catch(error){
        return res.status(400).json({message:error})

    }
});

module.exports=router