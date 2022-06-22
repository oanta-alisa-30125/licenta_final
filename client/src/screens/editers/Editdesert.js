import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {editDesert,getDesertById } from '../../actions/menuItemsActions/desertActions'
import Loading from '../../components/layoutComponents/Loading'
import Error from '../../components/layoutComponents/Error'
import Success from '../../components/layoutComponents/Success'
export default function Editdesert({ match }) {

    const dispatch = useDispatch()
    const [name, setname] = useState('')
    const [price, setprice] = useState('')
    const [image, setimage] = useState('')
    const [description, setdescription] = useState('')
    const [category, setcategory] = useState('')

    const getdesertbyidstate = useSelector(state => state.getDesertByIdReducer)
    const { desert, error, loading } = getdesertbyidstate
    const editeddesertstate=useSelector((state)=>state.editDesertReducer)
    const{editloading,editerror,editsuccess}=editeddesertstate


    useEffect(() => {

        if(desert)
        {
            if(desert._id==match.params.desertid)
            {
            setname(desert.name)
            setdescription(desert.description)
            setcategory(desert.category)
            setprice(desert.price)
            setimage(desert.image)
        }
            else{
                dispatch(getDesertById(match.params.desertid));
            }
    
        }
        else{
        dispatch(getDesertById(match.params.desertid))


    }}, [desert,dispatch]); 

      function formHandler(e){
          e.preventDefault();
          const editeddesert={
              _id:match.params.desertid,
              name,
              image,
              description,
              category,
              price,
          };
  
          dispatch(editDesert(editeddesert))
     
              
              
      }
    return (
        <div>
            <h1>Editare Desert</h1>
            <h1>desert id={match.params.desertid}</h1>
            <div className='text-left'>
                
                {loading && (<Loading />)}
                {error && (<Error error='Somethingwent wrong' />)}
                {editsuccess&&(<Success success='desert details edited successfully'/>)}
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