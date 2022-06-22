import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBurgers, deleteBurger } from '../../../actions/menuItemsActions/burgerActions'
import { Link } from 'react-router-dom'
import Loading from '../../../components/layoutComponents/Loading'
import Error from '../../../components/layoutComponents/Error'

export default function Burgerslist() {
    const dispatch = useDispatch()

    const burgersstate = useSelector(state => state.getAllBurgersReducer)
    const { burgers, error, loading } = burgersstate

    useEffect(() => {
        dispatch(getAllBurgers())
    }, [])
    return (
        <div>
            <h2>Listă burgeri</h2>
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
                    {burgers && burgers.map(burger => {
                        return <tr>
                            <td>
                                {burger.name}
                            </td>
                            <td>
                                {burger.price}<br />
                            </td>
                            <td>
                                {burger.category}
                            </td>
                            <td>
                                <i className='fa fa-trash m-1' onClick={()=>{dispatch(deleteBurger(burger._id))}}></i>
                                <Link to={'/admin/editburger/' + burger._id}>
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

