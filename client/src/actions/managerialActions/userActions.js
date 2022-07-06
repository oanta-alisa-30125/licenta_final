import axios from 'axios'
export const registerUser=(user)=>async dispatch=>{

    dispatch({type:'USER_REGISTER_REQUEST'})
    try{
        const response=await axios.post('/api/users/register',user) //asa trimitem datele catre backend
        console.log(response);
        dispatch({type:'USER_REGISTER_SUCCESS'})
    }catch (error){
        dispatch({type:'USER_REGISTER_FAILED',payload:error})
    }
}

export const loginUser=(user)=>async dispatch=>{

    dispatch({type:'USER_LOGIN_REQUEST'})

    try{
        const response=await axios.post('/api/users/login',user)
        console.log(response);
        dispatch({type:'USER_LOGIN_SUCCESS',payload:response.data})
        localStorage.setItem('currentUser',JSON.stringify(response.data))
        //navigate to the home page after get successfully logged in:
        window.location.href='/'
    }catch (error){
        dispatch({type:'USER_LOGIN_FAILED',payload:error})
    }
}

export const logoutUser=()=>dispatch=>{
    localStorage.removeItem('currentUser')
    window.location.href='/login'
}

export const getAllUsers=()=>async dispatch=>{
    dispatch({type:'GET_USERS_REQUEST'})

    try{
        const response=await axios.get('/api/users/getallusers')
        console.log(response);
        dispatch({type:'GET_USERS_SUCCESS', payload:response.data})
    } catch(error){
        dispatch({type:'GET_USERS_FAILED', payload:error})
    }
    
}

export const deleteUser=(userid)=>async dispatch=>{
    try{
        await axios.post('/api/users/deleteuser',{userid})
        alert('user deleted successfully')
        window.location.reload()
    }catch(error){
        alert('something went wrong')
        console.log(error)
    }
}

export const makeAdmin=(userid)=>async dispatch=>{
    try{
        const response=await axios.post('/api/users/makeadmin',{userid})
    console.log(response);
    alert('Status utilizator schimbat cu succes')
    const user=await axios.get('/api/users/getallusers')
    dispatch({type:'GET_USERS_SUCCESS', payload:user.data})
    }catch(error){
        console.log(error)
    }
}