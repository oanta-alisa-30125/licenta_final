import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllDishes, deleteDish } from '../../../actions/menuItemsActions/dishActions'
import { Link } from 'react-router-dom'
import Loading from '../../../components/layoutComponents/Loading'
import Error from '../../../components/layoutComponents/Error'

export default function Disheslist() {
    const dispatch = useDispatch()

    const dishesstate = useSelector(state => state.getAllDishesReducer)
    const { dishes, error, loading } = dishesstate

    useEffect(() => {
        dispatch(getAllDishes())
    }, [])
    return (
        <div>
            <h2>Listă garnituri</h2>
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
                    {dishes && dishes.map(dish => {
                        return <tr>
                            <td>
                                {dish.name}
                            </td>
                            <td>
                                {dish.price}<br />
                            </td>
                            <td>
                                {dish.category}
                            </td>
                            <td>
                                <i className='fa fa-trash m-1' onClick={()=>{dispatch(deleteDish(dish._id))}}></i>
                                <Link to={'/admin/editdish/' + dish._id}>
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

