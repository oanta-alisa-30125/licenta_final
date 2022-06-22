import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPastas, deletePasta } from '../../../actions/menuItemsActions/pastaActions'
import { Link } from 'react-router-dom'
import Loading from '../../../components/layoutComponents/Loading'
import Error from '../../../components/layoutComponents/Error'

export default function Pastaslist() {
    const dispatch = useDispatch()

    const pastasstate = useSelector(state => state.getAllPastasReducer)
    const { pastas, error, loading } = pastasstate

    useEffect(() => {
        dispatch(getAllPastas())
    }, [])
    return (
        <div>
            <h2>Listă paste</h2>
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
                    {pastas && pastas.map(pasta => {
                        return <tr>
                            <td>
                                {pasta.name}
                            </td>
                            <td>
                                {pasta.price}<br />
                            </td>
                            <td>
                                {pasta.category}
                            </td>
                            <td>
                                <i className='fa fa-trash m-1' onClick={()=>{dispatch(deletePasta(pasta._id))}}></i>
                                <Link to={'/admin/editpasta/' + pasta._id}>
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
