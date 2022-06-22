export const newContactReducer=(state={},action)=>{
    switch(action.type)
    {
        case 'CONTACT_REQUEST':return{
            loading:true
        }
        case 'CONTACT_SUCCESS':return{
            loading:false,
            success:true
        }
        case 'CONTACT_FAILED':return{
            loading:false,
            error:action.payload
        }
        default:return state
    }
}
export const getAllMessagesReducer=(state={contacts:[]},action)=>{
    switch(action.type)
    {
        case 'GET_CONTACT_REQUEST':return{
            loading:true,
            ...state
        }
        case 'GET_CONTACT_SUCCESS':return{
            loading:false,
            contacts:action.payload
        }
        case 'GET_CONTACT_FAILED':return{
            error:action.payload,
            loading:false
        }
        default:return state
    }
}