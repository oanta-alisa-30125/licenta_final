import React, { useState } from "react";
import { Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from "../../actions/managerialActions/cartActions";
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Pizza({ pizza }) {
    
    AOS.init()
    const [quantity, setquantity] = useState(1)
    const [varient, setvarient] = useState('mică')

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()

    function addtocart() {
        dispatch(addToCart(pizza, quantity, varient)) 
    }


    return (
        
        <div data-aos='fade-up' className="shadow p-3 m-3 bg-white rounded">
            <div onClick={handleShow}>
                <h1>{pizza.name}</h1>
                <img src={pizza.image} className="img-fluid" style={{ height: '200px', width: '250px' }} />
            </div>


            <div className="flex-container" style={{ display: 'flex', alignItems: 'center' , justifyContent: 'center' }}>
                <div  style={{padding: '5px'}}>
                    <p style={{ verticalAlign: 'middle', display: 'table-cell'}}>Dimensiune</p>

                    <select className='form-control' value={varient} onChange={(e) => { setvarient(e.target.value) }}>
                        {pizza.varients.map(varient => {
                            return <option value={varient}>{varient}</option>
                        }
                        )}
                    </select>

                </div>
                <div style={{padding: '5px'}}>
                    <p style={{ verticalAlign: 'middle', display: 'table-cell'}} >Cantitate</p>

                    <select className='form-control' value={quantity} onChange={(e) => { setquantity(e.target.value) }}>
                        {[...Array(10).keys()].map((x, i) => {
                            return <option value={i + 1}>{i + 1}</option>
                        })}
                    </select>
                </div>
            </div>

            <div className="flex-container">
                <div className='m-1 w-100'>
                    <h1 className='mt-1'>Pret: {pizza.prices[0][varient] * quantity} RON</h1>
                </div>
                <div className='m-1 w-100'>
                    <button className="btn" onClick={addtocart}>Adaugă în coș</button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={pizza.image} className="img-fluid" style={{ height: '400px' }} />
                    <p>{pizza.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className="btn" onClick={handleClose}>Închide</button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}
