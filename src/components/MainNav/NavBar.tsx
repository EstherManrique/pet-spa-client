import React, { Fragment } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
  return (
    <Fragment>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Pet-Spa</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/stores">Stores</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Fragment>
  )
}

export default NavBar