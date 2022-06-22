import axios from 'axios'

export const getAllTables=()=>async dispatch=>{
    dispatch({type:'GET_TABLES_REQUEST'})
    try{
        const response=await axios.get('/api/tables/getalltables')
        dispatch({type:'GET_TABLES_SUCCESS', payload:response.data})
    } catch(error){
        dispatch({type:'GET_TABLES_FAILED', payload:error})
    }
    
}

export const editTable=(editedtable)=>async dispatch=>{
    dispatch({type:'EDIT_TABLE_REQUEST'})
    try{
        console.log(editedtable);
        const response=await axios.post('/api/tables/edittable',{editedtable})
        
        dispatch({type:'EDIT_TABLE_SUCCESS'})
   
    }catch(error){
        dispatch({type:'EDIT_TABLE_FAILED',payload:error})

    }
}