import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {editGrill,getGrillById } from '../../actions/menuItemsActions/grillActions'
import Loading from '../../components/layoutComponents/Loading'
import Error from '../../components/layoutComponents/Error'
import Success from '../../components/layoutComponents/Success'
export default function Editgrill({ match }) {

    const dispatch = useDispatch()
    const [name, setname] = useState('')
    const [price, setprice] = useState('')
    const [image, setimage] = useState('')
    const [description, setdescription] = useState('')
    const [category, setcategory] = useState('')

    const getgrillbyidstate = useSelector(state => state.getGrillByIdReducer)
    const { grill, error, loading } = getgrillbyidstate
    const editedgrillstate=useSelector((state)=>state.editGrillReducer)
    const{editloading,editerror,editsuccess}=editedgrillstate


    useEffect(() => {

        if(grill)
        {
            if(grill._id==match.params.grillid)
            {
            setname(grill.name)
            setdescription(grill.description)
            setcategory(grill.category)
            setprice(grill.price)
            setimage(grill.image)
        }
            else{
                dispatch(getGrillById(match.params.grillid));
            }
    
        }
        else{
        dispatch(getGrillById(match.params.grillid))


    }}, [grill,dispatch]); 

      function formHandler(e){
          e.preventDefault();
          const editedgrill={
              _id:match.params.grillid,
              name,
              image,
              description,
              category,
              price,
          };
  
          dispatch(editGrill(editedgrill))
     
              
              
      }
    return (
        <div>
            <h1>EditEditare Grtătar</h1>
            <h1>grătar id={match.params.grillid}</h1>
            <div className='text-left'>
                
                {loading && (<Loading />)}
                {error && (<Error error='Somethingwent wrong' />)}
                {editsuccess&&(<Success success='grill details edited successfully'/>)}
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