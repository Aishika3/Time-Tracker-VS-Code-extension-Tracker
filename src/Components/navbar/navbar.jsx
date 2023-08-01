import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./navbar.css";

export const NavbarLinks = ({ className, modalHandler }) => {
  return (
    <div className={className}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "navlink")}
        onClick={modalHandler}
      >
        Home
      </NavLink>
      <NavLink
        to="/list-of-projects"
        className={({ isActive }) => (isActive ? "active" : "navlink")}
        onClick={modalHandler}
      >
        List of Projects
      </NavLink>
      <NavLink
        to="/visual-representation"
        className={({ isActive }) => (isActive ? "active" : "navlink")}
        onClick={modalHandler}
      >
        Visual Respresentation
      </NavLink>
      <NavLink
        to="/log-in"
        className={({ isActive }) => (isActive ? "active" : "navlink")}
        onClick={modalHandler}
      >
        Log In
      </NavLink>
    </div>
  );
};

export const MobileNav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="mobile-nav-wrapper">
      <GiHamburgerMenu onClick={modalHandler} />
      {isModalOpen && (
        <NavbarLinks className="mobile-wrapper" modalHandler={modalHandler} />
      )}
    </div>
  );
};

const Navbar = () => {
  return (
    <div>
      <MobileNav />
      <NavbarLinks className="navbar-wrapper" />
    </div>
  );
};

export default Navbar;
