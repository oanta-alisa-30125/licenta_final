export const getAllSaladsReducer=(state={salads:[]},action)=>{
    switch(action.type)
    {
        case 'GET_SALADS_REQUEST':return{
            loading:true, //request e trimis
            ...state
        }
        case 'GET_SALADS_SUCCESS':return{
            loading:false,
            salads:action.payload
        }
        case 'GET_SALADS_FAILED':return{
            error:action.payload,
            loading:false
        }
        default:return state
    }
}

export const addSaladReducer=(state={},action)=>{
    switch(action.type)
    {
        case 'ADD_SALAD_REQUEST':return{
            loading:true,
            ...state
        }
        case 'ADD_SALAD_SUCCESS':return{
            loading:false,
            success:true
        }
        case 'ADD_SALAD_FAILED':return{
            error:action.payload,
            loading:false
        }
        default:return state
    }
}

export const getSaladByIdReducer=(state={},action)=>{
    switch(action.type)
    {
        case 'GET_SALADBYID_REQUEST':return{
            loading:true,
            ...state
        }
        case 'GET_SALADBYID_SUCCESS':return{
            loading:false,
            salad:action.payload
        }
        case 'GET_SALADBYID_FAILED':return{
            error:action.payload,
            loading:false
        }
        default:return state
    }
}

export const editSaladReducer=(state={},action)=>{
    switch(action.type)
    {
        case 'EDIT_SALAD_REQUEST':return{
            editloading:true,
            ...state
        }
        case 'EDIT_SALAD_SUCCESS':return{
            editloading:false,
            editsuccess:true
        }
        case 'EDIT_SALAD_FAILED':return{
            editerror:action.payload,
            editloading:false
        }
        default:return state
    }
}