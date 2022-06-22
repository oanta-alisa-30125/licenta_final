import React, { useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addDesert } from '../../actions/menuItemsActions/desertActions'

import Loading from '../../components/layoutComponents/Loading'
import Error from '../../components/layoutComponents/Error'
import Success from '../../components/layoutComponents/Success'
export default function Adddesert() {

    const [name, setname] = useState('')
    const [price, setprice] = useState('')
    const [image, setimage] = useState('')
    const [description, setdescription] = useState('')
    const [category, setcategory] = useState('')
   
    const dispatch=useDispatch()
    const adddesertstate=useSelector(state=>state.addDesertReducer)
    const {success, error, loading}=adddesertstate
    
    
    function formHandler(e){
        e.preventDefault();
        const desert={
            name,
            image,
            description,
            category,
            price,
        }
        console.log(desert);
        dispatch(addDesert(desert));
    }

    
    return (
        <div>
            <div className='text-left'>
                <h1>Adaugă Desert</h1>

                {loading && (<Loading/>)}
                {error && (<Error error='Somethingwent wrong'/>)}
                {success && (<Success success='New desert added successfully'/>)}
                
                <form onSubmit={formHandler}>
                    <input className='form-control' type="text" placeholder="name" value={name} onChange={(e) => { setname(e.target.value) }} />

                    <input className='form-control' type="text" placeholder="price" value={price} onChange={(e) => { setprice(e.target.value) }} />

                    <input className='form-control' type="text" placeholder="category" value={category} onChange={(e) => { setcategory(e.target.value) }} />

                    <input className='form-control' type="text" placeholder="description" value={description} onChange={(e) => { setdescription(e.target.value) }} />

                    <input className='form-control' type="text" placeholder="image url" value={image} onChange={(e) => { setimage(e.target.value) }} />

                    <button className='btn mt-3' type='submit'>Adauga desert</button>
                </form>
            </div>
        </div>
    )
}