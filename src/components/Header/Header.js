import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";

import Button from "react-bootstrap/Button";

function Header (){
  return (
<Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
  <Navbar.Brand href="#home" className="font-bold">Quiz Game</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
      <button className="bg-purple-500  hover:bg-purple-800 text-white front-bold py-1 px-4 rounded shadow m-1"> <Nav.Link href="#deets">Log In</Nav.Link></button>
      <button className="bg-purple-500  hover:bg-purple-800 text-white front-bold py-1 px-4 rounded shadow m-1">
      <Nav.Link eventKey={2} href="#memes">
        High Scores
      </Nav.Link>
      </button>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}

export default Header