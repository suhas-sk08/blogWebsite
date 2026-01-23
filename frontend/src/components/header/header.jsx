import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";

const NavBarFrame = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <NavLink to="/">
          <img
            src="/vite.svg"
            alt="logo"
            className="logo-img-header"
          />
        </NavLink>
      </div>

      {/* Hamburger */}
      <div
        className="menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Navigation */}
      <ul ref={menuRef} className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <NavLink
            to="/"
            className="nav-item"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/add-blog"
            className="nav-item"
            onClick={() => setIsMenuOpen(false)}
          >
           Add Blogs
          </NavLink>
        </li>
        
         <li>
          <NavLink
            to="/profile"
            className="nav-item"
            onClick={() => setIsMenuOpen(false)}
          >
           Profile
          </NavLink>
        </li>

       
      </ul>
      <ul>
         <li className="auth-buttons">
          <NavLink
            to="/login"
            className="login-btn"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </NavLink>

          <NavLink
            to="/signup"
            className="signup-btn"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarFrame;
