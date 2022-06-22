import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../../components/layoutComponents/Loading'
import Error from '../../../components/layoutComponents/Error'
import {getAllOrders,deliverOrder} from '../../../actions/managerialActions/orderActions'
export default function Orderslist(){
    const dispatch=useDispatch()
    const getordersstate=useSelector(state=>state.getAllOrdersReducer)
    const {loading,error,orders}=getordersstate
    useEffect(()=>{
        dispatch(getAllOrders())
    },[])
    return(
        <div>
            <h1>Listă comenzi</h1>
            {loading&&(<Loading/>)}
            {error&&(<Error error='Something went wrong'/>)}
        <table className='table table-striped table-bordered'>
            <thead className='thead-dark'>
                <tr>
                    <th>Id comandă</th>
                    <th>Email</th>
                    <th>Id user</th>
                    <th>Total</th>
                    <th>Data</th>
                    <th>Status comandă</th>
                </tr>
            </thead>
            <tbody>
                {orders&&(orders.map(order=>{
                    return <tr>
                        <td>{order._id}</td>
                        <td>{order.email}</td>
                        <td>{order.userid}</td>
                        <td>{order.orderAmount}</td>
                        <td>{order.createdAt.substring(0,10)}</td>
                        <td>
                        {order.isDelivered ?(<h1>Comandă livrată</h1>):(<button className='btn' onClick={()=>{dispatch(deliverOrder(order._id))}}>Livrează</button>)}
                        </td>
                    </tr>
                }))}
            </tbody>
        </table>
        </div>
    )
}   