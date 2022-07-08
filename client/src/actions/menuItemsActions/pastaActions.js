import axios from "axios";

export const getAllPastas=()=>async dispatch=>{
    dispatch({type:'GET_PASTAS_REQUEST'})

    try{
        const response=await axios.get('/api/pastas/getallpastas')
        console.log(response);
        dispatch({type:'GET_PASTAS_SUCCESS', payload:response.data})
    } catch(error){
        dispatch({type:'GET_PASTAS_FAILED', payload:error})
    }
    
}
export const filterPastas=(searchkey,category)=>async dispatch=>{
    
    var filteredPastas;
    dispatch({type:'GET_PASTAS_REQUEST'})

    try{
        const response=await axios.get('/api/pastas/getallpastas')
        filteredPastas=response.data.filter(pasta=>pasta.name.toLowerCase().includes(searchkey))
        filteredPastas=response.data.filter(pasta=>pasta.description.toLowerCase().includes(searchkey))
      if(category!='all')
      {
        filteredPastas=response.data.filter(pasta=>pasta.category.toLowerCase()==category)
      }
      
        dispatch({type:'GET_PASTAS_SUCCESS', payload:filteredPastas})
    } catch(error){
        dispatch({type:'GET_PASTAS_FAILED', payload:error})
    }
    
}

export const addPasta=(pasta)=>async dispatch=>{
    dispatch({type:'ADD_PASTA_REQUEST'})
    try{
        const response=await axios.post('/api/pastas/addpasta',{pasta})
        console.log(response);
        dispatch({type:'ADD_PASTA_SUCCESS'})
    }catch(error){
        dispatch({type:'ADD_PASTA_FAILED',payload:error})

    }
}

export const editPasta=(editedpasta)=>async dispatch=>{
    dispatch({type:'EDIT_PASTA_REQUEST'})
    try{
        const response=await axios.post('/api/pizzas/editpizza',{editedpasta})
        console.log(response);
        dispatch({type:'EDIT_PASTA_SUCCESS'})
       window.location.href='/admin/pastaslist'
   
    }catch(error){
        dispatch({type:'EDIT_PASTA_FAILED',payload:error})

    }
}

export const getPastaById=(pastaid)=>async dispatch=>{
    dispatch({type:'GET_PASTABYID_REQUEST'})

    try{
        const response=await axios.post('/api/pastas/getpastabyid',{pastaid})
        console.log(response);
        dispatch({type:'GET_PASTABYID_SUCCESS', payload:response.data})
    } catch(error){
        dispatch({type:'GET_PASTABYID_FAILED', payload:error})
    }
    
}

export const deletePasta=(pastaid)=>async dispatch=>{
    try{
      const response= await axios.post('/api/pastas/deletepasta', {pastaid})
        alert('pasta deleted successfully')
      console.log(response);
        window.location.reload()
    }catch(error){
        alert('Something went wrong')
        console.log(error);

    }
}