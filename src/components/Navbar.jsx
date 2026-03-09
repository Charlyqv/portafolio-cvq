import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg="white" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#perfil" className="fw-bold" style={{ color: 'var(--accent-color)' }}>
          &lt; Carlos Villaseñor Quintero. /&gt;
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#perfil" className="fw-semibold">Perfil</Nav.Link>
            <Nav.Link href="#experiencia" className="fw-semibold">Experiencia</Nav.Link>
            <Nav.Link href="#certificaciones" className="fw-semibold">Certificaciones</Nav.Link>
            <Nav.Link href="#habilidades" className="fw-semibold">Habilidades</Nav.Link>
            <Nav.Link href="#proyectos" className="fw-semibold">Proyectos</Nav.Link>
            <Nav.Link href="#contacto" className="fw-semibold">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;