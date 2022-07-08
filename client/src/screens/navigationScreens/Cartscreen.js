import React from "react"
import {useSelector,useDispatch} from 'react-redux'
import {addToCart, addToCartOther} from '../../actions/managerialActions/cartActions'
import { deleteFromCart } from "../../actions/managerialActions/cartActions"
import Checkout from "../../components/layoutComponents/Checkout"
import AOS from 'aos' 
import 'aos/dist/aos.css'

export default function Cartscreen(){
    AOS.init();
    const cartstate=useSelector(state=>state.cartReducer)
    const cartItems=cartstate.cartItems
    const { currentUser } = useSelector(state => state.loginUserReducer)
    
    var subtotal=cartItems.reduce((x,item)=>x+item.price,0)
    const dispatch=useDispatch()

    return(
        <div>
             {currentUser ?
            <div className="row justify-content-center" data-aos="fade-right">
                <div className="col-md-6 mt-5">
                    
                     <h2 style={{fontSize:'40px', fontFamily:"georgia"}}>Coșul meu</h2>
                    

                    {cartItems.map(item=>{
                        return <div className="flex-container">

                        <div className='text-left m-1 w-100'>
                            <h1>{item.name}</h1> 
                            {(() => {                                   
                                        if(item.varient!=null)
                                            return <h1>Dimensiune: {item.varient}</h1>
 
                                            return null;
                                    })()}
                            <h1>Preț: {item.quantity} x {item.unitPrice} = {item.quantity*item.unitPrice}</h1>
                            <h1 style={{display:'inline'}}>Cantitate</h1>
                            <i className="fa fa-plus" aria-hidden="true" onClick={()=>{ dispatch(addToCartOther(item,item.quantity+1))}}></i>
                            <b>{item.quantity}</b>
                            <i className="fa fa-minus" aria-hidden="true" onClick={()=>{dispatch(addToCartOther(item,item.quantity-1))}}></i>
                            <hr/>
                        </div>

                        <div className='m-1 w-100'>
                            <img src={item.image} style={{weight:'80px',height:'80px'}}/>
                        </div>

                        <div className='m-1 w-100'>
                        <i className="fa fa-trash" aria-hidden="true" onClick={()=>{dispatch(deleteFromCart(item))}}></i>
                        </div>


                    </div>
                    })}

                    
                    </div>


                   
                    <div className="col-md-4 text-right mt-5">
                    
                    <h2 style={{fontSize:'35px',fontFamily:"georgia"}}>SubTotal :{subtotal} / RON</h2>
                    <Checkout subtotal={subtotal}/>
                     
                    </div> 
                    
                </div> :<h2 style={{fontSize:'20px', fontFamily:"georgia", marginTop:'60px'}}>Nu se pot plasa comenzi fără un cont de utilizator valid</h2>}
        </div>
    )
}






