import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import JadavpurLogo from "../images/ju.png";
import LogoutImage from "../images/logout.svg";

function NavigationBar(props) {
  return (
    <div>
      <Navbar
        collapseOnSelect
        fixed="top"
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
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#cardStatus">CARD STATUS</Nav.Link>
            <Nav.Link href="#findBook">FIND BOOK</Nav.Link>
            <Nav.Link href="#issueBook">ISSUE HISTORY</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Navbar.Text>
              <b>{props.cardNumber}</b>
            </Navbar.Text>
            <Nav.Link href="#logout">
              <img
                src={LogoutImage}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
