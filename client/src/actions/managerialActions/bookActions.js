import axios from 'axios'
export const newBook=(book)=>async dispatch=>{

    dispatch({type:'BOOKING_REQUEST'})
    try{
        const response=await axios.post('/api/books/newbooking',book) //asa trimitem datele catre backend
        alert("Rezervarea a fost realizată cu succes!")
        dispatch({type:'BOOKING_SUCCESS'})
    }catch (error){
        dispatch({type:'BOOKING_FAILED',payload:error})
    }
}

export const getAllBookings=()=>async dispatch=>{
    dispatch({type:'GET_BOOKINGS_REQUEST'})

    try{
        const response=await axios.get('/api/books/getallbookings')
        console.log(response);
        dispatch({type:'GET_BOOKINGS_SUCCESS', payload:response.data})
    } catch(error){
        dispatch({type:'GET_BOOKINGS_FAILED', payload:error})
    }
    
}

export const deleteBook=(bookid)=>async dispatch=>{
    try{
        await axios.post('/api/books/deletebooking',{bookid})
        alert('Rezervare ștearsă cu succes')
        window.location.reload()
    }catch(error){
        alert('something went wrong')
        console.log(error)
    }
}