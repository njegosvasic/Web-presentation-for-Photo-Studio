import React from 'react';
import profilna from '../slike/profilna.jpg';

import {Container,Row,Col} from 'react-bootstrap'

export default function Onama() {
    return (
        <div id="Onama">
            <h1 className='h11'>NAJBOLJI TIM ZA VAŠU PRIČU</h1>
            <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
             consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </h3>
            <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. 
            </h3>
            <div>          
            <Container className='container1'>
                <Row>
                    <Col><img src={profilna}></img></Col>
                    <Col><h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. </h4></Col>
                </Row>
            </Container>
            <Container className='container1'>
                <Row>
                    <Col><h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. </h4></Col>
                    <Col><img src={profilna}></img></Col>
                </Row>
            </Container>
            </div>
        </div>
    )
}