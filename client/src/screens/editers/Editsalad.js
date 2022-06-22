import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {editSalad,getSaladById } from '../../actions/menuItemsActions/saladActions'
import Loading from '../../components/layoutComponents/Loading'
import Error from '../../components/layoutComponents/Error'
import Success from '../../components/layoutComponents/Success'
export default function Editsalad({ match }) {

    const dispatch = useDispatch()
    const [name, setname] = useState('')
    const [price, setprice] = useState('')
    const [image, setimage] = useState('')
    const [description, setdescription] = useState('')
    const [category, setcategory] = useState('')

    const getsaladbyidstate = useSelector(state => state.getSaladByIdReducer)
    const { salad, error, loading } = getsaladbyidstate
    const editedsaladstate=useSelector((state)=>state.editSaladReducer)
    const{editloading,editerror,editsuccess}=editedsaladstate


    useEffect(() => {

        if(salad)
        {
            if(salad._id==match.params.saladid)
            {
            setname(salad.name)
            setdescription(salad.description)
            setcategory(salad.category)
            setprice(salad.price)
            setimage(salad.image)
        }
            else{
                dispatch(getSaladById(match.params.saladid));
            }
    
        }
        else{
        dispatch(getSaladById(match.params.saladid))


    }}, [salad,dispatch]); 

      function formHandler(e){
          e.preventDefault();
          const editedsalad={
              _id:match.params.saladid,
              name,
              image,
              description,
              category,
              price,
          };
  
          dispatch(editSalad(editedsalad))
     
              
              
      }
    return (
        <div>
            <h1>Editare Salată</h1>
            <h1>salată id={match.params.saladid}</h1>
            <div className='text-left'>
                
                {loading && (<Loading />)}
                {error && (<Error error='Somethingwent wrong' />)}
                {editsuccess&&(<Success success='salad details edited successfully'/>)}
                {editloading && (<Loading/>)}

                <form onSubmit={formHandler}>
                    <input className='form-control' type="text" placeholder="name" value={name} onChange={(e) => { setname(e.target.value) }} />

                    <input className='form-control' type="text" placeholder="varient price" value={price} onChange={(e) => { setprice(e.target.value) }} />

                    <input className='form-control' type="text" placeholder="categroy" value={category} onChange={(e) => { setcategory(e.target.value) }} />

                    <input className='form-control' type="text" placeholder="description" value={description} onChange={(e) => { setdescription(e.target.value) }} />

                    <input className='form-control' type="text" placeholder="image url" value={image} onChange={(e) => { setimage(e.target.value) }} />

                    <button className='btn mt-3' type='submit'>Salvează</button>
                </form>
            </div>

        </div>
    )
}