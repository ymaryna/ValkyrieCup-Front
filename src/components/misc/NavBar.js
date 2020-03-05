import React, { Component } from 'react'
import './NavBar.css'
import Logout from './Logout'
import { WithAuthConsumer } from '../../contexts/AuthContext'
import { Button, Navbar, Nav,NavDropdown } from 'react-bootstrap'
import { VCLogo } from '../../assets'

class NavBar extends Component {
    render() {
        let button
        let profile
        if(this.props.currentUser) {
            button = <Logout />
            profile = <Nav.Link href="/profile">Perfil</Nav.Link>
        } else {
            button = <Button href="/login" variant="primary">Login</Button>
        }

        return(
            <Navbar collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand href="/">
                <img
                    src={VCLogo}
                    height="30"
                    className="d-inline-block align-top"
                    alt="Valkyrie Cup logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                {/* <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                <Nav.Link eventKey={2} href="#prox-comp">
                    Próximo torneo
                </Nav.Link>
                <Nav.Link eventKey={3} href="#news">
                    Noticias
                </Nav.Link>
                <NavDropdown title="Competiciones" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/tournament/rainbow-six-siege">Rainbow Six Siege</NavDropdown.Item>
                    {/* <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                </NavDropdown>
                </Nav>
                <Nav>
                {profile}
                {button}
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
    
}

export default WithAuthConsumer(NavBar)