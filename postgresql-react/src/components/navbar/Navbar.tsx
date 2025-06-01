import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NavigationBar: React.FC = () => {
    const navigate = useNavigate();

    const handleLogoff = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <Navbar 
            bg="primary" 
            variant="dark" 
            expand="lg" 
            className="shadow-sm mb-3"
        >
            <Container>
                <Navbar.Brand 
                    href="/main" 
                    className="fs-3 fw-bold text-danger"
                >
                    Food X Change
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav " />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center ">
                        <Nav.Link 
                            href="/about" 
                            className="mx-2 fw-medium text-danger"
                        >
                            About Us
                        </Nav.Link>
                        <Nav.Link 
                            href="/contact" 
                            className="mx-2 fw-medium text-danger"
                        >
                            Connect Us
                        </Nav.Link>
                        <Nav.Link 
                            href="/buy" 
                            className="mx-2 fw-medium text-danger"
                        >
                            Buy Item
                        </Nav.Link>
                        <Button 
                            variant="danger"
                            onClick={handleLogoff}
                            className="ms-3"
                        >
                            Log Off
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
