import React, { useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addPasta } from '../../actions/menuItemsActions/pastaActions'

import Loading from '../../components/layoutComponents/Loading'
import Error from '../../components/layoutComponents/Error'
import Success from '../../components/layoutComponents/Success'
export default function Addpasta() {

    const [name, setname] = useState('')
    const [price, setprice] = useState('')
    const [image, setimage] = useState('')
    const [description, setdescription] = useState('')
    const [category, setcategory] = useState('')
   
    const dispatch=useDispatch()
    const addpastastate=useSelector(state=>state.addPastaReducer)
    const {success, error, loading}=addpastastate
    
    
    function formHandler(e){
        e.preventDefault();
        const pasta={
            name,
            image,
            description,
            category,
            price,
        }
        console.log(pasta);
        dispatch(addPasta(pasta));
    }

    
    return (
        <div>
            <div className='text-left'>
                <h1>Adaugă Paste</h1>

                {loading && (<Loading/>)}
                {error && (<Error error='Ceva nu a funcționat bine'/>)}
                {success && (<Success success='Paste adăugate cu success'/>)}
                
                <form onSubmit={formHandler}>
                    <input className='form-control' type="text" placeholder="nume" value={name} onChange={(e) => { setname(e.target.value) }} />

                    <input className='form-control' type="text" placeholder="pret" value={price} onChange={(e) => { setprice(e.target.value) }} />

                    <input className='form-control' type="text" placeholder="categorie" value={category} onChange={(e) => { setcategory(e.target.value) }} />

                    <input className='form-control' type="text" placeholder="descriere" value={description} onChange={(e) => { setdescription(e.target.value) }} />

                    <input className='form-control' type="text" placeholder="imagine url" value={image} onChange={(e) => { setimage(e.target.value) }} />

                    <button className='btn mt-3' type='submit'>Adauga paste</button>
                </form>
            </div>
        </div>
    )
}