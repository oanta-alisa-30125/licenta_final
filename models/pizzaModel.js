const mongoose=require("mongoose");
//ia datele din baza de date
const pizzaSchema=mongoose.Schema({
   //aici scriu proprietatile
    name:{type:String,require},
    varients: [] ,//array
    prices: [] ,//array
    category: {type:String,require} ,
    image: {type:String,require} ,
    description: {type:String, require}
},{
    timestamps:true,
})

const pizzaModel=mongoose.model('pizzas',pizzaSchema) //pizzas=numele din mongodb a colectiei
module.exports=pizzaModel