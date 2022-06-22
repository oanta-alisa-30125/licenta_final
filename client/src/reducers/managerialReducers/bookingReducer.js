export const newBookReducer=(state={},action)=>{
    switch(action.type)
    {
        case 'BOOKING_REQUEST':return{
            loading:true
        }
        case 'BOOKING_SUCCESS':return{
            loading:false,
            success:true
        }
        case 'BOOKING_FAILED':return{
            loading:false,
            error:action.payload
        }
        default:return state
    }
}


export const getAllBookingsReducer=(state={bookings:[]},action)=>{
    switch(action.type)
    {
        case 'GET_BOOKINGS_REQUEST':return{
            loading:true,
            ...state
        }
        case 'GET_BOOKINGS_SUCCESS':return{
            loading:false,
            bookings:action.payload
        }
        case 'GET_BOOKINGS_FAILED':return{
            error:action.payload,
            loading:false
        }
        default:return state
    }
}