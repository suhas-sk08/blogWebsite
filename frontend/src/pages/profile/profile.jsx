import React, { useEffect, useState } from "react";
import "../login/login.css";
import NavBarFrame from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { auth, db } from "../../config/firebase";
import { signOut, deleteUser } from "firebase/auth";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = auth.currentUser;

  const fetchProfile = async () => {
    const userRef = doc(db, "users", user.uid);
    const snap = await getDoc(userRef);
    if (snap.exists()) {
      setUserData(snap.data());
    }
  };

  const fetchBlogs = async () => {
  const snap = await getDocs(
    collection(db, "users", user.uid, "blogs")
  );

  const blogList = snap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  setBlogs(blogList);
};


  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const loadData = async () => {
      await fetchProfile();
      await fetchBlogs();
      setLoading(false);
    };

    loadData();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  const handleDeleteBlog = async (blog) => {
  if (!window.confirm("Delete this blog?")) return;

  try {
    await deleteDoc(doc(db, "blogs", blog.blogId || blog.id));

    await deleteDoc(
      doc(db, "users", user.uid, "blogs", blog.id)
    );

    setBlogs((prev) => prev.filter((b) => b.id !== blog.id));
  } catch (err) {
    alert("Error deleting blog");
  }
};

  const handleDeleteAccount = async () => {
    if (!window.confirm("This will permanently delete your account. Continue?"))
      return;

    try {
      const q = query(
        collection(db, "blogs"),
        where("userId", "==", user.uid)
      );
      const snap = await getDocs(q);
      snap.forEach(async (docu) => {
        await deleteDoc(doc(db, "blogs", docu.id));
      });

      await deleteDoc(doc(db, "users", user.uid));

      await deleteUser(user);

      navigate("/signup");
    } catch (err) {
      alert("Re-login required to delete account");
    }
  };

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <>
      <NavBarFrame />

      <section className="signin-section">
        <div className="signin-container">
          <div className="signin-wrapper">
            <div className="signin-card profile-card">
              <h2 className="form-title">My Profile</h2>
              <p className="form-subtitle">Manage your account & blogs</p>

              <div className="profile-box">
                <p><strong>Name:</strong> {userData?.name}</p>
                <p><strong>Email:</strong> {userData?.email}</p>
                <p><strong>Joined:</strong> {new Date(
                  userData?.createdAt?.seconds * 1000
                ).toDateString()}</p>
              </div>

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
                          <span className="blog-date">
                            {new Date(blog.createdAt?.seconds * 1000).toDateString()}
                          </span>
                        </div>

                       <button
                            className="delete-btn"
                            onClick={() => handleDeleteBlog(blog)}
                          >
                            Delete
                          </button>

                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="profile-actions">
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </div>

              <div className="danger-zone">
                <h4>Danger Zone</h4>
                <p>Once you delete your account, there is no going back.</p>
                <button
                  className="delete-account-btn"
                  onClick={handleDeleteAccount}
                >
                  Delete Account
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Profile;
