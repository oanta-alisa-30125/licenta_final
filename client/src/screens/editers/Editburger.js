import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {editBurger,getBurgerById } from '../../actions/menuItemsActions/burgerActions'
import Loading from '../../components/layoutComponents/Loading'
import Error from '../../components/layoutComponents/Error'
import Success from '../../components/layoutComponents/Success'
export default function Editburger({ match }) {

    const dispatch = useDispatch()
    const [name, setname] = useState('')
    const [price, setprice] = useState('')
    const [image, setimage] = useState('')
    const [description, setdescription] = useState('')
    const [category, setcategory] = useState('')

    const getburgerbyidstate = useSelector(state => state.getBurgerByIdReducer)
    const { burger, error, loading } = getburgerbyidstate
    const editedburgerstate=useSelector((state)=>state.editBurgerReducer)
    const{editloading,editerror,editsuccess}=editedburgerstate


    useEffect(() => {

        if(burger)
        {
            if(burger._id==match.params.burgerid)
            {
            setname(burger.name)
            setdescription(burger.description)
            setcategory(burger.category)
            setprice(burger.price)
            setimage(burger.image)
        }
            else{
                dispatch(getBurgerById(match.params.burgerid));
            }
    
        }
        else{
        dispatch(getBurgerById(match.params.burgerid))


    }}, [burger,dispatch]); 

      function formHandler(e){
          e.preventDefault();
          const editedburger={
              _id:match.params.burgerid,
              name,
              image,
              description,
              category,
              price,
          };
  
          dispatch(editBurger(editedburger))
     
              
              
      }
    return (
        <div>
            <h1>Editare Burger</h1>
            <h1>burger id={match.params.burgerid}</h1>
            <div className='text-left'>
                
                {loading && (<Loading />)}
                {error && (<Error error='Somethingwent wrong' />)}
                {editsuccess&&(<Success success='burger details edited successfully'/>)}
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