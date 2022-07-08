const mongoose=require("mongoose");

const saladSchema=mongoose.Schema({
   
    name:{type:String,require},
    price: {type:Number,require} ,
    category: {type:String,require} ,
    image: {type:String,require} ,
    description: {type:String, require}
},{
    timestamps:true,
})

const saladModel=mongoose.model('salads',saladSchema) 
module.exports=saladModel