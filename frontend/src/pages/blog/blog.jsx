import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import "./blog.css";
import { db } from "../../config/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function Blog() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchBlog = async () => {
    try {
      const q = query(
        collection(db, "blogs"),
        where("slug", "==", slug)
      );

      const snap = await getDocs(q);

      if (!snap.empty) {
        setBlog(snap.docs[0].data());
      }
    } catch (err) {
      console.error("Error fetching blog:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading blog...</p>;
  }

  if (!blog) {
    return <p style={{ textAlign: "center" }}>Blog not found</p>;
  }

  return (
    <>
      <Header />

      {/* Hero */}
      <div className="heroSectionFrameFluxweb">
        <div className="communicateCollaborateCreaContainer">
          <p className="comunicateTitle">{blog.title}</p>
        </div>

        <div className="empoweringYourBusinessContainer">
          <span>{blog.category} | {blog.author}</span>
        </div>
      </div>

      {/* Blog Content */}
      <div className="theProblemFinedgeContainer1">
        <img
          src={blog.image}
          alt={blog.title}
          style={{ width: "100%", borderRadius: "12px", marginBottom: "30px" }}
        />

        <p className="finedgeCameTo">{blog.content}</p>
      </div>

      {blog.excerpt && (
        <div className="theProblemFinedgeContainer1">
          <h2 className="ux-summary-title">Description</h2>
          <p className="finedgeCameTo">{blog.excerpt}</p>

          <p className="ux-summary-item">
            <strong>Author:</strong> {blog.author}
          </p>

          <p className="ux-summary-item">
            <strong>Published:</strong>{" "}
            {new Date(blog.createdAt?.seconds * 1000).toDateString()}
          </p>
        </div>
      )}

      <Footer />
    </>
  );
}
