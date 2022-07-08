export const getAllGrillsReducer=(state={grills:[]},action)=>{
    switch(action.type)
    {
        case 'GET_GRILLS_REQUEST':return{
            loading:true, 
            ...state
        }
        case 'GET_GRILLS_SUCCESS':return{
            loading:false,
            grills:action.payload
        }
        case 'GET_GRILLS_FAILED':return{
            error:action.payload,
            loading:false
        }
        default:return state
    }
}

export const addGrillReducer=(state={},action)=>{
    switch(action.type)
    {
        case 'ADD_GRILL_REQUEST':return{
            loading:true,
            ...state
        }
        case 'ADD_GRILL_SUCCESS':return{
            loading:false,
            success:true
        }
        case 'ADD_GRILL_FAILED':return{
            error:action.payload,
            loading:false
        }
        default:return state
    }
}

export const getGrillByIdReducer=(state={},action)=>{
    switch(action.type)
    {
        case 'GET_GRILLBYID_REQUEST':return{
            loading:true,
            ...state
        }
        case 'GET_GRILLBYID_SUCCESS':return{
            loading:false,
            grill:action.payload
        }
        case 'GET_GRILLBYID_FAILED':return{
            error:action.payload,
            loading:false
        }
        default:return state
    }
}

export const editGrillReducer=(state={},action)=>{
    switch(action.type)
    {
        case 'EDIT_GRILL_REQUEST':return{
            editloading:true,
            ...state
        }
        case 'EDIT_GRILL_SUCCESS':return{
            editloading:false,
            editsuccess:true
        }
        case 'EDIT_GRILL_FAILED':return{
            editerror:action.payload,
            editloading:false
        }
        default:return state
    }
}