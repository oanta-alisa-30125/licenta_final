import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../../components/layoutComponents/Loading'
import Error from '../../../components/layoutComponents/Error'
import { getAllMessages } from '../../../actions/managerialActions/contactActions'
export default function Contactslist(){
    const dispatch=useDispatch()
    const getmessagesstate=useSelector(state=>state.getAllMessagesReducer)
    const {loading,error,contacts}=getmessagesstate
    useEffect(()=>{
        dispatch(getAllMessages())
    },[])
    return(
        <div>
            <h1>Listă mesaje</h1>
            {loading&&(<Loading/>)}
            {error&&(<Error error='Something went wrong'/>)}
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th>Id contact</th>
                    <th>Nume</th>
                    <th>Email</th>
                    <th>Mesaj</th>
                    <th>Data</th>

                </tr>
            </thead>
            <tbody>
                {contacts&&(contacts.map(contact=>{
                    return <tr>
                        <td>{contact._id}</td>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>{contact.mesaj}</td>
                        <td>{contact.createdAt.substring(0,10)}</td>
                    </tr>
                }))}
            </tbody>
        </table>
        </div>
    )
}   