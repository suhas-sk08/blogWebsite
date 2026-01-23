import React from "react";
import { Link } from "react-router-dom";
import "../login/login.css";

const ForgotPassword = () => {
  return (
    <section className="signin-section">
      <div className="signin-container">
        <div className="signin-wrapper">
          <div className="signin-card">
            <div className="logo-wrapper">
              <img src="/vite.svg" alt="logo" />
            </div>

            <h2 className="form-title">Forgot Password</h2>
            <p className="form-subtitle">
              Enter your email and we’ll send you a reset link
            </p>

            <form>
              <InputBox
                type="email"
                name="email"
                placeholder="Enter your email address"
              />

              <div className="submit-wrapper">
                <input
                  type="submit"
                  value="Send Reset Link"
                  className="signin-btn"
                />
              </div>
            </form>

            <p className="signup-text">
              Remember your password?{" "}
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

export default ForgotPassword;

const InputBox = ({ type, placeholder, name }) => {
  return (
    <div className="input-box">
      <input type={type} placeholder={placeholder} name={name} />
    </div>
  );
};
