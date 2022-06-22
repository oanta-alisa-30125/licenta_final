import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {editPasta,getPastaById } from '../../actions/menuItemsActions/pastaActions'
import Loading from '../../components/layoutComponents/Loading'
import Error from '../../components/layoutComponents/Error'
import Success from '../../components/layoutComponents/Success'
export default function Editpasta({ match }) {

    const dispatch = useDispatch()
    const [name, setname] = useState('')
    const [price, setprice] = useState('')
    const [image, setimage] = useState('')
    const [description, setdescription] = useState('')
    const [category, setcategory] = useState('')

    const getpastabyidstate = useSelector(state => state.getPastaByIdReducer)
    const { pasta, error, loading } = getpastabyidstate
    const editedpastastate=useSelector((state)=>state.editPastaReducer)
    const{editloading,editerror,editsuccess}=editedpastastate


    useEffect(() => {

        if(pasta)
        {
            if(pasta._id==match.params.pastaid)
            {
            setname(pasta.name)
            setdescription(pasta.description)
            setcategory(pasta.category)
            setprice(pasta.price)
            setimage(pasta.image)
        }
            else{
                dispatch(getPastaById(match.params.pastaid));
            }
    
        }
        else{
        dispatch(getPastaById(match.params.pastaid))


    }}, [pasta,dispatch]); 

      function formHandler(e){
          e.preventDefault();
          const editedpasta={
              _id:match.params.pastaid,
              name,
              image,
              description,
              category,
              price,
          };
  
          dispatch(editPasta(editedpasta))
     
              
              
      }
    return (
        <div>
            <h1>Editare Paste</h1>
            <h1>paste id={match.params.pastaid}</h1>
            <div className='text-left'>
                
                {loading && (<Loading />)}
                {error && (<Error error='Somethingwent wrong' />)}
                {editsuccess&&(<Success success='pasta details edited successfully'/>)}
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