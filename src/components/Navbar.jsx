import React from "react";
import { StyledNavbar } from "../styles/StyleSheet";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <StyledNavbar>
      <img src={logo} alt="company logo" />
      <Link to="/">Products</Link>
      <Link to="support">Support</Link>
      <input type="text" placeholder="Search products" />
      <Link to="about">About Us</Link>
      <Link to="contact">Contact Us</Link>
      <Link to="cart">Checkout</Link>
    </StyledNavbar>
  );
};

export default Navbar;
