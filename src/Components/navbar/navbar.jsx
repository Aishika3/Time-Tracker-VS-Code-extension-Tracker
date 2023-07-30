import React from "react";
// import Home from "../../Projects/Home/home";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const navbar = () => {
  return (
    <div className="navbar-wrapper">
      <NavLink to="/" className="navlink">
        Home
      </NavLink>
      <NavLink to="/list-of-projects" className="navlink">
        List of Projects
      </NavLink>
      <NavLink to="/visual-representation" className="navlink">
        Visual Respresentation
      </NavLink>
      <NavLink to="/log-in" className="navlink">
        Log In
      </NavLink>
    </div>
  );
};

export default navbar;
