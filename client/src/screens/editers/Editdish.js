import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {editDish,getDishById } from '../../actions/menuItemsActions/dishActions'
import Loading from '../../components/layoutComponents/Loading'
import Error from '../../components/layoutComponents/Error'
import Success from '../../components/layoutComponents/Success'
export default function Editdish({ match }) {

    const dispatch = useDispatch()
    const [name, setname] = useState('')
    const [price, setprice] = useState('')
    const [image, setimage] = useState('')
    const [description, setdescription] = useState('')
    const [category, setcategory] = useState('')

    const getdishbyidstate = useSelector(state => state.getDishByIdReducer)
    const { dish, error, loading } = getdishbyidstate
    const editeddishstate=useSelector((state)=>state.editDishReducer)
    const{editloading,editerror,editsuccess}=editeddishstate


    useEffect(() => {

        if(dish)
        {
            if(dish._id==match.params.dishid)
            {
            setname(dish.name)
            setdescription(dish.description)
            setcategory(dish.category)
            setprice(dish.price)
            setimage(dish.image)
        }
            else{
                dispatch(getDishById(match.params.dishid));
            }
    
        }
        else{
        dispatch(getDishById(match.params.dishid))


    }}, [dish,dispatch]); 

      function formHandler(e){
          e.preventDefault();
          const editeddish={
              _id:match.params.dishid,
              name,
              image,
              description,
              category,
              price,
          };
  
          dispatch(editDish(editeddish))
     
              
              
      }
    return (
        <div>
            <h1>Editare Garnitură</h1>
            <h1>garnitură id={match.params.dishid}</h1>
            <div className='text-left'>
                
                {loading && (<Loading />)}
                {error && (<Error error='Somethingwent wrong' />)}
                {editsuccess&&(<Success success='dish details edited successfully'/>)}
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