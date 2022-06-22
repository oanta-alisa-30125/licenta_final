const mongoose=require("mongoose");
//ia datele din baza de date
const grillSchema=mongoose.Schema({
   //aici scriu proprietatile
    name:{type:String,require},
    price: {type:Number,require} ,//array
    category: {type:String,require} ,
    image: {type:String,require} ,
    description: {type:String, require}
},{
    timestamps:true,
})

const grillModel=mongoose.model('grills',grillSchema) //pizzas=numele din mongodb a colectiei
module.exports=grillModel