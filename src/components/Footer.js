import React from 'react';
import {Card, CardGroup} from 'react-bootstrap';
import DrusveneMreze from './DrustveneMreze';
import logo from '../slike/logo.png';

export default function Onama() {
    return (
        <div>
            <CardGroup>
            <Card variant="dark" bg="dark" border='dark'> 
                <Card.Body >
                <Card.Title><h4 className='kontaktinfo'>Kontaktirajte nas</h4></Card.Title>
                <Card.Text>
                <h5 className='kontaktinfo2'>000-0000-000</h5>
                <h5 className='kontaktinfo2'>phototime@gmail.com</h5>
                </Card.Text>
                </Card.Body>
            </Card>
            <Card bg='dark' border='dark'>      
                <Card.Body>
                        <Card.Img src={logo} 
                            width="210"
                            height="190">   
                        </Card.Img>
                </Card.Body>
            </Card>
            <Card bg='dark' border='dark'>
                <Card.Body>
                <Card.Text>
                    <DrusveneMreze/>
                </Card.Text>
                </Card.Body>
            </Card>
            </CardGroup>
        </div>
    )
}