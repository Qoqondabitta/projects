import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink
        style={{ textDecoration: "none" }}
        activeStyle={{ color: "red" }}
        to="/home"
        exact
      >
        <h2>Home</h2>
      </NavLink>

      <NavLink style={{ textDecoration: "none" }} to="/about">
        <h2>About</h2>
      </NavLink>

      <NavLink style={{ textDecoration: "none" }} to="/logo">
        <h2>Logo</h2>
      </NavLink>

      <NavLink style={{ textDecoration: "none" }} to="/contact">
        <h2>Contact</h2>
      </NavLink>
    </div>
  );
};

export default Navbar;
