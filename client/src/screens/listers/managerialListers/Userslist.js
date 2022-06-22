import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../../components/layoutComponents/Loading'
import Error from '../../../components/layoutComponents/Error'
import {getAllUsers,deleteUser} from '../../../actions/managerialActions/userActions'

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
        <table className='table table-striped table-bordered'>
            <thead className='thead-dark'>
                <tr>
                    <th>Id utilizator</th>
                    <th>Nume</th>
                    <th>Email</th>
                    <th>Șterge</th>
                </tr>
            </thead>
            <tbody>
                {users&&users.map(user=>{//conditional rendering if users is present then user.map
                    return <tr>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td><i className='fa fa-trash' onClick={()=>{dispatch(deleteUser(user._id))}}></i></td>
                    </tr>
                })}
            </tbody>
        </table>
        
        </div>
    )
}