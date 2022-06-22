import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllDrinks, deleteDrink } from '../../../actions/menuItemsActions/drinkActions'
import { Link } from 'react-router-dom'
import Loading from '../../../components/layoutComponents/Loading'
import Error from '../../../components/layoutComponents/Error'

export default function Drinkslist() {
    const dispatch = useDispatch()

    const drinksstate = useSelector(state => state.getAllDrinksReducer)
    const { drinks, error, loading } = drinksstate

    useEffect(() => {
        dispatch(getAllDrinks())
    }, [])
    return (
        <div>
            <h2>Listă băuturi</h2>
            {loading && (<Loading />)}
            {error && (<Error error='Something went wrong' />)}

            <table className='table table-bordered'>
                <thead className='thead-dark'>
                    <th>Nume</th>
                    <th>Pret</th>
                    <th>Categorie</th>
                    <th>Actiuni</th>
                </thead>
                <tbody>
                    {drinks && drinks.map(drink => {
                        return <tr>
                            <td>
                                {drink.name}
                            </td>
                            <td>
                                {drink.price}<br />
                            </td>
                            <td>
                                {drink.category}
                            </td>
                            <td>
                                <i className='fa fa-trash m-1' onClick={()=>{dispatch(deleteDrink(drink._id))}}></i>
                                <Link to={'/admin/editdrink/' + drink._id}>
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

