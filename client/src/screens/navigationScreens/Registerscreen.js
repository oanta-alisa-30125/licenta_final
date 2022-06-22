import React, { useState, useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { registerUser } from '../../actions/managerialActions/userActions';
import Success from '../../components/layoutComponents/Success';
import Loading from  '../../components/layoutComponents/Loading';
import Error from '../../components/layoutComponents/Error';


export default function Registerscreen() {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [cpassword, setcpassword] = useState("");
    const registerstate=useSelector(state=>state.registerUserReducer)
    const {error,loading,success}=registerstate//luate din userreducer
    const dispatch=useDispatch()
    
    

        function contineCaractereSpecialeName(str) {
            const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            return specialChars.test(str);
          }

          function contineCaractereSpecialeEmail(str) {
            const specialChars = /[ `!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;
            return specialChars.test(str);
          }
    
          function contineLitere(str) {
            return /[a-zA-Z]/.test(str);
          }
        function register(){
            if(password!==cpassword) //daca parolele sunt matchy la fel
            {
                alert("Parolele nu se potrivesc")
            } 
            else if(contineCaractereSpecialeName(name) || contineCaractereSpecialeEmail(email)){
                alert("Introduceți date valide")
               
            }
            else if(!contineLitere(name) || !contineLitere(email)){
                alert("Toate campurile trebuie completate")
                
            }
            else{
                const user={
                    name,
                    email,
                    password
                }
                console.log(user);
                dispatch(registerUser(user))
            }
        }

    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded">
                {loading && (<Loading/>)}
                    {success && (<Success success='User înregistrat cu succes'/>)}
                    {error && (<Error error='Emailul a fost folosit pentru alt cont'/>)}
                    <h2 className='text-center' style={{ fontsize: '35px' }}>Înregistrare</h2>

                    <div>
                        <input required type="text" placeholder="name" className="form-control" value={name} onChange={(e) => { setname(e.target.value) }} />
                        <input required type="text" placeholder="email" className="form-control" value={email} onChange={(e) => { setemail(e.target.value) }} />
                        <input required type="text" placeholder="password" className="form-control" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                        <input required type="text" placeholder="confirm password" className="form-control" value={cpassword} onChange={(e) => { setcpassword(e.target.value) }} />

                        <button onClick={register} className='btn  mt-2 mb-2'>Gata!</button>
                        <br/>
                        <a style={{color:'black'}} href="/login" className='mt-2'>Logare</a>


                    </div>
                </div>
            </div>
        </div>
    )
}