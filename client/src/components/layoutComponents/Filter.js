import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterPizzas } from '../../actions/menuItemsActions/pizzaActions'
import { filterBurgers } from '../../actions/menuItemsActions/burgerActions'
import {filterPastas} from '../../actions/menuItemsActions/pastaActions'
import { filterGrills } from '../../actions/menuItemsActions/grillActions'
import { filterSalads } from '../../actions/menuItemsActions/saladActions'
import { filterDishes } from '../../actions/menuItemsActions/dishActions'
import { filterDeserts } from '../../actions/menuItemsActions/desertActions'
import { filterDrinks } from '../../actions/menuItemsActions/drinkActions'

export default function Filter() {

    function filterFood(searchkey,category) {
        return dispatch => {
            dispatch(filterPizzas(searchkey,category))
            dispatch(filterBurgers(searchkey,category))
            dispatch(filterPastas(searchkey,category))
            dispatch(filterSalads(searchkey,category))
            dispatch(filterGrills(searchkey,category))
            dispatch(filterDishes(searchkey,category)) 
            dispatch(filterDeserts(searchkey,category))    
            dispatch(filterDrinks(searchkey,category))       
        }
    }
    const dispatch = useDispatch()
    const [searchkey,setsearchkey]=useState('')
    const [category,setcategory]=useState('all')

    return (
        <div className='container'>
 

            <div className='row justify-content-center shadow p-3 mb-3 mt-5 bg-white rounded'>
                <div className='col-md-3 w-100'>
                <input onChange={(e)=>{setsearchkey(e.target.value)}} value={searchkey} type="text" className='form-control w-100' placeholder='caută' />
                </div>

                <div className='col-md-3 w-100'>
                    <select className='form-control w-100 mt-2' onChange={(e)=>{setcategory(e.target.value)}} value={category}>
                        <option value="all">Toate</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="non-vegetarian">Non-vegetarian</option>
                        <option value="desert">Desert</option>
                        <option value="băutură">Băuturi</option>
                    </select>
                </div>

                <div className='col-md-3 w-100'>
                    <button className='btn w-100 mt-2' onClick={()=>{dispatch(filterFood(searchkey,category))}}>Caută</button>
                </div>

                <div className='col-md-3 w-100'>
                    <button className='btn w-100 mt-2' onClick={()=>{dispatch(filterFood('','all'))}}>Șterge căutarea</button>
                </div>
                

                </div>
                
            </div>

     
    )
}