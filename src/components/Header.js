import React from 'react';
import {Link} from 'react-scroll';
import * as ReactBootStrap from 'react-bootstrap';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import ReactDOM from "react-dom";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import logo from '../slike/logo.png';

export default function Header() {
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
                <ReactBootStrap.Nav className="me-auto">
                <ReactBootStrap.Nav.Link ><Link activeClass="ave" to="Galerija" duration="1" spy={true} smooth={true}>Galerija</Link></ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link ><Link activeClass="ave" to="Onama" duration="1" spctiy={true} smooth={true}>O nama</Link></ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link ><Link activeClass="ave" to="Nasipartneri" duration="1" spctiy={true} smooth={true}>Naši partneri</Link></ReactBootStrap.Nav.Link>
                
                </ReactBootStrap.Nav>
                <ReactBootStrap.Nav>
                <ReactBootStrap.Nav.Link href="/Galerija">Naši radovi </ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="/zakazivanje">Zakaži slikanje</ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Container>
            </ReactBootStrap.Navbar>
        </div>
    )
}
