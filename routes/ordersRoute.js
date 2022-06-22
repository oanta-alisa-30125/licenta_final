const express=require("express");
const router=express.Router();
const { v4:uuidv4 }=require('uuid');
const stripe=require("stripe")("sk_test_51Kaz5vJCgqMIiSUC45tMgOsULtZTj46XjbB2cYwwzbjW91iUkJgig2OHPxNk4mm036tZkfRbcTeAVtpWnSmKtCfP00tvTihaM0")

const Order=require('../models/orderModel')

router.post("/placeorder",async(req,res)=>{
    //parametrii din frontend:
    const {token,subtotal,currentUser,cartItems}=req.body

    try {
        const customer=await stripe.customers.create({
            email:token.email,
            source:token.id
        })

        const payment=await stripe.charges.create({
            amount:subtotal*100,
            currency:'RON',
            customer:customer.id,
            receipt_email:token.email
        },{
            //unic pt fiecare comand
            idempotencyKey:uuidv4()
        }
        )
        if(payment){

            const neworder=new Order({
                name:currentUser.name,
                email:currentUser.email,
                userid:currentUser._id,
                orderItems:cartItems,
                orderAmount:subtotal,
                shippingAddress:{
                    street:token.card.address_line1,
                    city:token.card.address_city,
                    country:token.card.address_country,
                    pincode:token.card.address_zip
                },
                transactionId:payment.source.id
            })

            neworder.save()

            res.send('Comanda plasata cu succes')
        }else{
            res.send('Payment failed')
        }
    } catch (error) {
        return res.status(400).json({message:'something went wrong', error});
    }

});


router.post("/getuserorders",async(req,res)=>{
    const{userid}=req.body
    try {
        const orders=await Order.find({userid:userid}).sort({_id:-1})//sa fie sortate comenzile dupa data
        res.send(orders)
    } catch (error) {
        return res.status(400).json({message:'something went wrong', error});
        
    }
});

router.get("/getallorders",async(req,res)=>{
    try{
        const orders=await Order.find({}).sort({createdAt:-1})
  res.send(orders)
    }catch(error){
        return res.status(400).json({message:error});
    }
});

router.post("/deliverorder",async(req,res)=>{
    const orderid=req.body.orderid
    try{
        const order=await Order.findOne({_id:orderid})
        order.isDelivered=true
        await order.save()
        res.send('order delivered successfully')
    }catch(error){
        return res.status(400).json({message:'something went wrong'})
    }
});

module.exports=router