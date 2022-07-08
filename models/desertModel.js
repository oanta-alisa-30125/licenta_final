const mongoose=require("mongoose");
const desertSchema=mongoose.Schema({
    name:{type:String,require},
    price: {type:Number,require} ,
    category: {type:String,require} ,
    image: {type:String,require} ,
    description: {type:String, require}
},{
    timestamps:true,
})

const desertModel=mongoose.model('deserts',desertSchema) 
module.exports=desertModel