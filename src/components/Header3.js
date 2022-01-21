import React from 'react';
import {Link} from 'react-scroll';
import * as ReactBootStrap from 'react-bootstrap';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import ReactDOM from "react-dom";
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import logo from '../slike/logo.png';

export default function Header3() {
    return (
        <div>
           <ReactBootStrap.Navbar className='navbar1' fixed="top" collapseOnSelect pexpand="lg" bg="dark" variant="dark">
            <ReactBootStrap.Container >
            <ReactBootStrap.Navbar.Brand href='http://localhost:3000'>
                
                                <img className='navbarlogo' 
                            src={logo}
                            width="200"
                            height="130"
                        />
                        
            </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            </ReactBootStrap.Navbar.Collapse>
            <ReactBootStrap.Nav.Link href="/Galerija">Naši radovi </ReactBootStrap.Nav.Link>
            </ReactBootStrap.Container>
            </ReactBootStrap.Navbar>
        </div>
    )
}
