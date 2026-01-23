import { useEffect, useState } from "react";
import "./blogGrid.css";
import {
  collection,
  getDocs,
  orderBy,
  query
} from "firebase/firestore";
import { db } from "../../config/firebase";
import { Link } from "react-router-dom";

export default function BlogGrid() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const q = query(
        collection(db, "blogs"),
        orderBy("createdAt", "desc")
      );

      const snap = await getDocs(q);

      const blogs = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setPosts(blogs);
    } catch (err) {
      console.error("Error fetching blogs", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading blogs...</p>;
  }

  return (
    <section className="blog-grid">
      {posts.map((post) => (
        <div className="blog-card" key={post.id}>
          <div className={`card-header ${post.color || "green"}`}>
            <div>
              <h3>{post.title}</h3>
              <span className="tag">{post.category}</span>
            </div>
            <img
              src={post.authorImage || "https://i.pravatar.cc/100"}
              alt={post.author}
            />
          </div>

          <div className="card-body">
            <p className="date">
              {new Date(post.createdAt?.seconds * 1000).toDateString()}
            </p>

            <h4>{post.subtitle || post.title}</h4>

            <p className="desc">
              {post.excerpt}
            </p>

            <Link to={`/blog/${post.slug}`} className="read-more">
              Read more →
            </Link>
          </div>
        </div>
      ))}

      {/* Pagination (future ready) */}
      <div className="pagination">
        <button disabled>Previous</button>
        <span className="active">1</span>
        <button disabled>Next</button>
      </div>
    </section>
  );
}
