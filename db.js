const mongoose=require("mongoose");

var mongoURL="mongodb+srv://alisa:alisa@cluster0.cngjd.mongodb.net/alisa-pizza"

mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlParser:true})

var db=mongoose.connection

db.on('connected',()=>{
    console.log('Mongo DB Connection Successfull');
})

db.on('error',()=>{
    console.log('Mongo DB Connection Failed');
})

module.exports=mongoose