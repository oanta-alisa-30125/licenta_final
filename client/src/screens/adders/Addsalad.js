import React, { useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addSalad } from '../../actions/menuItemsActions/saladActions'

import Loading from '../../components/layoutComponents/Loading'
import Error from '../../components/layoutComponents/Error'
import Success from '../../components/layoutComponents/Success'
export default function Addsalad() {

    const [name, setname] = useState('')
    const [price, setprice] = useState('')
    const [image, setimage] = useState('')
    const [description, setdescription] = useState('')
    const [category, setcategory] = useState('')
   
    const dispatch=useDispatch()
    const addsaladstate=useSelector(state=>state.addSaladReducer)
    const {success, error, loading}=addsaladstate
    
    
    function formHandler(e){
        e.preventDefault();
        const salad={
            name,
            image,
            description,
            category,
            price,
        }
        console.log(salad);
        dispatch(addSalad(salad));
    }

    
    return (
        <div>
            <div className='text-left'>
                <h1>Adaugă Salată</h1>

                {loading && (<Loading/>)}
                {error && (<Error error='Somethingwent wrong'/>)}
                {success && (<Success success='New salad added successfully'/>)}
                
                <form onSubmit={formHandler}>
                    <input className='form-control' type="text" placeholder="name" value={name} onChange={(e) => { setname(e.target.value) }} />

                    <input className='form-control' type="text" placeholder="price" value={price} onChange={(e) => { setprice(e.target.value) }} />

                    <input className='form-control' type="text" placeholder="category" value={category} onChange={(e) => { setcategory(e.target.value) }} />

                    <input className='form-control' type="text" placeholder="description" value={description} onChange={(e) => { setdescription(e.target.value) }} />

                    <input className='form-control' type="text" placeholder="image url" value={image} onChange={(e) => { setimage(e.target.value) }} />

                    <button className='btn mt-3' type='submit'>Adauga salad</button>
                </form>
            </div>
        </div>
    )
}