import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import Logout from './Logout'
import { WithAuthConsumer } from '../../contexts/AuthContext'
import { Button, Navbar, Nav,NavDropdown } from 'react-bootstrap'

class NavBar extends Component {
    render() {
        let button
        if(this.props.currentUser) {
            button = <Logout />
        } else {
            button = <Link to="/login"><Button variant="primary">Login</Button></Link>
        }

        return(
            // <nav className="navbar navbar-expand-lg py-3 backg-dark" id="mainNav">
            //     <div className="nav-logo">
            //         <Link className="nav-brand" to="/">
            //             <img src="https://i.ibb.co/LZ2MxQR/LOGO-2-BLANCO.png" height="30" className="d-inline-block align-top" style={{}} alt="" />
                        
            //         </Link>
            //     </div>
            //     
            // </nav>



            <Navbar collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand href="/">
                <img
                    src="https://i.ibb.co/LZ2MxQR/LOGO-2-BLANCO.png"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Valkyrie Cup logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="/profile">Perfil</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                </Nav.Link>
                {button}
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
    
}

export default WithAuthConsumer(NavBar)