import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllGrills, deleteGrill } from '../../../actions/menuItemsActions/grillActions'
import { Link } from 'react-router-dom'
import Loading from '../../../components/layoutComponents/Loading'
import Error from '../../../components/layoutComponents/Error'

export default function Grillslist() {
    const dispatch = useDispatch()

    const grillsstate = useSelector(state => state.getAllGrillsReducer)
    const { grills, error, loading } = grillsstate

    useEffect(() => {
        dispatch(getAllGrills())
    }, [])
    return (
        <div>
            <h2>Listă grătare</h2>
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
                    {grills && grills.map(grill => {
                        return <tr>
                            <td>
                                {grill.name}
                            </td>
                            <td>
                                {grill.price}<br />
                            </td>
                            <td>
                                {grill.category}
                            </td>
                            <td>
                                <i className='fa fa-trash m-1' onClick={()=>{dispatch(deleteGrill(grill._id))}}></i>
                                <Link to={'/admin/editgrill/' + grill._id}>
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

