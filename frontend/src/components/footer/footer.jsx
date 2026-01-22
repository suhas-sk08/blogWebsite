import React from "react";
import "./footer.css";

const Footer = ({ label = "Get In Touch", link = "#contact" }) => {
    const handleJump = () => {
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <footer className="footer">
      <div className="footer-left">
        <a href="/" className="footer-logo">
          
          <img
            src="/vite.svg"
            alt="Logo"
            className=""
          />
        </a>

        <h3 className="footer-heading">Ready to Publish What’s Next?</h3>
        <p className="footer-desc">
         Writing about design, development, and growth — ideas that help you build better products and better thinking.
        </p>
       
      </div>

        

       


      <div className="footer-bottom">
  <div className="footer-bottom-left">
    <p>
      © 2025 Bloggers. Built in Bangalore. Wired for the world.
      <br />
      <a href="/privacy-policy" className="footer-links">Privacy Policy </a> | 
      <a href="/terms" className="footer-links"> Terms</a>
    </p>
  </div>

 
</div>

    </footer>
  );
};

export default Footer;
