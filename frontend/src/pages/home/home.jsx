import React from "react";




import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import "./home.css";
import UpcomingSection from "../../components/trendingSection/trending.jsx";
import BlogGrid from "../../components/blogGrid/blogGrid.jsx";

export default function Home() {
  return (
    <><Header />

            <div className="heroSectionFrame9">
            <div className="communicateCollaborateCreaContainerhome">
                <p className="communicate">Build Better.</p>
                <p className="collaborate">Learn Faster.</p>
                <p className="communicate">Think Deeper.</p>
            </div>

            <div className="empoweringYourBusinessContainerhome">
                <span className="yourBusinessWith">
                A blog about design, development, data, and growth — sharing practical insights, tutorials, and lessons from building in public
                </span>
                <span className="yourBusinessWith">.</span>
            </div>

            </div>
            <div>
      </div>
      <div className="blogs">
        <h2 className="blogs-title">Blogs</h2>
      </div>
      <BlogGrid/>
      <Footer/>
      </>
  );
}