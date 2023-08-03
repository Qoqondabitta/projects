import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink to="/home">
        <h2>Home</h2>
      </NavLink>

      <NavLink to="/about">
        <h2>About</h2>
      </NavLink>

      <NavLink to="/logo">
        <h2>Logo</h2>
      </NavLink>

      <NavLink to="/contact">
        <h2>Contact</h2>
      </NavLink>

    </div>
  );
};

export default Navbar;
