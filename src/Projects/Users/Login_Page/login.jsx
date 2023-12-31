import React, { useState } from "react";
import "./login.css";
import { Signup } from "./signup";

export const Login = () => {
  const [showSignup, setShowSignup] = useState(false);

  const handleSignupLinkClick = (event) => {
    event.preventDefault();
    setShowSignup(true);
  };

  return (
    <div className="login-container">
      {showSignup ? (
        <Signup />
      ) : (
        <>
          <div className="header-text">Welcome Back</div>
          <div className="form-container">
            <form>
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
              <button type="submit">Login</button>
            </form>
          </div>
          <div className="footer-text">
            New user?
            <a
              href="/signup"
              onClick={handleSignupLinkClick}
              style={{ marginLeft: "10px" }}
            >
              signup
            </a>
          </div>
        </>
      )}
    </div>
  );
};
