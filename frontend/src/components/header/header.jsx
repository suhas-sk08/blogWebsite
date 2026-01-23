import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";
import { auth } from "../../config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const NavBarFrame = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  // 🔥 Auth listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

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

  // 🔐 Protect Add Blog
  const handleAddBlogClick = (e) => {
    if (!user) {
      e.preventDefault();
      navigate("/login");
    }
    setIsMenuOpen(false);
  };

  // 🚪 Logout
  const handleLogout = async () => {
    await signOut(auth);
    setIsMenuOpen(false);
    navigate("/");
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <NavLink to="/">
          <img src="/vite.svg" alt="logo" className="logo-img-header" />
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
          <NavLink to="/" className="nav-item" onClick={() => setIsMenuOpen(false)}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/add-blog"
            className="nav-item"
            onClick={handleAddBlogClick}
          >
            Add Blog
          </NavLink>
        </li>

        {user && (
          <li>
            <NavLink
              to="/profile"
              className="nav-item"
              onClick={() => setIsMenuOpen(false)}
            >
              Profile
            </NavLink>
          </li>
        )}
      </ul>

      {/* Auth buttons */}
      <ul>
        <li className="auth-buttons">
          {!user ? (
            <>
              <NavLink to="/login" className="login-btn">
                Login
              </NavLink>
              <NavLink to="/signup" className="signup-btn">
                Sign Up
              </NavLink>
            </>
          ) : (
            <button className="logout1-btn1" onClick={handleLogout}>
              Logout
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBarFrame;
