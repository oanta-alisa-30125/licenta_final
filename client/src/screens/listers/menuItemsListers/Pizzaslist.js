/* eslint-disable no-template-curly-in-string */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas, deletePizza } from '../../../actions/menuItemsActions/pizzaActions'
import { Link } from 'react-router-dom'
import Loading from '../../../components/layoutComponents/Loading'
import Error from '../../../components/layoutComponents/Error'

export default function Pizzaslist() {
    const dispatch = useDispatch()

    const pizzasstate = useSelector(state => state.getAllPizzasReducer)
    const { pizzas, error, loading } = pizzasstate

    useEffect(() => {
        dispatch(getAllPizzas())
    }, [])
    return (
        <div>
            <h2>Listă pizza</h2>
            {loading && (<Loading />)}
            {error && (<Error error='Something went wrong' />)}

            <table className='table table-bordered'>
                <thead className='thead-dark'>
                    <th>Name</th>
                    <th>Prices</th>
                    <th>Category</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {pizzas && pizzas.map(pizza => {
                        return <tr>
                            <td>
                                {pizza.name}
                            </td>
                            <td>
                                Small:{pizza.prices[0]['mică']}<br />
                                Medium:{pizza.prices[0]['medie']}<br />
                                Large:{pizza.prices[0]['mare']}
                            </td>
                            <td>
                                {pizza.category}
                            </td>
                            <td>
                                <i className='fa fa-trash m-1' onClick={()=>{dispatch(deletePizza(pizza._id))}}></i>
                                <Link to={'/admin/editpizza/'+ pizza._id}>
                               <i className='fa fa-edit m-1'></i>
                               </Link>
                        
                            </td>
                        </tr>

                    })}
                </tbody>
            </table>


        </div>
    )
}

