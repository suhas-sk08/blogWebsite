import "./blogGrid.css";

const posts = [
  {
    title: "Continuous QA",
    subtitle: "Continuous Testing for DevOps Success",
    tag: "DevOps",
    date: "Mar 4, 2024",
    desc: "Understand the role of continuous testing in DevOps pipelines and how it enhances collaboration.",
    author: "Laura Jenkins",
    color: "green",
    img: "https://i.pravatar.cc/100?img=47",
  },
  {
    title: "Zero Defects!",
    subtitle: "Achieving Zero Defects with QA Automation",
    tag: "Innovation",
    date: "Feb 28, 2024",
    desc: "Implement QA automation practices that help minimize bugs and deliver software with zero defects.",
    author: "Priya Sharma",
    color: "purple",
    img: "https://i.pravatar.cc/100?img=15",
  },
  {
    title: "Scale QA Effortlessly",
    subtitle: "Building Scalable Testing Strategies",
    tag: "Productivity",
    date: "Feb 12, 2024",
    desc: "Discover strategies to design scalable QA frameworks that grow with your organization.",
    author: "Mark Thompson",
    color: "blue",
    img: "https://i.pravatar.cc/100?img=12",
  },
  {
    title: "AI Test Scripts",
    subtitle: "Writing Test Scripts with AI Assistance",
    tag: "Innovation",
    date: "Feb 8, 2024",
    desc: "Learn how AI can help you generate and refine test scripts, saving time and reducing errors.",
    author: "Maria Gonzales",
    color: "teal",
    img: "https://i.pravatar.cc/100?img=32",
  },
  {
    title: "Collaborate Better",
    subtitle: "Bridging the Gap: Developers and Testers",
    tag: "Teamwork",
    date: "Feb 1, 2024",
    desc: "Foster collaboration between development and QA teams to enhance software quality.",
    author: "Monica Rivera",
    color: "yellow",
    img: "https://i.pravatar.cc/100?img=29",
  },
  {
    title: "QA Solutions",
    subtitle: "QA Automation: Challenges and Solutions",
    tag: "Education",
    date: "Jan 15, 2024",
    desc: "Overcome common challenges faced during QA automation with proven solutions.",
    author: "Michael Lee",
    color: "mint",
    img: "https://i.pravatar.cc/100?img=56",
  },
];

export default function BlogGrid() {
  return (
    <section className="blog-grid">
        
      {posts.map((post, i) => (
        <div className="blog-card" key={i}>
          <div className={`card-header ${post.color}`}>
            <div>
              <h3>{post.title}</h3>
              <span className="tag">{post.tag}</span>
            </div>
            <img src={post.img} alt={post.author} />
          </div>

          <div className="card-body">
            <p className="date">{post.date}</p>
            <h4>{post.subtitle}</h4>
            <p className="desc">{post.desc}</p>
            <a href="/blog" className="read-more">
              Read more →
            </a>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="pagination">
        <button>Previous</button>
        <span className="active">1</span>
        <span>2</span>
        <button>Next</button>
      </div>
    </section>
  );
}
