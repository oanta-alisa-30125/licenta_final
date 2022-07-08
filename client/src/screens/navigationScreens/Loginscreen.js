import React, { useState, useEffect , useRef } from 'react'

import {useDispatch,useSelector} from 'react-redux'
import { loginUser } from '../../actions/managerialActions/userActions'
import Loading from  '../../components/layoutComponents/Loading'
import Error from '../../components/layoutComponents/Error'
export default function Loginscreen(){
   
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);
    const dispatch=useDispatch()
   
    const loginstate=useSelector(state=>state.loginUserReducer)
    const {loading,error}=loginstate 
      
        const Password = () => {
          setPasswordShown(!passwordShown);
        };
   useEffect(()=>{
        if(localStorage.getItem('currentUser'))
        {
            window.location.href='/'
        }
    },[])
    function login(){
       const user={email,password}
       dispatch(loginUser(user))
    }

    return(
        <div>
             <div className="row justify-content-center mt-5">
                <div className="col-md-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
                {loading && (<Loading/>)}
                    {error && (<Error error='Credențiale invalide'/>)}
                    <h2 className='text-center' style={{ fontsize: '35px' }}>Login</h2>
                  
                    <div>
                        <input required type="text" placeholder="email" className="form-control" value={email} onChange={(e)=>{setemail(e.target.value)}} />
                        <input required type={passwordShown ? "text" : "password"} placeholder="password" className="form-control" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>  
                        <button onMouseEnter={Password} onMouseLeave={Password}><i class="fa fa-eye" aria-hidden="true"></i></button> 
                        <br/>
                        
                        <button onClick={login} className='btn mt-2 mb-2'>Login</button>
                       <br/>
                        <a style={{color:'black'}} href="/register" className='mt-2'>Înregistrare</a>
                    </div>
                </div>
            </div>
        </div>
    )
}