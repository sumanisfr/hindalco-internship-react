import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('token') || localStorage.getItem('user');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (

    <>
      {/* Header */}
        <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm sticky-top" style={{height: '60px'}}>
            <Navbar.Brand as={Link} to="/" className="fw-bold text-warning">
          <i className="fas fa-tools me-2 "></i>
           Tools Tracking App
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {isLoggedIn ? (
              <>
            <Nav.Link as={Link} to="/dashboard" className="text-light">
              <i className="fas fa-tachometer-alt me-1"></i>
              Dashboard
            </Nav.Link>
            <NavDropdown 
              title={<><i className="fas fa-ellipsis-v text-light"></i></>} 
              id="user-dropdown"
              align="end"
            >
              <NavDropdown.Item as={Link} to="/">
                <i className="fas fa-home me-1"></i>
                Home
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about">
                <i className="fas fa-info-circle me-1"></i>
                About
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services">
                <i className="fas fa-cogs me-1"></i>
                Services
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contact">
                <i className="fas fa-envelope me-1"></i>
                Contact
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogout}>
                <i className="fas fa-sign-out-alt me-1"></i>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
              </>
            ) : (
              <>
            <NavDropdown 
              title={<><i className="fas fa-ellipsis-v text-light"></i></>} 
              id="guest-dropdown"
              align="end"
            >
              <NavDropdown.Item as={Link} to="/">
                <i className="fas fa-home me-1"></i>
                Home
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about">
                <i className="fas fa-info-circle me-1"></i>
                About
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services">
                <i className="fas fa-cogs me-1"></i>
                Services
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contact">
                <i className="fas fa-envelope me-1"></i>
                Contact
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/login">
                <i className="fas fa-sign-in-alt me-1"></i>
                Login
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/register">
                <i className="fas fa-user-plus me-1"></i>
                Register
              </NavDropdown.Item>
            </NavDropdown>
              </>
            )}
          </Nav>
            </Navbar.Collapse>
       
                </Navbar>
            </>
          );
        };
        
        export default Header;
