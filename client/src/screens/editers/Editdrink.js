import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {editDrink,getDrinkById } from '../../actions/menuItemsActions/drinkActions'
import Loading from '../../components/layoutComponents/Loading'
import Error from '../../components/layoutComponents/Error'
import Success from '../../components/layoutComponents/Success'
export default function Editdrink({ match }) {

    const dispatch = useDispatch()
    const [name, setname] = useState('')
    const [price, setprice] = useState('')
    const [image, setimage] = useState('')
    const [description, setdescription] = useState('')
    const [category, setcategory] = useState('')

    const getdrinkbyidstate = useSelector(state => state.getDrinkByIdReducer)
    const { drink, error, loading } = getdrinkbyidstate
    const editeddrinkstate=useSelector((state)=>state.editDrinkReducer)
    const{editloading,editerror,editsuccess}=editeddrinkstate


    useEffect(() => {

        if(drink)
        {
            if(drink._id==match.params.drinkid)
            {
            setname(drink.name)
            setdescription(drink.description)
            setcategory(drink.category)
            setprice(drink.price)
            setimage(drink.image)
        }
            else{
                dispatch(getDrinkById(match.params.drinkid));
            }
    
        }
        else{
        dispatch(getDrinkById(match.params.drinkid))


    }}, [drink,dispatch]); 

      function formHandler(e){
          e.preventDefault();
          const editeddrink={
              _id:match.params.drinkid,
              name,
              image,
              description,
              category,
              price,
          };
  
          dispatch(editDrink(editeddrink))
     
              
              
      }
    return (
        <div>
            <h1>EditEditare Băutură</h1>
            <h1>băutură id={match.params.drinkid}</h1>
            <div className='text-left'>
                
                {loading && (<Loading />)}
                {error && (<Error error='Somethingwent wrong' />)}
                {editsuccess&&(<Success success='drink details edited successfully'/>)}
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