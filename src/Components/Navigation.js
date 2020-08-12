import React from "react";
import logo from "../images/logo.png";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <Navbar>
      <Navbar.Brand href="#home">
        <img src={logo} id="logo" className="App-logo" alt="logo" />
      </Navbar.Brand>
    </Navbar>
  );
}

export default Navigation;
