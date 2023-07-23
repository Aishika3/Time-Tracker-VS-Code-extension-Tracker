import React from "react";
import "./login.css";

const Signup = () => {
  return (
    <div className="login-container">
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
        <a style={{ marginLeft: "10px" }}>
          {" "}
          {/* Add related route to redirect to login page by adding href*/}
          login
        </a>
      </div>
    </div>
  );
};

const Login = () => {
  return (
    <div className="login-container">
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
        <a style={{ marginLeft: "10px" }}>
          {" "}
          {/* Add related route to redirect to signup page by adding href*/}
          signup
        </a>
      </div>
    </div>
  );
};

export { Login, Signup };
