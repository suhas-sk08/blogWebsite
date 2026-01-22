import React from "react";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import "./blog.css";

export default function Blog() {
 

  return (
    <section>
        <Header/>
       <div className="heroSectionFrameFluxweb">
      <div className="communicateCollaborateCreaContainer">
        <p className="communicate">FluxWeb</p>
      </div>

      <div className="empoweringYourBusinessContainer">
        
         <br></br>
          <span>Domain | Hosting | Workspace</span>
      </div>
    </div>
      <div className="theProblemFinedgeContainer1">
    <p className="theProblem">
        <b>The Problem</b>
            </p>
            <p className="blankLine">
            <b>&nbsp;</b>
            </p>
            <p className="finedgeCameTo">{`Small businesses and freelancers often struggled to find an affordable, reliable, and easy-to-use hosting solution that didn’t require technical expertise or complex setup.`}</p><br/>
            </div>
            <div className="theProblemFinedgeContainer1">
                <p className="theProblem">
                    <b>The Diagnosis</b>
            </p>
            <p className="blankLine">
            <b>&nbsp;</b>
            </p>
            <p className="finedgeCameTo">Existing platforms were cluttered, overpriced, and lacked transparency - overwhelming users with confusing options and poor post-purchase support.</p><br/>

            </div>
            <div className="theProblemFinedgeContainer1">
                <p className="theProblem">
                    <b>The Approach by Node8 Innovations</b>
            </p>
            <p className="blankLine">
            <b>&nbsp;</b>
            </p>
            <p className="finedgeCameTo">We built Fluxweb, a user-first domain and hosting platform. The focus: simplicity, automation, and trust. From an intuitive dashboard to one-click 
                domain setup and seamless payment integration, every detail was designed for ease and performance.
            </p><br/>
            </div>
            <div className="theProblemFinedgeContainer1">
                <p className="theProblem">
                    <b>The Outcome</b>
            </p>
            <p className="blankLine">
            </p>
            <div className="node8-approach-container">
                

                <ul className="approach-list">
                    <li>
            70% faster onboarding & domain setup

                    </li>
                    <li>
            50% increase in conversions within 2 months</li>
                    <li>
            99.9% uptime and improved server reliability

            </li>
                    <li>
            Positive user feedback on simplicity and support
            </li>
            <li>
            Secure, centralized data for transparency and accountability       
            </li>
            <li>
            6 Server locations, ensuring services never get down
            </li> 
                </ul>
                </div>
                <div className="theProblemFinedgeContainer1">
                <h2 className="ux-summary-title">TL;DR</h2>
            <p className="finedgeCameTo">In 10 weeks, Node8 Innovations built Fluxweb - a clean, fast, and reliable hosting platform that simplified domain management, increased sign-ups, and boosted user satisfaction.</p><br/>
                <p className="ux-summary-item">
                    <strong>Project:</strong> Fluxweb – Domain & Hosting Platform
                </p>

                <p className="ux-summary-item">
                    <strong>Services:</strong>  Brand Identity, Web Platform Development, Payment Gateway Integration, Dashboard UX</p>

                <p className="ux-summary-item">
                    <strong>Timeline:</strong> 8 weeks
                </p>

                <p className="ux-summary-item">
                    <strong>Impact:</strong> 70% faster domain setup, 50% rise in customer sign-ups, 99.9% uptime achieved
                </p>
                </div>
            </div>
 
   
        
    <Footer/>
    </section>
  );
}

