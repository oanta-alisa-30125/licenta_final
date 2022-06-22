export const getAllDishesReducer=(state={dishes:[]},action)=>{
    switch(action.type)
    {
        case 'GET_DISHES_REQUEST':return{
            loading:true, //request e trimis
            ...state
        }
        case 'GET_DISHES_SUCCESS':return{
            loading:false,
            dishes:action.payload
        }
        case 'GET_DISHES_FAILED':return{
            error:action.payload,
            loading:false
        }
        default:return state
    }
}

export const addDishReducer=(state={},action)=>{
    switch(action.type)
    {
        case 'ADD_DISH_REQUEST':return{
            loading:true,
            ...state
        }
        case 'ADD_DISH_SUCCESS':return{
            loading:false,
            success:true
        }
        case 'ADD_DISH_FAILED':return{
            error:action.payload,
            loading:false
        }
        default:return state
    }
}

export const getDishByIdReducer=(state={},action)=>{
    switch(action.type)
    {
        case 'GET_DISHBYID_REQUEST':return{
            loading:true,
            ...state
        }
        case 'GET_DISHBYID_SUCCESS':return{
            loading:false,
            dish:action.payload
        }
        case 'GET_DISHBYID_FAILED':return{
            error:action.payload,
            loading:false
        }
        default:return state
    }
}

export const editDishReducer=(state={},action)=>{
    switch(action.type)
    {
        case 'EDIT_DISH_REQUEST':return{
            editloading:true,
            ...state
        }
        case 'EDIT_DISH_SUCCESS':return{
            editloading:false,
            editsuccess:true
        }
        case 'EDIT_DISH_FAILED':return{
            editerror:action.payload,
            editloading:false
        }
        default:return state
    }
}