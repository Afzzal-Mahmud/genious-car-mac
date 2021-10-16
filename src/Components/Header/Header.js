import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../Hooks/useAuth";

function Header() {
    const {user , logOut} = useAuth();
    console.log(logOut,'on header', user?.displayName)
    return (
        <Navbar className='py-4' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Car-Mac</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/macanic">Macanic</Nav.Link>
                        
                        {user?.email ?
                        <Nav>  
                            <button onClick={logOut}>Log Out</button>
                        </Nav>

                       : <Nav.Link as={Link} to="/login"> 
                               <button>Log In</button>    
                        </Nav.Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Header;