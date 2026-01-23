import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import ScrollToTop from "./components/scrollTop.js";
import Blog from "./pages/blog/blog.jsx";
import Login from "./pages/login/login.jsx";
import SignUp from "./pages/signup/signup.jsx";
import ForgotPassword from "./pages/forgot-password/forgotPassword.jsx";
import AddBlog from "./pages/addBlogs/addBlog.jsx";
import Profile from "./pages/profile/profile.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          
          <Route path="/" element={<Home />}/>
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path="/blog" element={<Blog />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/forgot-password" element={<ForgotPassword />}/>
          <Route path="/add-blog" element={<AddBlog />}/>
          <Route path="/profile" element={<Profile />}/>

           
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;