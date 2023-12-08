import { useContext } from 'react';
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import AuthContext from '../../contexts/authContext';

import Path from '../../paths';

export default function Footer() {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <footer>
            <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} to={Path.Home}>Yachter</Navbar.Brand>
                    <Nav>
                        {!isAuthenticated && (
                            <Nav.Link as={Link} to={Path.OwnerRegister}>Join the Fleet</Nav.Link>
                        )}
                    </Nav>
                </Container>
            </Navbar>
        </footer>
    )
}