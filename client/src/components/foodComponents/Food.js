import React, { useState } from "react";
import { Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addToCartOther } from "../../actions/managerialActions/cartActions";
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Food({ item }) {

    AOS.init()
    const [quantity, setquantity] = useState(1)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()

    function addtocart() {
        dispatch(addToCartOther(item, quantity)) 
    }


    return (
       
        <div data-aos='fade-up' className="shadow p-3 mb-3 bg-white rounded">
            <div onClick={handleShow}>
                <h1>{item.name}</h1>
                <img src={item.image} className="img-fluid" style={{ height: '200px', width: '250px' }} />
            </div>
            
            <div className="flex-container" style={{ display: 'flex', alignItems: 'center' , justifyContent: 'center',}}>
             
                <div >
                    <p style={{ verticalAlign: 'middle', display: 'table-cell'}}>Cantitate</p>
                    <select className='form-control' value={quantity} onChange={(e) => { setquantity(e.target.value) }}>
                        {[...Array(10).keys()].map((x, i) => {
                            return <option value={i + 1}>{i + 1}</option>
                        })}
                    </select>
                </div>
            </div>

            <div className="flex-container">
                <div className='m-1 w-100'>
                    <h1 className='mt-1'>Preț: {item.price * quantity} RON</h1>
                </div>
                <div className='m-1 w-100'>
                    <button className="btn" onClick={addtocart}>Adaugă în coș</button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{item.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={item.image} className="img-fluid" style={{ height: '400px' }} />
                    <p>{item.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className="btn" onClick={handleClose}>Închide</button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}