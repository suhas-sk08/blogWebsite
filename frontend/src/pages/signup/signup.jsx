import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import "./signup.css";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setLoading(true);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        name: formData.name,
        email: formData.email,
        uid: user.uid,
        createdAt: serverTimestamp(),
      });

      navigate("/profile");
    } catch (err) {
      setError(err.message);
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

            <h2 className="form-title">Create Account</h2>
            <p className="form-subtitle">
              Sign up to get started with your account
            </p>

            {error && <p className="error">{error}</p>}

            <form onSubmit={handleSubmit}>
              <InputBox
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
              />

              <InputBox
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
              />

              <InputBox
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />

              <InputBox
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
              />

              <div className="submit-wrapper">
                <button type="submit" className="signin-btn" disabled={loading}>
                  {loading ? "Creating..." : "Sign Up"}
                </button>
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
