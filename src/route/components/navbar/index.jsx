import React from "react";
import "./style.css";
import { NavLinks } from "./style";

const Navbar = () => {
  return (
    <div className="div">
      
      <NavLinks 
        className="me"
        activeStyle={{ color: "red" }}
        to="/"
        exact
      >
        <h2>Home</h2>
      </NavLinks>

      <NavLinks
        activeStyle={{ color: "red" }}
        to="/about"
        exact
      >
        <h2>About</h2>
      </NavLinks>

      <NavLinks
        activeStyle={{ color: "red" }}
        to="/logo"
        exact
      >
        <h2>Logo</h2>
      </NavLinks>

      <NavLinks
        activeStyle={{ color: "red" }}
        to="/contact"
        exact
      >
        <h2>Contact</h2>
      </NavLinks>

    </div>
  );
};

export default Navbar;
