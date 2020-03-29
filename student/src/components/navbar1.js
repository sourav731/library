import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import JadavpurLogo from "../images/ju.png";

function NavigationBar(props) {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={{ backgroundColor: "#183666" }}
      >
        <Navbar.Brand href="#home">
          <img
            src={JadavpurLogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <span style={{ paddingLeft: "10px" }}>
            JADAVPUR UNIVERSITY LIBRARY
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="#facultyLogin">FACULTY</Nav.Link>
            <Nav.Link href="#studentLogin">STUDENT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
