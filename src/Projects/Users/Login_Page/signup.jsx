import React, { useState } from "react";
import "./login.css";
import { Login } from "./login.jsx";

export const Signup = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginLinkClick = (event) => {
    event.preventDefault();
    setShowLogin(true);
  };

  return (
    <div className="login-container">
      {showLogin ? (
        <Login />
      ) : (
        <>
          <div className="header-text">Create an account</div>
          <div className="form-container">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              <button type="submit">Sign Up</button>
            </form>
          </div>
          <div className="footer-text">
            Already an user?
            <a
              href="/login"
              onClick={handleLoginLinkClick}
              style={{ marginLeft: "10px" }}
            >
              login
            </a>
          </div>
        </>
      )}
    </div>
  );
};
