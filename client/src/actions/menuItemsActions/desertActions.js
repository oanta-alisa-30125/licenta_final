import axios from "axios";

export const getAllDeserts=()=>async dispatch=>{//dispatch=redux thunk function
    dispatch({type:'GET_DESERTS_REQUEST'})

    try{
        const response=await axios.get('/api/deserts/getalldeserts')
        console.log(response);
        dispatch({type:'GET_DESERTS_SUCCESS', payload:response.data})
    } catch(error){
        dispatch({type:'GET_DESERTS_FAILED', payload:error})
    }
    
}

export const filterDeserts=(searchkey,category)=>async dispatch=>{//dispatch=redux thunk function
    
    var filteredDeserts;
    dispatch({type:'GET_DESERTS_REQUEST'})

    try{
        const response=await axios.get('/api/deserts/getalldeserts')
        filteredDeserts=response.data.filter(desert=>desert.name.toLowerCase().includes(searchkey))
        filteredDeserts=response.data.filter(desert=>desert.description.toLowerCase().includes(searchkey))
        if(category!='all')
        {
          filteredDeserts=response.data.filter(desert=>desert.category.toLowerCase()==category)
        }
        dispatch({type:'GET_DESERTS_SUCCESS', payload:filteredDeserts})
    } catch(error){
        dispatch({type:'GET_DESERTS_FAILED', payload:error})
    }
    
}

export const addDesert=(desert)=>async dispatch=>{
    dispatch({type:'ADD_DESERT_REQUEST'})
    try{
        const response=await axios.post('/api/deserts/adddesert',{desert})
        console.log(response);
        dispatch({type:'ADD_DESERT_SUCCESS'})
    }catch(error){
        dispatch({type:'ADD_DESERT_FAILED',payload:error})

    }
}

export const editDesert=(editeddesert)=>async dispatch=>{
    dispatch({type:'EDIT_DESERT_REQUEST'})
    try{
        const response=await axios.post('/api/deserts/editdesert',{editeddesert})
        console.log(response);
        dispatch({type:'EDIT_DESERT_SUCCESS'})
      //  window.location.href='/admin/pizzaslist'
   
    }catch(error){
        dispatch({type:'EDIT_DESERT_FAILED',payload:error})

    }
}

export const getDesertById=(desertid)=>async dispatch=>{
    dispatch({type:'GET_DESERTBYID_REQUEST'})

    try{
        const response=await axios.post('/api/deserts/getdesertbyid',{desertid})
        console.log(response);
        dispatch({type:'GET_DESERTBYID_SUCCESS', payload:response.data})
    } catch(error){
        dispatch({type:'GET_DESERTBYID_FAILED', payload:error})
    }
    
}

export const deleteDesert=(desertid)=>async dispatch=>{
    try{
      const response= await axios.post('/api/deserts/deletedesert', {desertid})
        alert('desert deleted successfully')
      console.log(response);
        window.location.reload()
    }catch(error){
        alert('Something went wrong')
        console.log(error);

    }
}