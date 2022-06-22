export const getAllDesertsReducer=(state={deserts:[]},action)=>{
    switch(action.type)
    {
        case 'GET_DESERTS_REQUEST':return{
            loading:true, //request e trimis
            ...state
        }
        case 'GET_DESERTS_SUCCESS':return{
            loading:false,
            deserts:action.payload
        }
        case 'GET_DESERTS_FAILED':return{
            error:action.payload,
            loading:false
        }
        default:return state
    }
}

export const addDesertReducer=(state={},action)=>{
    switch(action.type)
    {
        case 'ADD_DESERT_REQUEST':return{
            loading:true,
            ...state
        }
        case 'ADD_DESERT_SUCCESS':return{
            loading:false,
            success:true
        }
        case 'ADD_DESERT_FAILED':return{
            error:action.payload,
            loading:false
        }
        default:return state
    }
}

export const getDesertByIdReducer=(state={},action)=>{
    switch(action.type)
    {
        case 'GET_DESERTBYID_REQUEST':return{
            loading:true,
            ...state
        }
        case 'GET_DESERTBYID_SUCCESS':return{
            loading:false,
            desert:action.payload
        }
        case 'GET_DESERTBYID_FAILED':return{
            error:action.payload,
            loading:false
        }
        default:return state
    }
}

export const editDesertReducer=(state={},action)=>{
    switch(action.type)
    {
        case 'EDIT_DESERT_REQUEST':return{
            editloading:true,
            ...state
        }
        case 'EDIT_DESERT_SUCCESS':return{
            editloading:false,
            editsuccess:true
        }
        case 'EDIT_DESERT_FAILED':return{
            editerror:action.payload,
            editloading:false
        }
        default:return state
    }
}