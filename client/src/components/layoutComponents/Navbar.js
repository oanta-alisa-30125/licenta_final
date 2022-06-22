import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../actions/managerialActions/userActions';
export default function Navbar() {
    const cartstate = useSelector(state => state.cartReducer)
    const userstate = useSelector(state => state.loginUserReducer)
    const { currentUser } = userstate
    const dispatch = useDispatch()

    return (
            <nav class="navbar fixed-navbar navbar-expand-lg" style={{position: 'sticky', top: '0'}} > 
                <a style={{color:'white'}} className="navbar-brand" href="/">Food Land</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa-solid fa-bars"><span className="navbar-toggler-icon"></span></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ml-auto">

                        {currentUser ? ( 
                           <div className="dropdown mt-2">
                             
                           <a style={{color:'grey'}} className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           <i class="fa fa-user-circle" aria-hidden="true"></i> {currentUser.name}
                           </a>
                           <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                             <a className="dropdown-item" href="/orders">Comenzi</a>
                             {currentUser.isAdmin && (<a className="dropdown-item" href="/admin">Admin</a> )} 
                             <a className="dropdown-item" href="#" onClick={()=>{dispatch(logoutUser())}}><li>Logout</li></a>
                             

                           </div>
                         </div>
                           ) : 
                           
                           
                           <li className="nav-bar-item">
                             <a style={{color:'grey'}} className="nav-link" href="/login"><i class="fa fa-user-circle" aria-hidden="true"></i> Login </a>
                           </li>}
                          
                           

                        <li className="nav-item">
                            <a style={{color:'grey'}} className="nav-link" href="/cart"><i class="fa fa-shopping-basket" aria-hidden="true"></i> Cos :  {cartstate.cartItems.length} produse</a>
                        </li>
                    </ul>

                </div>
            </nav>
    )
}