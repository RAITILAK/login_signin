import React from "react";
import "./styles.css";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div>
      {/* <h1 className="quote">
        A community of proffesionals coliving & coworking under one roof!
      </h1> */}

      <div className="container1">
        <p className="signuplogin">Login</p>
        <form>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
            <FaUser className="icon1" />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
            <FaLock className="icon2" />
          </div>
          <button type="submit" className="btn btn-primary1">
            Log In
          </button>
          <p className="navigation">
            Don't have an account?{" "}
            <a href="./signup" className="anchor">
              SignUp
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
