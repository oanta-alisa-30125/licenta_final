import axios from "axios";

export const getAllGrills=()=>async dispatch=>{//dispatch=redux thunk function
    dispatch({type:'GET_GRILLS_REQUEST'})

    try{
        const response=await axios.get('/api/grills/getallgrills')
        console.log(response);
        dispatch({type:'GET_GRILLS_SUCCESS', payload:response.data})
    } catch(error){
        dispatch({type:'GET_GRILLS_FAILED', payload:error})
    }
    
}

export const filterGrills=(searchkey,category)=>async dispatch=>{//dispatch=redux thunk function
    
    var filteredGrills;
    dispatch({type:'GET_GRILLS_REQUEST'})

    try{
        const response=await axios.get('/api/grills/getallgrills')
        filteredGrills=response.data.filter(grill=>grill.name.toLowerCase().includes(searchkey))
        filteredGrills=response.data.filter(grill=>grill.description.toLowerCase().includes(searchkey))
      if(category!='all')
      {
        filteredGrills=response.data.filter(grill=>grill.category.toLowerCase()==category)
      }
      
        dispatch({type:'GET_GRILLS_SUCCESS', payload:filteredGrills})
    } catch(error){
        dispatch({type:'GET_GRILLS_FAILED', payload:error})
    }

}

export const addGrill=(grill)=>async dispatch=>{
    dispatch({type:'ADD_GRILL_REQUEST'})
    try{
        const response=await axios.post('/api/grills/addgrill',{grill})
        console.log(response);
        dispatch({type:'ADD_GRILL_SUCCESS'})
    }catch(error){
        dispatch({type:'ADD_GRILL_FAILED',payload:error})

    }
}

export const editGrill=(editedgrill)=>async dispatch=>{
    dispatch({type:'EDIT_GRILL_REQUEST'})
    try{
        const response=await axios.post('/api/grills/editgrill',{editedgrill})
        console.log(response);
        dispatch({type:'EDIT_GRILL_SUCCESS'})
      //  window.location.href='/admin/pizzaslist'
   
    }catch(error){
        dispatch({type:'EDIT_GRILL_FAILED',payload:error})

    }
}

export const getGrillById=(grillid)=>async dispatch=>{
    dispatch({type:'GET_GRILLBYID_REQUEST'})

    try{
        const response=await axios.post('/api/grills/getgrillbyid',{grillid})
        console.log(response);
        dispatch({type:'GET_GRILLBYID_SUCCESS', payload:response.data})
    } catch(error){
        dispatch({type:'GET_GRILLBYID_FAILED', payload:error})
    }
    
}

export const deleteGrill=(grillid)=>async dispatch=>{
    try{
      const response= await axios.post('/api/grills/deletegrill', {grillid})
        alert('grill deleted successfully')
      console.log(response);
        window.location.reload()
    }catch(error){
        alert('Something went wrong')
        console.log(error);

    }
}