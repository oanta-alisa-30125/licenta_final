import React,{useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from "../../actions/managerialActions/orderActions";
import Error from "../layoutComponents/Error"
import Loading from "../layoutComponents/Loading"
import Success from "../layoutComponents/Success"
import { deleteEverythingFromCart } from "../../actions/managerialActions/cartActions";
export default function Checkout({subtotal}){
    const orderstate=useSelector((state)=>state.placeOrderReducer)
    const {loading,error,success}=orderstate
    const dispatch=useDispatch()
    
    function tokenHander(token){
        console.log(token);
        dispatch(placeOrder(token,subtotal))
    }

    useEffect(()=>{
        if(success == true)
            dispatch(deleteEverythingFromCart());
    },[success])

    return(
        <div>
            {loading && (<Loading/>)}
            {success && (<Success success='Comanda s-a inregistrat cu success'/>)}
            {error && (<Error error='Something went wrond'/>)}
            <StripeCheckout
            //inmultim cu 100 pt ca in stripe se fac centi
            amount={subtotal*100}
            shippingAddress
            token={tokenHander}
            stripeKey='pk_test_51Kaz5vJCgqMIiSUCwsBWz9GMD1AVvjVQRjcj5xwTbVjZuZmS673ARZq8emzG1jr9iZQ3ToU7qnwydMUjjT70OPmL00SjGNtLeL'
            currency='RON'
            >
                <button className="btn">Platește</button>
            </StripeCheckout>
        </div>
    )
}