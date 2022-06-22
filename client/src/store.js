import { combineReducers } from 'redux' //pt ca o sa avem mai mult decat un reducer

import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'

import { getAllPizzasReducer,addPizzaReducer, getPizzaByIdReducer, editPizzaReducer} from './reducers/menuItemsReducers/pizzaReducers'

import { cartReducer } from './reducers/managerialReducers/cartReducer'
import { registerUserReducer, loginUserReducer,getAllUsersReducer} from './reducers/managerialReducers/userReducer'

import {placeOrderReducer, getUserOrdersReducer, getAllOrdersReducer} from './reducers/managerialReducers/orderReducer'
import { addBurgerReducer, getAllBurgersReducer, getBurgerByIdReducer,editBurgerReducer } from './reducers/menuItemsReducers/burgerReducer'
import {editPastaReducer, getAllPastasReducer,addPastaReducer, getPastaByIdReducer} from './reducers/menuItemsReducers/pastaReducer'
import { addSaladReducer, editSaladReducer, getAllSaladsReducer,getSaladByIdReducer } from './reducers/menuItemsReducers/saladReducer'
import { addGrillReducer, editGrillReducer, getAllGrillsReducer,getGrillByIdReducer } from './reducers/menuItemsReducers/grillReducer'
import { addDishReducer, editDishReducer, getAllDishesReducer,getDishByIdReducer } from './reducers/menuItemsReducers/dishReducer'
import { addDesertReducer, editDesertReducer, getAllDesertsReducer,getDesertByIdReducer } from './reducers/menuItemsReducers/desertReducer'
import { addDrinkReducer, editDrinkReducer, getAllDrinksReducer,getDrinkByIdReducer} from './reducers/menuItemsReducers/drinkReducer'
import { getAllMessagesReducer, newContactReducer } from './reducers/managerialReducers/contactReducer'
import { getAllBookingsReducer, newBookReducer } from './reducers/managerialReducers/bookingReducer'
import { getAllTablesReducer, editTableReducer } from './reducers/managerialReducers/tableReducer'
const finalReducer = combineReducers({
    getAllPizzasReducer: getAllPizzasReducer, //key:value
    cartReducer: cartReducer,
    registerUserReducer:registerUserReducer,
    loginUserReducer:loginUserReducer,
    placeOrderReducer:placeOrderReducer,
    getUserOrdersReducer:getUserOrdersReducer,
    addPizzaReducer:addPizzaReducer,
    getPizzaByIdReducer:getPizzaByIdReducer,
    editPizzaReducer:editPizzaReducer,
    editBurgerReducer:editBurgerReducer,
    editPastaReducer:editPastaReducer,
    editDesertReducer:editDesertReducer,
    editDishReducer:editDishReducer,
    editDrinkReducer:editDrinkReducer,
    editGrillReducer:editGrillReducer,
    editSaladReducer:editSaladReducer,
    getAllOrdersReducer:getAllOrdersReducer,
    getAllUsersReducer:getAllUsersReducer,
    getAllBurgersReducer:getAllBurgersReducer,
    getAllPastasReducer:getAllPastasReducer,
    getAllSaladsReducer:getAllSaladsReducer,
    getAllGrillsReducer:getAllGrillsReducer,
    getAllDishesReducer:getAllDishesReducer,
    addBurgerReducer:addBurgerReducer,
    addPastaReducer:addPastaReducer,
    addSaladReducer:addSaladReducer,
    addGrillReducer:addGrillReducer,
    addDishReducer:addDishReducer,
    addDesertReducer:addDesertReducer,
    addDrinkReducer:addDrinkReducer,
    getBurgerByIdReducer:getBurgerByIdReducer,
    getPastaByIdReducer:getPastaByIdReducer,
    getSaladByIdReducer:getSaladByIdReducer,
    getDishByIdReducer:getDishByIdReducer,
    getDesertByIdReducer:getDesertByIdReducer,
    getDrinkByIdReducer:getDrinkByIdReducer,
    getGrillByIdReducer:getGrillByIdReducer,
    getAllDesertsReducer:getAllDesertsReducer,
    getAllDrinksReducer:getAllDrinksReducer,
    getAllMessagesReducer:getAllMessagesReducer,
    newContactReducer:newContactReducer,
    getAllBookingsReducer:getAllBookingsReducer,
    newBookReducer:newBookReducer,
    getAllTablesReducer:getAllTablesReducer,
    editTableReducer:editTableReducer
})


const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [] //aici stocam in localstorage ca sa nu se stearga cand dam refresh

const currentUser=localStorage.getItem('currentUser')?JSON.parse(localStorage.getItem('currentUser')):null
//daca exista variabila cu currentuser trebuie sa o trimitem

const initialState = {
    cartReducer: {
        cartItems: cartItems
    },
    loginUserReducer:{
        currentUser:currentUser
    },

}
const composeEnhancers = composeWithDevTools({})
//aici creem storeul
const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store



