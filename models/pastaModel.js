const mongoose=require("mongoose");
const pastaSchema=mongoose.Schema({
   
    name:{type:String,require},
    price: {type:Number,require} ,
    category: {type:String,require} ,
    image: {type:String,require} ,
    description: {type:String, require}
},{
    timestamps:true,
})

const pastaModel=mongoose.model('pastas',pastaSchema) 
module.exports=pastaModel