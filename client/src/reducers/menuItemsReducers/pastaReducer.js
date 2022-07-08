export const getAllPastasReducer=(state={pastas:[]},action)=>{
    switch(action.type)
    {
        case 'GET_PASTAS_REQUEST':return{
            loading:true,
            ...state
        }
        case 'GET_PASTAS_SUCCESS':return{
            loading:false,
            pastas:action.payload
        }
        case 'GET_PASTAS_FAILED':return{
            error:action.payload,
            loading:false
        }
        default:return state
    }
}

export const addPastaReducer=(state={},action)=>{
    switch(action.type)
    {
        case 'ADD_PASTA_REQUEST':return{
            loading:true,
            ...state
        }
        case 'ADD_PASTA_SUCCESS':return{
            loading:false,
            success:true
        }
        case 'ADD_PASTA_FAILED':return{
            error:action.payload,
            loading:false
        }
        default:return state
    }
}

export const getPastaByIdReducer=(state={},action)=>{
    switch(action.type)
    {
        case 'GET_PASTABYID_REQUEST':return{
            loading:true,
            ...state
        }
        case 'GET_PASTABYID_SUCCESS':return{
            loading:false,
            pasta:action.payload
        }
        case 'GET_PASTABYID_FAILED':return{
            error:action.payload,
            loading:false
        }
        default:return state
    }
}

export const editPastaReducer=(state={},action)=>{
    switch(action.type)
    {
        case 'EDIT_PASTA_REQUEST':return{
            editloading:true,
            ...state
        }
        case 'EDIT_PASTA_SUCCESS':return{
            editloading:false,
            editsuccess:true
        }
        case 'EDIT_PASTA_FAILED':return{
            editerror:action.payload,
            editloading:false
        }
        default:return state
    }
}