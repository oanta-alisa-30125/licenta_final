import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas } from '../../actions/menuItemsActions/pizzaActions'
import Loading from '../../components/layoutComponents/Loading'
import Error from '../../components/layoutComponents/Error'
import Pizza from '../../components/foodComponents/Pizza'
import Food from '../../components/foodComponents/Food'

import Filter from '../../components/layoutComponents/Filter'

import { getAllBurgers } from '../../actions/menuItemsActions/burgerActions'
import { getAllPastas } from '../../actions/menuItemsActions/pastaActions'
import { getAllSalads } from '../../actions/menuItemsActions/saladActions'
import { getAllGrills } from '../../actions/menuItemsActions/grillActions'
import { getAllDishes } from '../../actions/menuItemsActions/dishActions'
import { getAllDeserts } from '../../actions/menuItemsActions/desertActions'
import { getAllDrinks } from '../../actions/menuItemsActions/drinkActions'


import NavFood from '../../components/layoutComponents/NavFood'
export default function Menuscreen() {

    const dispatch = useDispatch()


    const pizzasstate = useSelector(state => state.getAllPizzasReducer)
    const { pizzas, error, loading } = pizzasstate //we can track the request

    const burgersstate = useSelector(state => state.getAllBurgersReducer)
    const { burgers} = burgersstate

    const pastasstate = useSelector(state => state.getAllPastasReducer)
    const { pastas} = pastasstate

    const saladsstate = useSelector(state => state.getAllSaladsReducer)
    const { salads} = saladsstate

    const grillsstate = useSelector(state => state.getAllGrillsReducer)
    const { grills} = grillsstate

    const dishesstate = useSelector(state => state.getAllDishesReducer)
    const { dishes} = dishesstate

    const desertsstate = useSelector(state => state.getAllDesertsReducer)
    const { deserts} = desertsstate

    const drinksstate = useSelector(state => state.getAllDrinksReducer)
    const { drinks} = drinksstate




    useEffect(() => {
        dispatch(getAllPizzas())
        dispatch(getAllBurgers())
        dispatch(getAllPastas())
        dispatch(getAllSalads())
        dispatch(getAllGrills())
        dispatch(getAllDishes())
        dispatch(getAllDeserts())
        dispatch(getAllDrinks())
    }, [])//dispatch the action




    ////daca e loadin asteptm pt raspuns(adica Loading)
    //else daca avem erori atunci avem de aratat Something went wrong
    //daca nu e nici loading si nici error in else avem de rendered componentele adica avem pizzas array
    //key pt ca each child shoul have a unique key
    return (//cu row creez un nou rand
        <div>
            <div className='mt-3'>
             <Filter/>
             <NavFood/>
           
             </div>

             <><section id="pizza_section">
            
 
                {pizzas.length >0 && (<h1>PIZZA</h1>) }
             
             
            <div className='row justify-content-center'>

                {loading ? (<Loading/>): error ? (<Error error='Something went wrong'/>) : (
                        
                        pizzas.map((pizza) => {
                         
                            return(

                             <div className='col-md-4 m-3' key={pizza._id}>
                                
                                 <div>
                                 
                                <Pizza pizza={pizza} />
                                </div>
                            </div>
                            );
                        })
               ) }
            </div>
            </section>
            <section id="burgers_section">
            {burgers.length >0 && (<h1>BURGER</h1>) }
            <div className='row justify-content-center'>
            {(
                        burgers.map((burger) => { 
                            return(
                             <div className='col-md-4 m-3' key={burger._id}>
                                 <div>
                                <Food item={burger} />
                                </div>
                            </div>
                            );
                        })
                        ) }
            </div>
            </section>
            <section id="pastas_section">
            
            {pastas.length >0 && (<h1>PASTE</h1>) }
            <div className='row justify-content-center'>

            
           
            {(
                   
                        pastas.map((pasta) => {
                            
                            return(

                             <div className='col-md-4 m-3' key={pasta._id}>
                                
                                 <div>
                                 
                                <Food item={pasta} />
                                </div>
                            </div>
                            );
                        })
                        ) }
            </div>
            </section>
            
            <section id="salads_section">
            
            {salads.length >0 && (<h1>SALATE</h1>) }
            <div className='row justify-content-center'>

            
           
            {(
                   
                        salads.map((salad) => {
                            
                            return(

                             <div className='col-md-4 m-3' key={salad._id}>
                                
                                 <div>
                                 
                                <Food item={salad} />
                                </div>
                            </div>
                            );
                        })
                        ) }
            </div>
            </section>
            
            <section id="grills_section">
            
            {grills.length >0 && (<h1>GRILL</h1>) }
            <div className='row justify-content-center'>

            
           
            {(
                   
                   grills.map((grill) => {
                            
                            return(

                             <div className='col-md-4 m-3' key={grill._id}>
                                
                                 <div>
                                 
                                <Food item={grill} />
                                </div>
                            </div>
                            );
                        })
                        ) }
            </div>
            </section>

            <section id="dishes_section">
            
            {dishes.length >0 && (<h1>GARNITURI</h1>) }
            <div className='row justify-content-center'>

            
           
            {(
                   
                   dishes.map((dish) => {
                            
                            return(

                             <div className='col-md-4 m-3' key={dish._id}>
                                
                                 <div>
                                 
                                <Food item={dish} />
                                </div>
                            </div>
                            );
                        })
                        ) }
            </div>
            </section>
           
            <section id="deserts_section">
            
            {deserts.length >0 && (<h1>DESERT</h1>) }
            <div className='row justify-content-center'>

            
           
            {(
                   
                   deserts.map((desert) => {
                            
                            return(

                             <div className='col-md-4 m-3' key={desert._id}>
                                
                                 <div>
                                 
                                <Food item={desert} />
                                </div>
                            </div>
                            );
                        })
                        ) }
            </div>
            </section>
            
            <section id="drinks_section">
            
            {drinks.length >0 && (<h1>BAUTURI</h1>) }
            <div className='row justify-content-center'>

            
           
            {(
                   drinks.map((drink) => {
                            return(
                             <div className='col-md-4 m-3' key={drink._id}>
                                
                                 <div>
                                 
                                <Food item={drink} />
                                </div>
                            </div>
                            );
                        })
                        ) }
            </div>
            </section>
            </>
        </div>
        
    )
}