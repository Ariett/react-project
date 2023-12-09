import { useContext } from 'react';
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import AuthContext from "../../contexts/authContext";
import Path from '../../paths';

export default function Navigation() {
    const { email, isAuthenticated, isYachtsOwner } = useContext(AuthContext);

    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to={Path.Home}>Yachter</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Nav.Link as={Link} to={Path.AllYachts}>All Yachts</Nav.Link>

                            {/* Logged out only */}
                            {!isAuthenticated && (
                                <Nav.Link as={Link} to={Path.Login}>Login</Nav.Link>
                            )}

                            {isAuthenticated && (
                                <NavDropdown title={`Hello ${email}`} id="basic-nav-dropdown">
                                    {/* For members only */}
                                    {!isYachtsOwner && (
                                        <>
                                            <NavDropdown.Item as={Link} to={Path.MemberFavoriteYachts}>Favorite yachts</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to={Path.MemberReservations}>My reservations</NavDropdown.Item>
                                        </>
                                    )}

                                    {/* Yacht Owners only */}
                                    {isYachtsOwner && (
                                        <>
                                            <NavDropdown.Item as={Link} to={Path.OwnerYachts}>My yachts</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to={Path.OwnerYachtsCreate}>Add new yacht</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to={Path.OwnerYachtsReservations}>Yachts reservations</NavDropdown.Item>
                                        </>
                                    )}

                                    <NavDropdown.Divider />
                                    <NavDropdown.Item as={Link} to={Path.Logout}>Logout</NavDropdown.Item>

                                </NavDropdown>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}