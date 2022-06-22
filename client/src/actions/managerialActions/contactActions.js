import axios from 'axios'
export const newContact=(contact)=>async dispatch=>{

    dispatch({type:'CONTACT_REQUEST'})
    try{
        const response=await axios.post('/api/contacts/messages',contact) //asa trimitem datele catre backend
        console.log(response);
        dispatch({type:'CONTACT_SUCCESS'})
    }catch (error){
        dispatch({type:'CONTACT_FAILED',payload:error})
    }
}


export const getAllMessages=()=>async dispatch=>{
    dispatch({type:'GET_CONTACT_REQUEST'})

    try{
        const response=await axios.get('/api/contacts/getallmessages')
        console.log(response);
        dispatch({type:'GET_CONTACT_SUCCESS', payload:response.data})
    } catch(error){
        dispatch({type:'GET_CONTACT_FAILED', payload:error})
    }
    
}

export const deleteContact=(contactid)=>async dispatch=>{
    try{
        await axios.post('/api/contacts/deletecontact',{contactid})
        alert('Mesaj sters cu succes')
        window.location.reload()
    }catch(error){
        alert('something went wrong')
        console.log(error)
    }
}