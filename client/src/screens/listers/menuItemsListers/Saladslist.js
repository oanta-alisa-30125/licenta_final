import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSalads, deleteSalad } from '../../../actions/menuItemsActions/saladActions'
import { Link } from 'react-router-dom'
import Loading from '../../../components/layoutComponents/Loading'
import Error from '../../../components/layoutComponents/Error'

export default function Saladslist() {
    const dispatch = useDispatch()

    const saladsstate = useSelector(state => state.getAllSaladsReducer)
    const { salads, error, loading } = saladsstate

    useEffect(() => {
        dispatch(getAllSalads())
    }, [])
    return (
        <div>
            <h2>Listă salate</h2>
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
                    {salads && salads.map(salad => {
                        return <tr>
                            <td>
                                {salad.name}
                            </td>
                            <td>
                                {salad.price}<br />
                            </td>
                            <td>
                                {salad.category}
                            </td>
                            <td>
                                <i className='fa fa-trash m-1' onClick={()=>{dispatch(deleteSalad(salad._id))}}></i>
                                <Link to={'/admin/editsalad/'+salad._id}>
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

