import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../login/login.css";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth, db } from "../../config/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      setLoading(true);

      const q = query(
        collection(db, "users"),
        where("email", "==", email)
      );
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setError("No account found with this email");
        setLoading(false);
        return;
      }

      await sendPasswordResetEmail(auth, email);

      setSuccess("Password reset link sent to your email!");
      navigate("/login"); 
    } catch (err) {
      setError("Something went wrong. Please try again.");
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

            <h2 className="form-title">Forgot Password</h2>
            <p className="form-subtitle">
              Enter your email and we’ll send you a reset link
            </p>

            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}

            <form onSubmit={handleSubmit}>
              <InputBox
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className="submit-wrapper">
                <button type="submit" className="signin-btn" disabled={loading}>
                  {loading ? "Sending..." : "Send Reset Link"}
                </button>
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

const InputBox = ({ type, placeholder, name, value, onChange }) => {
  return (
    <div className="input-box">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};
