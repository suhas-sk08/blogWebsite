import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSelector } from "react-redux";

const loginSchema = yup.object({
  email: yup.string().required("Email is Required").email("Email should be valid"),
  password: yup.string().required("Password is Required"),
});

const Login = () => {
  const authState = useSelector((state) => state.auth || {});
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
       
        navigate("/"); 
      } catch (error) {
        setError("Failed to log in. Please check your credentials.");
      }
    },
  });

  useEffect(() => {
    
      navigate("/");
    
  }, [authState, navigate]);

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Login to account</h2>
        <p className="login-subtitle">
          Access the most powerful tool in the entire design and web industry.
        </p>
        <form onSubmit={formik.handleSubmit} className="login-form">
          <input
            type="email"
            name="email"
            placeholder="E-mail Address"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="input-field"
          />
          <div className="error">
            {formik.touched.email && formik.errors.email}
          </div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="input-field"
          />
          <div className="error">
            {formik.touched.password && formik.errors.password}
          </div>
          {error && <div className="error">{error}</div>}
          <div className="options">
            <Link to="/forgot-password" className="forgot-password">
              Forgot password?
            </Link>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          <Link to="/signup" className="signup-link">
            Register new account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;