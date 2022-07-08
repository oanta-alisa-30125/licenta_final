import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../../components/layoutComponents/Loading'
import Error from '../../../components/layoutComponents/Error'
import {getAllUsers,deleteUser,makeAdmin} from '../../../actions/managerialActions/userActions'

export default function Userlist(){
    const dispatch=useDispatch()
    
    const usersstate=useSelector(state=>state.getAllUsersReducer)
    const{error,loading,users}=usersstate

    useEffect(()=>{
        dispatch(getAllUsers())
    },[])

    return(
        <div>
            <h2>Listă utilizatori</h2>
            {loading&&(<Loading/>)}
            {error&&(<Error error='Something went wrong'/>)}
    <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Id utilizator</th>
                    <th scope="col">Nume</th>
                    <th scope="col">Email</th>
                    <th scope="col">Șterge</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {users&&users.map(user=>
                {
                    return <tr>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td><i className='fa fa-trash' onClick={()=>{dispatch(deleteUser(user._id))}}></i></td>
                        <td>{user.isAdmin ? <h1>Admin</h1>:<button className='btn' onClick={()=>{dispatch(makeAdmin(user._id))}}>Make Admin</button>}</td>
                    </tr>
                })}
            </tbody>
        </table>
  
        
        </div>
    )
}