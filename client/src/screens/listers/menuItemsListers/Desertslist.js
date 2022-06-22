import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllDeserts, deleteDesert } from '../../../actions/menuItemsActions/desertActions'
import { Link } from 'react-router-dom'
import Loading from '../../../components/layoutComponents/Loading'
import Error from '../../../components/layoutComponents/Error'

export default function Desertslist() {
    const dispatch = useDispatch()

    const desertsstate = useSelector(state => state.getAllDesertsReducer)
    const { deserts, error, loading } = desertsstate

    useEffect(() => {
        dispatch(getAllDeserts())
    }, [])
    return (
        <div>
            <h2>Listă desert</h2>
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
                    {deserts && deserts.map(desert => {
                        return <tr>
                            <td>
                                {desert.name}
                            </td>
                            <td>
                                {desert.price}<br />
                            </td>
                            <td>
                                {desert.category}
                            </td>
                            <td>
                                <i className='fa fa-trash m-1' onClick={()=>{dispatch(deleteDesert(desert._id))}}></i>
                                <Link to={'/admin/editdesert/' + desert._id}>
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

