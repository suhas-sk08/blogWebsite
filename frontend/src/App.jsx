import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import ScrollToTop from "./components/scrollTop.js";
import Blog from "./pages/blog/blog.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          
          <Route path="/" element={<Home />}/>
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path="/blog" element={<Blog />}/>
           
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;