import React from "react";
// import Home from "../../Projects/Home/home";
import { NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <div className="navbar-wrapper">
      <NavLink to="/"> Home</NavLink>
      <NavLink to="/list-of-projects"> List of Projects </NavLink>
      <NavLink to="/visual-representation"> Visual Respresentation </NavLink>
      <NavLink to="/log-in"> Log In</NavLink>
    </div>
  );
};

export default navbar;
