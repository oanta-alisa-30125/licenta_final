import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {editPizza,getPizzaById } from '../../actions/menuItemsActions/pizzaActions'
import Loading from '../../components/layoutComponents/Loading'
import Error from '../../components/layoutComponents/Error'
import Success from '../../components/layoutComponents/Success'
export default function Editpizza({ match }) {

    const dispatch = useDispatch()
    const [name, setname] = useState('')
    const [smallprice, setsmallprice] = useState()
    const [mediumprice, setmediumprice] = useState()
    const [largeprice, setlargeprice] = useState()
    const [image, setimage] = useState('')
    const [description, setdescription] = useState('')
    const [category, setcategory] = useState('')

    const getpizzabyidstate = useSelector(state => state.getPizzaByIdReducer)
    const { pizza, error, loading } = getpizzabyidstate
    const editedpizzastate=useSelector((state)=>state.editPizzaReducer)
    const{editloading,editerror,editsuccess}=editedpizzastate


    useEffect(() => {

        if(pizza)
        {
            if(pizza._id==match.params.pizzaid)
            {
            setname(pizza.name)
            setdescription(pizza.description)
            setcategory(pizza.category)
            setsmallprice(pizza.prices[0]['mică'])
            setmediumprice(pizza.prices[0]['medie'])
            setlargeprice(pizza.prices[0]['mare'])
            setimage(pizza.image)
        }
            else{
                dispatch(getPizzaById(match.params.pizzaid));
            }
    
        }
        else{
        dispatch(getPizzaById(match.params.pizzaid))


    }}, [pizza,dispatch]); 

      function formHandler(e){
          e.preventDefault();
          const editedpizza={
              _id:match.params.pizzaid,
              name,
              image,
              description,
              category,
              prices:{
                  small:smallprice,
                  medium:mediumprice,
                  large:largeprice
              },
          };
  
          dispatch(editPizza(editedpizza))
     
              
              
      }
    return (
        <div>
            <h1>Editare Pizza</h1>
            <h1>Pizza id={match.params.pizzaid}</h1>
            <div className='text-left'>
                
                {loading && (<Loading />)}
                {error && (<Error error='Somethingwent wrong' />)}
                {editsuccess&&(<Success success='Pizza details edited successfully'/>)}
                {editloading && (<Loading/>)}

                <form onSubmit={formHandler}>
                    <input className='form-control' type="text" placeholder="name" value={name} onChange={(e) => { setname(e.target.value) }} />

                    <input className='form-control' type="text" placeholder="small varient price" value={smallprice} onChange={(e) => { setsmallprice(e.target.value) }} />

                    <input className='form-control' type="text" placeholder="medium varient price" value={mediumprice} onChange={(e) => { setmediumprice(e.target.value) }} />

                    <input className='form-control' type="text" placeholder="large varient price" value={largeprice} onChange={(e) => { setlargeprice(e.target.value) }} />

                    <input className='form-control' type="text" placeholder="categroy" value={category} onChange={(e) => { setcategory(e.target.value) }} />

                    <input className='form-control' type="text" placeholder="description" value={description} onChange={(e) => { setdescription(e.target.value) }} />

                    <input className='form-control' type="text" placeholder="image url" value={image} onChange={(e) => { setimage(e.target.value) }} />

                    <button className='btn mt-3' type='submit'>Salvează</button>
                </form>
            </div>

        </div>
    )
}