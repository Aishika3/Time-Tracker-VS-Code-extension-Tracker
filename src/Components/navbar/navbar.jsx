import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const navbar = () => {
  return (
    <div className="navbar-wrapper">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "navlink")}
      >
        Home
      </NavLink>
      <NavLink
        to="/list-of-projects"
        className={({ isActive }) => (isActive ? "active" : "navlink")}
      >
        List of Projects
      </NavLink>
      <NavLink
        to="/visual-representation"
        className={({ isActive }) => (isActive ? "active" : "navlink")}
      >
        Visual Respresentation
      </NavLink>
      <NavLink
        to="/log-in"
        className={({ isActive }) => (isActive ? "active" : "navlink")}
      >
        Log In
      </NavLink>
    </div>
  );
};

export default navbar;
