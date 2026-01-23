import React from "react";
import "./login.css";

const Signin = () => {
  return (
    <section className="signin-section">
      <div className="signin-container">
        <div className="signin-wrapper">
          <div className="signin-card">
            <div className="logo-wrapper">
              <img
                src="/vite.svg"
                alt="logo"
              />
            </div>

            <form>
              <InputBox type="email" name="email" placeholder="Email" />
              <InputBox type="password" name="password" placeholder="Password" />

              <div className="submit-wrapper">
                <input type="submit" value="Sign In" className="signin-btn" />
              </div>
            </form>

           

            <a href="/forgot-password" className="forgot-link">
              Forget Password?
            </a>

            <p className="signup-text">
              Not a member yet? <a href="/signup">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;

const InputBox = ({ type, placeholder, name }) => {
  return (
    <div className="input-box">
      <input type={type} placeholder={placeholder} name={name} />
    </div>
  );
};
