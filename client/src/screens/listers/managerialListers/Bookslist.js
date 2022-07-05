import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../../components/layoutComponents/Loading'
import Error from '../../../components/layoutComponents/Error'
import {getAllBookings, deleteBook} from '../../../actions/managerialActions/bookActions'
export default function Bookslist(){
    const dispatch=useDispatch()
    const getbooksstate=useSelector(state=>state.getAllBookingsReducer)
    const {loading,error,bookings}=getbooksstate
    useEffect(()=>{
        dispatch(getAllBookings())
    },[])
    return(
        <div>
            <h1>Listă rezervări</h1>
            {loading&&(<Loading/>)}
            {error&&(<Error error='Eroare'/>)}
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th>Id rezervare</th>
                    <th>Email</th>
                    <th>Telefon</th>
                    <th>Data</th>
                    <th>Ora</th>
                    <th>Masa</th>
                    <th>Șterge</th>
                </tr>
            </thead>
            <tbody>
                {bookings&&(bookings.map(booking=>{
                    return <tr>
                        <td>{booking._id}</td>
                        <td>{booking.email}</td>
                        <td>{booking.phone}</td>
                        <td>{booking.date}</td>
                        <td>{booking.hour}</td>
                        <td>{booking.table}</td>
                        <td><i className='fa fa-trash' onClick={()=>{dispatch(deleteBook(booking._id))}}></i></td>
                    </tr>
                }))}
            </tbody>
        </table>
        </div>
    )
}   