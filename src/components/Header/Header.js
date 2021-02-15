import '../../pages/Home/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";

import Button from "react-bootstrap/Button";

function Header (){
  return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Quiz Game</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
      <Button> <Nav.Link href="#deets">Log In</Nav.Link></Button>
      <Button>
      <Nav.Link eventKey={2} href="#memes">
        High Scores
      </Nav.Link>
      </Button>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}

export default Header