import React from "react";
import { Link } from "react-router-dom";
import "./signup.css";

const SignUp = () => {
  return (
    <section className="signin-section">
      <div className="signin-container">
        <div className="signin-wrapper">
          <div className="signin-card">
            <div className="logo-wrapper">
              <img src="/vite.svg" alt="logo" />
            </div>

            <h2 className="form-title">Create Account</h2>
            <p className="form-subtitle">
              Sign up to get started with your account
            </p>

            <form>
              <InputBox type="text" name="name" placeholder="Full Name" />
              <InputBox type="email" name="email" placeholder="Email Address" />
              <InputBox type="password" name="password" placeholder="Password" />
              <InputBox
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
              />

              <div className="submit-wrapper">
                <input type="submit" value="Sign Up" className="signin-btn" />
              </div>
            </form>

            <p className="signup-text">
              Already have an account?{" "}
              <Link to="/login" className="signin-link">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

const InputBox = ({ type, placeholder, name }) => {
  return (
    <div className="input-box">
      <input type={type} placeholder={placeholder} name={name} />
    </div>
  );
};
