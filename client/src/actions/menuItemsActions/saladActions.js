import axios from "axios";

export const getAllSalads=()=>async dispatch=>{
    dispatch({type:'GET_SALADS_REQUEST'})

    try{
        const response=await axios.get('/api/salads/getallsalads')
        console.log(response);
        dispatch({type:'GET_SALADS_SUCCESS', payload:response.data})
    } catch(error){
        dispatch({type:'GET_SALADS_FAILED', payload:error})
    }
    
}

export const filterSalads=(searchkey,category)=>async dispatch=>{
    
    var filteredSalads;
    dispatch({type:'GET_SALADS_REQUEST'})

    try{
        const response=await axios.get('/api/salads/getallsalads')
        filteredSalads=response.data.filter(salad=>salad.name.toLowerCase().includes(searchkey))
        filteredSalads=response.data.filter(salad=>salad.description.toLowerCase().includes(searchkey))
      if(category!='all')
      {
        filteredSalads=response.data.filter(salad=>salad.category.toLowerCase()==category)
      }
      
        dispatch({type:'GET_SALADS_SUCCESS', payload:filteredSalads})
    } catch(error){
        dispatch({type:'GET_SALADS_FAILED', payload:error})
    }
}

export const addSalad=(salad)=>async dispatch=>{
    dispatch({type:'ADD_SALAD_REQUEST'})
    try{
        const response=await axios.post('/api/salads/addsalad',{salad})
        console.log(response);
        dispatch({type:'ADD_SALAD_SUCCESS'})
    }catch(error){
        dispatch({type:'ADD_SALAD_FAILED',payload:error})

    }
}

export const editSalad=(editedsalad)=>async dispatch=>{
    dispatch({type:'EDIT_SALAD_REQUEST'})
    try{
        const response=await axios.post('/api/salads/editsalad',{editedsalad})
        console.log(response);
        dispatch({type:'EDIT_SALAD_SUCCESS'})
        window.location.href='/admin/saladslist'
   
    }catch(error){
        dispatch({type:'EDIT_SALAD_FAILED',payload:error})

    }
}

export const getSaladById=(saladid)=>async dispatch=>{
    dispatch({type:'GET_SALADBYID_REQUEST'})

    try{
        const response=await axios.post('/api/salads/getsaladbyid',{saladid})
        console.log(response);
        dispatch({type:'GET_SALADBYID_SUCCESS', payload:response.data})
    } catch(error){
        dispatch({type:'GET_SALADBYID_FAILED', payload:error})
    }
    
}

export const deleteSalad=(saladid)=>async dispatch=>{
    try{
      const response= await axios.post('/api/salads/deletesalad', {saladid})
        alert('salad deleted successfully')
      console.log(response);
        window.location.reload()
    }catch(error){
        alert('Something went wrong')
        console.log(error);

    }
}