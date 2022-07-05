import logo from './logo.svg';

import './App.css';

import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";



import {BrowserRouter, Route, Routes, Link, Switch} from 'react-router-dom'//trebuiesc importate 
import Navbar from './components/layoutComponents/Navbar';
import Menuscreen from './screens/navigationScreens/Menuscreen';
import Cartscreen from './screens/navigationScreens/Cartscreen';
import Registerscreen from './screens/navigationScreens/Registerscreen';
import Loginscreen from './screens/navigationScreens/Loginscreen';
import Ordersscreen from './screens/navigationScreens/Ordersscreen';
import Adminscreen from './screens/navigationScreens/Adminscreen';
import OpenScreen from './screens/navigationScreens/OpenScreen';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';


function App() {

  const userstate = useSelector(state => state.loginUserReducer)
  const { currentUser } = userstate
  return (
    <div className="App">
      <Navbar/>
  
    <BrowserRouter>
      <Route path='/' exact component={OpenScreen}/>
      <Route path="/menu" exact component={Menuscreen}/>
      <Route path="/cart" exact component={Cartscreen}/>
      <Route path="/register" exact component={Registerscreen}/>
      <Route path="/login" exact component={Loginscreen}/>
      <Route path="/orders" exact component={Ordersscreen}/>
      <Route path="/admin" >
       {currentUser && currentUser.isAdmin ? <Adminscreen/> : <OpenScreen/>}
      </Route>
     </BrowserRouter>
    
    </div>
  );
}
//dupa navbar pt ca navbar trebuie sa fie prezent in toate paginile
//browser outer ne ajuta sa naviam de pe o pagina pe alta
export default App;
