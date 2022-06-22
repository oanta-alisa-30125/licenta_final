import axios from "axios";

export const getAllDrinks=()=>async dispatch=>{//dispatch=redux thunk function
    dispatch({type:'GET_DRINKS_REQUEST'})

    try{
        const response=await axios.get('/api/drinks/getalldrinks')
        console.log(response);
        dispatch({type:'GET_DRINKS_SUCCESS', payload:response.data})
    } catch(error){
        dispatch({type:'GET_DRINKS_FAILED', payload:error})
    }
    
}

export const filterDrinks=(searchkey, category)=>async dispatch=>{//dispatch=redux thunk function
    
    var filteredDrinks;
    dispatch({type:'GET_DRINKS_REQUEST'})

    try{
        const response=await axios.get('/api/drinks/getalldrinks')
        filteredDrinks=response.data.filter(drink=>drink.name.toLowerCase().includes(searchkey))
        filteredDrinks=response.data.filter(drink=>drink.description.toLowerCase().includes(searchkey))
        if(category!='all')
        {
          filteredDrinks=response.data.filter(drink=>drink.category.toLowerCase()==category)
        }
        dispatch({type:'GET_DRINKS_SUCCESS', payload:filteredDrinks})
    } catch(error){
        dispatch({type:'GET_DRINKS_FAILED', payload:error})
    }
}

export const addDrink=(drink)=>async dispatch=>{
    dispatch({type:'ADD_DRINK_REQUEST'})
    try{
        const response=await axios.post('/api/drinks/adddrink',{drink})
        console.log(response);
        dispatch({type:'ADD_DRINK_SUCCESS'})
    }catch(error){
        dispatch({type:'ADD_DRINK_FAILED',payload:error})

    }
}

export const editDrink=(editeddrink)=>async dispatch=>{
    dispatch({type:'EDIT_DRINK_REQUEST'})
    try{
        const response=await axios.post('/api/drinks/editdrink',{editeddrink})
        console.log(response);
        dispatch({type:'EDIT_DRINK_SUCCESS'})
      //  window.location.href='/admin/pizzaslist'
   
    }catch(error){
        dispatch({type:'EDIT_DRINK_FAILED',payload:error})

    }
}

export const getDrinkById=(drinkid)=>async dispatch=>{
    dispatch({type:'GET_DRINKBYID_REQUEST'})

    try{
        const response=await axios.post('/api/drinks/getdrinkbyid',{drinkid})
        console.log(response);
        dispatch({type:'GET_DRINKBYID_SUCCESS', payload:response.data})
    } catch(error){
        dispatch({type:'GET_DRINKBYID_FAILED', payload:error})
    }
    
}

export const deleteDrink=(drinkid)=>async dispatch=>{
    try{
      const response= await axios.post('/api/drinks/deletedrink', {drinkid})
        alert('drink deleted successfully')
      console.log(response);
        window.location.reload()
    }catch(error){
        alert('Something went wrong')
        console.log(error);

    }
}