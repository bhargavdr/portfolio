import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function NavigationBar() {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const navLinkStyle = {
    fontWeight: 'bold',
  };

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  return (
    <>
      <Navbar
        bg="light"
        variant="light"
        sticky="top"
        expand="lg"
        expanded={expanded}
        onToggle={handleNavbarToggle}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ fontWeight: 'bold' }}>
            Bhargav D R
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={Link}
                to="/"
                style={
                  location.pathname === '/'
                    ? { ...navLinkStyle, color: 'black' }
                    : navLinkStyle
                }
                onClick={handleNavLinkClick}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                style={
                  location.pathname === '/about'
                    ? { ...navLinkStyle, color: 'black' }
                    : navLinkStyle
                }
                onClick={handleNavLinkClick}
              >
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/portfolio"
                style={
                  location.pathname === '/portfolio'
                    ? { ...navLinkStyle, color: 'black' }
                    : navLinkStyle
                }
                onClick={handleNavLinkClick}
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/resume"
                style={
                  location.pathname === '/resume'
                    ? { ...navLinkStyle, color: 'black' }
                    : navLinkStyle
                }
                onClick={handleNavLinkClick}
              >
                Resume
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                style={
                  location.pathname === '/contact'
                    ? { ...navLinkStyle, color: 'black' }
                    : navLinkStyle
                }
                onClick={handleNavLinkClick}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
