import React, { useState } from "react";
import "../login/login.css";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";

const AddBlog = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Blog Data:", formData);
    alert("Blog added (frontend only)!");
  };

  return (<>
    <Header/>
    <section className="signin-section">
      <div className="signin-container">
        <div className="signin-wrapper">
          <div className="signin-card">
            <h2 className="form-title">Add New Blog</h2>
            <p className="form-subtitle">
              Enter all details related to your blog post
            </p>

            <form onSubmit={handleSubmit}>
              <InputBox
                label="Blog Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter blog title"
              />

              <InputBox
                label="Slug"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                placeholder="example-blog-title"
              />

              <InputBox
                label="Category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Technology, AI, Data Science"
              />

              <InputBox
                label="Author Name"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Your name"
              />

              <InputBox
                label="Featured Image URL"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://image-url"
              />

              <InputBox
                label="Publish Date"
                type="date"
                name="publishDate"
                value={formData.publishDate}
                onChange={handleChange}
              />

              <TextAreaBox
                label="Short Description / Excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                placeholder="Short summary of blog"
              />

              <TextAreaBox
                label="Blog Content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Write your full blog content here..."
                rows="6"
              />

              <InputBox
                label="Tags (comma separated)"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="react, javascript, web"
              />

              <div className="submit-wrapper">
                <button type="submit" className="signin-btn">
                  Publish Blog
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
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
