const mongoose=require("mongoose");
//ia datele din baza de date
const pastaSchema=mongoose.Schema({
   //aici scriu proprietatile
    name:{type:String,require},
    price: {type:Number,require} ,//array
    category: {type:String,require} ,
    image: {type:String,require} ,
    description: {type:String, require}
},{
    timestamps:true,
})

const pastaModel=mongoose.model('pastas',pastaSchema) //pizzas=numele din mongodb a colectiei
module.exports=pastaModel