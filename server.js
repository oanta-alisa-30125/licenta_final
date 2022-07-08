const express=require("express");
const Pizza=require('./models/pizzaModel')
const Burger=require('./models/burgerModel')
const Pasta=require('./models/pastaModel')
const Salad=require('./models/saladModel')
const Grill=require('./models/grillModel')
const Dish=require('./models/dishModel')
const Desert=require('./models/desertModel')
const Drink=require('./models/drinkModel')

const app=express();
const db=require("./db"); 

const pizzaModel = require("./models/pizzaModel");
const burgerModel = require("./models/burgerModel");
const pastaModel = require("./models/pastaModel");
const saladModel = require("./models/saladModel");
const grillModel = require("./models/grillModel");
const dishModel = require("./models/dishModel");
const desertModel = require("./models/desertModel");
const drinkModel = require("./models/drinkModel");

const path=require('path')

app.use(express.json());

const pizzasRoute=require('./routes/pizzasRoute')
const userRoute=require('./routes/userRoute')
const contactsRoute=require('./routes/contactsRoute')
const booksRoute=require('./routes/booksRoute')
const tablesRoute=require('./routes/tablesRoute')


const ordersRoute=require('./routes/ordersRoute')
const burgersRoute=require('./routes/burgersRoute')
const pastasRoute=require('./routes/pastasRoute')
const saladsRoute=require('./routes/saladsRoute')
const grillsRoute=require('./routes/grillsRoute')
const dishesRoute=require('./routes/dishesRoute')
const desertsRoute=require('./routes/desertsRoute')
const drinksRoute=require('./routes/drinksRoute')


app.use('/api/pizzas/',pizzasRoute)
app.use('/api/users/', userRoute)
app.use('/api/books/', booksRoute)
app.use('/api/tables/',tablesRoute)
app.use('/api/orders/',ordersRoute)
app.use('/api/burgers/',burgersRoute)
app.use('/api/pastas/',pastasRoute)
app.use('/api/salads/',saladsRoute)
app.use('/api/grills/',grillsRoute)
app.use('/api/dishes/',dishesRoute)
app.use('/api/deserts/',desertsRoute)
app.use('/api/drinks/',drinksRoute)
app.use('/api/contacts/',contactsRoute)


if(process.env.NODE_ENV=='production')
{
    app.use('/',express.static('client/build'))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client/build/index.html'))
    })
}

const port=process.env.PORT||5000; 

app.listen(port,()=>"Server running on port port");

