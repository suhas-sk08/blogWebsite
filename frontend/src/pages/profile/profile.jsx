import React from "react";
import "../login/login.css";
import NavBarFrame from "../../components/header/header";
import Footer from "../../components/footer/footer";

const Profile = () => {
  // dummy data (frontend only)
  const user = {
    name: "Suhas S",
    email: "suhas@email.com",
    joined: "Jan 2026",
  };

  const blogs = [
    { id: 1, title: "Getting Started with React", date: "10 Jan 2026" },
    { id: 2, title: "Understanding JavaScript Closures", date: "12 Jan 2026" },
    { id: 3, title: "How to Build a Blog Website", date: "15 Jan 2026" },
  ];

  return (
    <>
    <NavBarFrame/>
    
    <section className="signin-section">
      <div className="signin-container">
        <div className="signin-wrapper">
          <div className="signin-card profile-card">

            <h2 className="form-title">My Profile</h2>
            <p className="form-subtitle">Manage your account & blogs</p>

            {/* User Info */}
            <div className="profile-box">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Joined:</strong> {user.joined}</p>
            </div>

            {/* My Blogs */}
            <div className="profile-section">
              <h3>My Blogs</h3>

              {blogs.length === 0 ? (
                <p className="empty-text">No blogs posted yet.</p>
              ) : (
                <ul className="blog-list">
                  {blogs.map((blog) => (
                    <li key={blog.id} className="blog-item">
                      <div>
                        <p className="blog-title">{blog.title}</p>
                        <span className="blog-date">{blog.date}</span>
                      </div>

                      <button className="delete-btn">Delete</button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Actions */}
            <div className="profile-actions">
              <button className="logout-btn">Logout</button>
            </div>

            {/* Delete Account */}
            <div className="danger-zone">
              <h4>Danger Zone</h4>
              <p>Once you delete your account, there is no going back.</p>
              <button className="delete-account-btn">Delete Account</button>
            </div>

          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Profile;
