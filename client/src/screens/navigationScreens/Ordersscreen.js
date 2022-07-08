import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getUserOrders} from '../../actions/managerialActions/orderActions';
import Loading from  '../../components/layoutComponents/Loading';
import Error from '../../components/layoutComponents/Error';
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Ordersscreen(){
    AOS.init();
    const dispatch=useDispatch()
    const orderstate=useSelector(state=>state.getUserOrdersReducer)
    const {orders,error,loading}=orderstate
    useEffect(()=>{
        dispatch(getUserOrders())
    },[])
    return(
        <div className='mt-3'>
            <h2 style={{fontSize:'35px', fontFamily:'georgia'}}>Comenzile mele</h2>
            <hr/>
           <div className='row justify-content-center' data-aos="zoom-in">
               {loading &&(<Loading/>)}
               {error && (<Error error='Something went wrong'/>)}
                {orders && orders.map(order=>{
                    return <div className='col-md-8 m-2 shadow-lg p-3 mb-5 bg-white rounded'>
                        <div className='flex-container'>
                            <div className='text-left w-100 m-1'>
                                <h2 style={{fontSize:'25px'}}>Produse</h2>
                                <hr/>
                                {order.orderItems.map(item=>{
                                    return <div>
                                        <p>
                                            {(() => {                                   
                                                if(item.varient!=null)
                                                    return item.name + " [" + item.varient +"] x " + item.quantity + " = " + item.price;
                                                else
                                                    return item.name + " x " + item.quantity + " = " + item.price;
                                              return null;
                                            })()}
                                             
                                        </p>
                                        <img src={item.image} style={{weight:'80px',height:'80px'}}/>
                                    </div>
                                })}
                            </div>
                            <div className='text-left w-100 m-1'>
                                <h2 style={{fontSize:'25px'}}>Adresa de livrare</h2>
                                <hr/>
                                <p>Strada:{order.shippingAddress.street}</p>
                                <p>Oraș:{order.shippingAddress.city}</p>
                                <p>Țara:{order.shippingAddress.country}</p>
                                <p>Cod Poștal:{order.shippingAddress.pincode}</p>

                            </div>

                            <div className='text-left w-100 m-1'>
                            <h2 style={{fontSize:'25px'}}>Detalii comandă</h2>
                            <hr/>
                            <p>Prețul comenzii:{order.orderAmount}</p>
                            <p>Data comenzii:{order.createdAt.substring(0,10)}</p>
                            <p>Număr tranzacție:<br/>{order.transactionId}</p>
                            <p>Număr comandă:<br/>{order._id}</p>
                            </div>
                        </div>
                        
                        </div>
                })}
          </div>
        </div>
    )
}