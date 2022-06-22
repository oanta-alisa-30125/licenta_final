export const getAllTablesReducer=(state={tables:[]},action)=>{
    switch(action.type)
    {
        case 'GET_TABLES_REQUEST':return{
            loading:true, //request e trimis
            ...state
        }
        case 'GET_TABLES_SUCCESS':return{
            loading:false,
            tables:action.payload
        }
        case 'GET_TABLES_FAILED':return{
            error:action.payload,
            loading:false
        }
        default:return state
    }
}


export const editTableReducer=(state={},action)=>{
    switch(action.type)
    {
        case 'EDIT_TABLE_REQUEST':return{
            editloading:true,
            ...state
        }
        case 'EDIT_TABLE_SUCCESS':return{
            editloading:false,
            editsuccess:true
        }
        case 'EDIT_TABLE_FAILED':return{
            editerror:action.payload,
            editloading:false
        }
        default:return state
    }
}