import React from 'react';
import './Navbar.css';
import Image from 'react-bootstrap/Image';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Image src="logo.png" alt="Logo" className="img"/>
        <h5 className="h5">SugaRush Bakery</h5> 
      </div>
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#catalog">Catalog</a>
        <a href="#order">Order</a>
        <a href="#account">Account</a>
      </div>
    </div>

  );
  
}

export default Navbar;

