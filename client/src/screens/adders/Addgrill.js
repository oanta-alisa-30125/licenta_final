import React, { useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addGrill } from '../../actions/menuItemsActions/grillActions'

import Loading from '../../components/layoutComponents/Loading'
import Error from '../../components/layoutComponents/Error'
import Success from '../../components/layoutComponents/Success'
export default function Addgrill() {

    const [name, setname] = useState('')
    const [price, setprice] = useState('')
    const [image, setimage] = useState('')
    const [description, setdescription] = useState('')
    const [category, setcategory] = useState('')
   
    const dispatch=useDispatch()
    const addgrillstate=useSelector(state=>state.addGrillReducer)
    const {success, error, loading}=addgrillstate
    
    
    function formHandler(e){
        e.preventDefault();
        const grill={
            name,
            image,
            description,
            category,
            price,
        }
        console.log(grill);
        dispatch(addGrill(grill));
    }

    
    return (
        <div>
            <div className='text-left'>
                <h1>Adaugă grill</h1>

                {loading && (<Loading/>)}
                {error && (<Error error='Somethingwent wrong'/>)}
                {success && (<Success success='New grill added successfully'/>)}
                
                <form onSubmit={formHandler}>
                    <input className='form-control' type="text" placeholder="nume" value={name} onChange={(e) => { setname(e.target.value) }} />

                    <input className='form-control' type="text" placeholder="pret" value={price} onChange={(e) => { setprice(e.target.value) }} />

                    <input className='form-control' type="text" placeholder="categorie" value={category} onChange={(e) => { setcategory(e.target.value) }} />

                    <input className='form-control' type="text" placeholder="descriere" value={description} onChange={(e) => { setdescription(e.target.value) }} />

                    <input className='form-control' type="text" placeholder="imagine url" value={image} onChange={(e) => { setimage(e.target.value) }} />

                    <button className='btn mt-3' type='submit'>Adauga grill</button>
                </form>
            </div>
        </div>
    )
}