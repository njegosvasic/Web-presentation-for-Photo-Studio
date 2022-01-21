import React, { useState } from "react";
import {Form,Button,Row,Col} from 'react-bootstrap';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import SimpleMap from "./Mapa";
import Header3 from "./Header3";

import emailjs from 'emailjs-com';



export default function Zakazivanje() {
    
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_sstnkyu', 'template_hafx58a', e.target, 'user_pu1CXWB78i6rWf4ZlJDet')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }
    
    const [startDate, setStartDate] = useState(new Date());

    const handleApiLoaded = (map, maps) => {
        
      };
    
    return (
        <>
        <h1>Zakažite slikanje</h1>
            <form className="contact-form" onSubmit={sendEmail}>
                <h1>Zakažite slikanje</h1>
                <Col>
                <input type="text" name="Ime"  placeholder="Ime"/>
                </Col>
                <Col>
                <input type="text" name="Prezime" placeholder="Prezime"/> 
                </Col>
                <input type="email" name="email" placeholder="email"/>     
                <Col>  
                <input type="text" name="Telefon" placeholder="Broj telefona"/>   
                </Col>  
                <Row>  
                <Col>          
                <DatePicker className='kalendar'  selected={startDate} onChange={(date) => setStartDate(date)}/>   
                </Col>
                </Row>
                <Col>
                <input className='formadugme' type="submit" value="Zakaži" />
                </Col>
                
            </form>
        <Form className='kontakt2'>
            <Row>       
                 
            </Row>
            <Row>
               <Col><h2>Gde se nalazimo</h2></Col>
               <Col></Col>
            </Row>
            <Row>
                 <Col>
                    <div className='mapa'>
                  <SimpleMap className='mapa' />
                    </div>
                 </Col>
                 <Col>
                 <h3 className='zakazivanje'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Lorem ipsum dolor sit amet.
            </h3>
                 </Col>
            </Row>
            <Header3/>
        </Form>
        </>
    )
}