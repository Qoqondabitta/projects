import React from "react";
import "./style.css";
import { NavLinks } from "./style";
import { Outlet } from "react-router-dom";
import { navbar } from "../../../utils/navbar";

const Navbar = () => {
  const active = (url) => {
    return window.location.pathname.includes(url)
  }
  return (
    <>
      <div className="div">
    {
      navbar.map( (items) => {
        return <NavLinks to={items.path} active={active(items.path)} exact>{items.title}</NavLinks> 
      } )
    }
        {/* <NavLinks className="me" active={active("/")} to="/" exact>
          <h2>Home</h2>
        </NavLinks>

        <NavLinks active={active("/about")} to="/about" exact>
          <h2>About</h2>
        </NavLinks>

        <NavLinks active={active("/logo")} to="/logo" exact>
          <h2>Logo</h2>
        </NavLinks>

        <NavLinks active={active("/contact")} to="/contact" exact>
          <h2>Contact</h2>
        </NavLinks> */}
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Navbar;
