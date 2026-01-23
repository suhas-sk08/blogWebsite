import React, { useState } from "react";
import "../login/login.css";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";

import { auth } from "../../config/firebase";
import { db } from "../../config/firebase";
import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "",
    author: "",
    excerpt: "",
    content: "",
    image: "",
    tags: "",
    publishDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please login to add a blog");
      navigate("/login");
      return;
    }

    try {
      setLoading(true);

      const blogData = {
        ...formData,
        tags: formData.tags.split(",").map((tag) => tag.trim()),
        authorId: user.uid,
        authorEmail: user.email,
        createdAt: serverTimestamp(),
      };

      const globalRef = await addDoc(collection(db, "blogs"), blogData);

      await addDoc(
        collection(db, "users", user.uid, "blogs"),
        {
          ...blogData,
          blogId: globalRef.id,
        }
      );

      setSuccess("Blog saved successfully!");
      setFormData({
        title: "",
        slug: "",
        category: "",
        author: "",
        excerpt: "",
        content: "",
        image: "",
        tags: "",
        publishDate: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <section className="signin-section">
        <div className="signin-container">
          <div className="signin-wrapper">
            <div className="signin-card">
              <h2 className="form-title">Add New Blog</h2>
              <p className="form-subtitle">
                Enter all details related to your blog post
              </p>

              {success && (
                <p style={{ color: "green", marginBottom: "10px" }}>
                  {success}
                </p>
              )}

              <form onSubmit={handleSubmit}>
                <InputBox label="Blog Title" name="title" value={formData.title} onChange={handleChange} />
                <InputBox label="Slug" name="slug" value={formData.slug} onChange={handleChange} />
                <InputBox label="Category" name="category" value={formData.category} onChange={handleChange} />
                <InputBox label="Author Name" name="author" value={formData.author} onChange={handleChange} />
                <InputBox label="Featured Image URL" name="image" value={formData.image} onChange={handleChange} />
                <InputBox type="date" label="Publish Date" name="publishDate" value={formData.publishDate} onChange={handleChange} />

                <TextAreaBox label="Short Description" name="excerpt" value={formData.excerpt} onChange={handleChange} />
                <TextAreaBox label="Blog Content" name="content" value={formData.content} onChange={handleChange} rows="6" />

                <InputBox label="Tags (comma separated)" name="tags" value={formData.tags} onChange={handleChange} />

                <div className="submit-wrapper">
                  <button type="submit" className="signin-btn" disabled={loading}>
                    {loading ? "Publishing..." : "Publish Blog"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AddBlog;



const InputBox = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
}) => (
  <div className="input-box">
    <label className="input-label">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

const TextAreaBox = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows = 3,
}) => (
  <div className="input-box">
    <label className="input-label">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      className="textarea"
    />
  </div>
);
