import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Header() {
  return (
    <>
      <Navbar bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          <img style={{ width: "100%", height: "50px" }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png'></img>

          </Navbar.Brand>
          <Nav className=" d-flex text-center text-light">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#product">Product</Nav.Link>
            <Nav.Link href="#feedback">FeedBack</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
     
    </>
  );
}


