import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import "./login.css";

const Signin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);
      await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      navigate("/profile");
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="signin-section">
      <div className="signin-container">
        <div className="signin-wrapper">
          <div className="signin-card">
            <div className="logo-wrapper">
              <img src="/vite.svg" alt="logo" />
            </div>

            {error && <p className="error">{error}</p>}

            <form onSubmit={handleSubmit}>
              <InputBox
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
              <InputBox
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />

              <div className="submit-wrapper">
                <button type="submit" className="signin-btn" disabled={loading}>
                  {loading ? "Signing in..." : "Sign In"}
                </button>
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

const InputBox = ({ type, placeholder, name, onChange }) => {
  return (
    <div className="input-box">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        required
      />
    </div>
  );
};
