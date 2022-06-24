import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { DatePicker, Space } from 'antd';
import 'antd/dist/antd.css'
import moment from 'moment'
import axios from 'axios';
import { newContact } from '../../actions/managerialActions/contactActions';
import { newBook } from '../../actions/managerialActions/bookActions';
import reservation from "../../assets/bookTable.jpeg"
import landing from "../../assets/landing.jpg"
import { editTable, getAllTables } from '../../actions/managerialActions/tableActions';
export default function OpenScreen() {

    const dispatch = useDispatch();

    const tablesstate = useSelector(state => state.getAllTablesReducer)
    const {tables} = tablesstate

    useEffect(() => {
        dispatch(getAllTables())
    }, [])


    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [date, setdate] = useState("");
    const [hour, sethour] = useState("");
    const [mesaj, setmesaj] = useState("");

    function book() {
        var booking = {};
        const pickedTime = date + " " +hour;
        console.log(tables);
        let ok= 0;
        for(let i=0;i<tables.length; i++){
            
            if(tables[i].bookings.indexOf(pickedTime) < 0)
             {
                 var table= tables[i].name;
                 booking = {
                    name,
                    email,
                    phone,
                    date,
                    hour,
                    table
                };
                 tables[i].bookings.push(pickedTime);
                 const tabletoedit ={
                     _id:  tables[i]._id,
                     name: tables[i].name,
                     bookings: tables[i].bookings
                 }
                 console.log(tabletoedit)
                 dispatch(editTable(tabletoedit));
                 ok = 1 ;
                 break;
                
             }
             
        }
        if(ok==1){
            dispatch(newBook(booking))
            console.log(booking);
        }
        else
            alert("Nu mai există mese disponibile pentru acea dată și oră")
    
    }


    function filterDate(date, dateString) {
        setdate(moment(date, dateString).format('DD-MM-YYYY'))
    }


    function sendMessage() {

        const contact = {
            name,
            email,
            mesaj
        }
        console.log(contact);
        dispatch(newContact(contact))
        alert("mesaj trimis")



    }
   

    return (

        <>
           
           <div id="home_section" className='row landing'  style={{ backgroundImage:`url(${landing})`, backgroundPosition: 'center',backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100vw',
        height: '95vh'}}>
                <div className='col-md-12'>
                    <h2 id="shadowww" style={{ color: 'whiteSmoke', fontSize: '130px' ,fontFamily:'georgia'}}>Food Land</h2>

                    <h2 id="shadowww" style={{ color: 'white',fontFamily:'georia',fontSize:'25px' }}>Locul unde gustul întâlnește pasiunea</h2>

                    <Link to='/menu'>
                        <button className='btn m-3'>Meniu</button>
                    </Link>

                    <a href="#book_section">
                        <button className='btn m-3'>Rezervare masa</button>
                    </a>

                    <a href="#aboutus_section">
                        <button className='btn m-3'>Galerie</button>
                    </a>

                    <a href="#orar_section">
                        <button className='btn m-3'>Orar</button>
                    </a>

                    <a href="#contact_section">
                        <button className='btn m-3'>Contact</button>
                    </a>
                </div>

            </div>
        
        

        

                <div id="book_section" className='row'>
               

                    <div className='col-sm'>
                    <h2 style={{ fontSize: '50px', fontFamily:'georgia'}}>Rezervare</h2>
                        <img src={reservation}  width="400" height="250" paddingTop="50" />
                    </div>


                    <div className='col-sm mt-5 ml-5'>

                        <form style={{marginBottom:'20px', width: "75%" }}>
                        <Space direction="vertical" >
                                <DatePicker format='DD-MM-YYYY' onChange={filterDate} className='mt-3' />
                            </Space>

                            
                            <select className="custom-select custom-select-sm ml-5" type="text" placeholder="hour" value={hour} onChange={(e) => { sethour(e.target.value) }} style={{width:"35%", height:"40px", marginBottom:"3%"}}>
                                <option selected>Ora</option>
                                <option value="10:00">10:00</option>
                                <option value="11:00">11:00</option>
                                <option value="12:00">12:00</option>
                                <option value="13:00">13:00</option>
                                <option value="14:00">14:00</option>
                                <option value="15:00">15:00</option>
                                <option value="16:00">16:00</option>
                                <option value="17:00">17:00</option>
                                <option value="18:00">18:00</option>
                                <option value="19:00">19:00</option>
                                <option value="20:00">20:00</option>
                                <option value="21:00">21:00</option>
                            </select>


                            <input className='form-control' type="text" placeholder="nume" value={name} onChange={(e) => { setname(e.target.value) }} />
                            <input className='form-control' type="text" placeholder="email" value={email} onChange={(e) => { setemail(e.target.value) }} />
                            <input className='form-control' type="text" placeholder="telefon" value={phone} onChange={(e) => { setphone(e.target.value) }} />
                            

                            <a href="#home_section">
                            <button onClick={book} className='btn mb-5 mt-5' type='submit'>Rezervă</button>
                            </a>
                            </form>
                    </div>
                </div>

            






           

        <div id="aboutus_section" className='row'>
            <div className='col-sm'>
        

                <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div class="carousel-item active">
                            <img src="rest3.jpg" alt="First slide" width="450px" height="400px" />
                        </div>
                        <div className="carousel-item">
                            <img src="rest2.jpg" alt="Second slide" width="500px" height="400px" />
                        </div>
                        <div className="carousel-item">
                            <img src="rest4.jpg" alt="Third slide" width="550px" height="400px" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Inapoi</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Urmatoarea</span>
                    </a>
                </div>

            </div>
        </div>
           



            
                
            
                    <div id="orar_section" className='row'>
                    
                     
                    
                        <div className='col-sm'>
                        <h2 id="shadowww" style={{ fontSize: '50px',marginTop:'10%',color:"white"}}>Orar</h2>
                            <p id="shadowww" style={{ marginTop:'10%', fontSize: '20px', color:"white" }}>Luni - Joi: 8:00 — 23:15<br />Vineri: 8:00 — 01:00<br />Sambata 9:00 — 01:00<br />Duminica: 9:00 — 23:15</p>
                            <a href="#home_section">
                                <button className='btn mb-5'>Inapoi</button>
                            </a>
                        </div>

                    </div>
               


           
            
                
                
                    <div id="contact_section" className='row'  >
                    
                        <div className='col-sm'>
                        <h2 id="shadowww" style={{ color: 'white' }}>Lasa-ne un mesaj!</h2>
                            <div style ={{display: 'flex',  justifyContent:'center', alignItems:'center',}}>
                                <form style={{ width: '500px', margin: '30px' }}>


                                    <div className="form-group" >

                                        <label for="exampleFormControlInput1" style={{ color: 'white' }}>Nume</label>
                                        <input type="text" className="form-control" placeholder="nume" value={name} onChange={(e) => { setname(e.target.value) }} />
                                        <label for="exampleFormControlInput1" style={{ color: 'white' }}>Email address</label>
                                        <input type="email" className="form-control" placeholder="nume@example.com" value={email} onChange={(e) => { setemail(e.target.value) }} />

                                        <label for="exampleFormControlTextarea1" style={{ color: 'white' }}>Mesajul tau</label>
                                        <textarea className="form-control" rows="3" placeholder="text" value={mesaj} onChange={(e) => { setmesaj(e.target.value) }}></textarea>
                                        <a href="#home_section">
                                        <button onClick={sendMessage} className='btn  mt-2 mb-2'>Trimite mesajul!</button>
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                    </div>

                    <div className='container'>
                        <div className='row mt-5'>
                           
                        <h1 style={{fontSize:"40px", color:'lightslategray'}}>Urmărește-ne pe </h1>
                        <div className="fb-page ml-5" data-href="https://www.facebook.com/TraideMaramures/" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><a href="https://www.facebook.com/TraideMaramures/"><i class="fa-brands fa-facebook-f fa-2x"></i></a></div>
                        <div className="ig-page ml-3" data-href="http://www.instagram.com/traidemaramures/" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><a href="http://www.instagram.com/traidemaramures/"><i class="fa-brands fa-instagram fa-2x"></i></a></div>
                       
                        
                        <h1 style={{fontSize:"40px", color:'lightslategray'}}>Sau vizitează-ne</h1>
                        <div className="mapouter ml-3"><div className="gmap_canvas"><iframe width="251" height="125" id="gmap_canvas" src="https://maps.google.com/maps?q=ocna%20sugatag,%20unirii%202A&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.whatismyip-address.com/divi-discount/">divi discount</a><br/>
                        <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
                        </div></div>
                        </div>
                    </div>
                    
              
            </>

    )

}


