import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import Userslist from '../listers/managerialListers/Userslist'
import Orderslist from '../listers/managerialListers/Orderslist'
import Pizzaslist from '../listers/menuItemsListers/Pizzaslist'
import Burgerslist from '../listers/menuItemsListers/Burgerslist'
import Pastaslist from '../listers/menuItemsListers/Pastaslist'
import Addpizza from '../adders/Addpizza'
import Addburger from '../adders/Addburger'
import Addpasta from '../adders/Addpasta'
import Addsalad from '../adders/Addsalad'
import Addgrill from '../adders/Addgrill'
import Adddish from '../adders/Adddish'
import Adddesert from '../adders/Adddesert'
import Adddrink from '../adders/Adddrink'
import Editpizza from '../editers/Editpizza'
import Editburger from '../editers/Editburger'
import Editsalad from '../editers/Editsalad'
import Editgrill from '../editers/Editgrill'
import Editdish from '../editers/Editdish'
import Editpasta from '../editers/Editpasta'
import Editdrink from '../editers/Editdrink'
import Editdesert from '../editers/Editdesert'
import Grillslist from '../listers/menuItemsListers/Grillslist'
import Disheslist from '../listers/menuItemsListers/Disheslist'
import Desertslist from '../listers/menuItemsListers/Desertslist'
import Drinkslist from '../listers/menuItemsListers/Drinkslist'
import Saladslist from '../listers/menuItemsListers/Saladslist'
import Contactslist from '../listers/managerialListers/Contactslist'
import Bookslist from '../listers/managerialListers/Bookslist'
export default function Adminscreen() {
    const userstate = useSelector(state => state.loginUserReducer)
    const { currentUser } = userstate
    const dispatch = useDispatch()

    return (
        <div  >
            <div className='row-justify-content-center' style={{ alignItems: "center", justifyContent: "center", display: "flex"}} >
                <div className='col-md-10 mt-3'>
                    <h2 style={{ fontSize: '35px'}}>Admin Panel</h2>
              <ul className='adminfunctions'>
                  <li><a href="/admin/userslist" style={{fontSize:'15px'}}>Lista utilizatori</a></li>

                  <div className="dropdown" style={{display:'inline'}}>
                  <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{fontSize:'15px'}}>
                      Lista produse
                      </a>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a className="dropdown-item" href="/admin/pizzaslist">Lista Pizza</a>
                  <a className="dropdown-item" href="/admin/burgerslist">Lista Burger</a>
                  <a className="dropdown-item" href="/admin/pastaslist">Lista Paste</a>
                  <a className="dropdown-item" href="/admin/saladslist">Lista Salate</a>
                  <a className="dropdown-item" href="/admin/disheslist">Lista Garnituri</a>
                  <a className="dropdown-item" href="/admin/grillslist">Lista Gratare</a>
                  <a className="dropdown-item" href="/admin/desertslist">Lista Deserturi</a>
                  <a className="dropdown-item" href="/admin/drinkslist">Lista Bauturi</a>
                 
                  </div>
                  </div>

                  <div className="dropdown ml-3" style={{display:'inline'}}>
                   <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{fontSize:'15px'}}>
                        Adaugă produse
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="/admin/addpizza">Adaugă Pizza</a>
                        <a className="dropdown-item" href="/admin/addburger">Adaugă Burger</a>
                        <a className="dropdown-item" href="/admin/addpasta">Adaugă Paste</a>
                        <a className="dropdown-item" href="/admin/addsalad">Adaugă Salate</a>
                        <a className="dropdown-item" href="/admin/addgrill">Adaugă Grill</a>
                        <a className="dropdown-item" href="/admin/adddish">Adaugă Garnituri</a>
                        <a className="dropdown-item" href="/admin/adddesert">Adaugă Deserturi</a>
                        <a className="dropdown-item" href="/admin/adddrink">Adaugă Bauturi</a>
                    </div>
                </div>
                  
                  <li><a href="/admin/orderslist" style={{fontSize:'15px'}}>Lista comenzi</a></li>

                  <li><a href="/admin/contactslist" style={{fontSize:'15px'}}>Lista mesaje</a></li>
                 
                  <li><a href="/admin/bookslist" style={{fontSize:'15px'}}>Rezervări</a></li>

             
              </ul>

              <BrowserRouter>
             

                  <Route path='/admin/userslist' component={Userslist} exact/>
                  <Route path='/admin/orderslist' component={Orderslist} exact/>
                  <Route path='/admin/contactslist' component={Contactslist} exact/>
                  <Route path='/admin/bookslist'   component={Bookslist} exact/>

                  <Route path='/admin/pizzaslist' component={Pizzaslist} exact/>
                  <Route path='/admin/burgerslist' component={Burgerslist} exact/>
                  <Route path='/admin/pastaslist' component={Pastaslist} exact/>
                  <Route path='/admin/grillslist' component={Grillslist} exact/>
                  <Route path='/admin/saladslist' component={Saladslist} exact/>
                  <Route path='/admin/disheslist' component={Disheslist} exact/>
                  <Route path='/admin/drinkslist' component={Drinkslist} exact/>
                  <Route path='/admin/desertslist' component={Desertslist} exact/>

                  <Route path='/admin/addpizza' component={Addpizza} exact/>
                  <Route path='/admin/addburger' component={Addburger} exact/>
                  <Route path='/admin/addpasta' component={Addpasta} exact/>
                  <Route path='/admin/addgrill' component={Addgrill} exact/>
                  <Route path='/admin/addsalad' component={Addsalad} exact/>
                  <Route path='/admin/adddish' component={Adddish} exact/>
                  <Route path='/admin/adddrink' component={Adddrink} exact/>
                  <Route path='/admin/adddesert' component={Adddesert} exact/>

                  <Route path='/admin/editpizza/:pizzaid' component={Editpizza} exact/>
                  <Route path='/admin/editburger/:burgerid' component={Editburger} exact/>
                  <Route path='/admin/editsalad/:saladid' component={Editsalad} exact/>
                  <Route path='/admin/editdesert/:desertid' component={Editdesert} exact/>
                  <Route path='/admin/editgrill/:grillid' component={Editgrill} exact/>
                  <Route path='/admin/editdrink/:drinkid' component={Editdrink} exact/>
                  <Route path='/admin/editdish/:dishid' component={Editdish} exact/>
                  <Route path='/admin/editpasta/:pastaid' component={Editpasta} exact/>

              </BrowserRouter>
                   
                </div>
            </div>



        </div>
    )
}