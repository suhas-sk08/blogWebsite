import "./trending.css";

export default function UpcomingSection() {
  return (
    <section className="upcoming">
      <div className="upcoming-header">
        <h2>Trending Topics</h2>
      </div>

      <div className="cards">
        {/* Card 1 */}
        <div className="card">
          <div className="card-top purple">
            <div>
              <h3>Cost-Efficient QA</h3>
              <span className="tag">Business</span>
            </div>
            <img
              src="https://i.pravatar.cc/100?img=12"
              alt="speaker"
            />
          </div>

          <div className="card-body">
            <p className="date">Mar 23, 2024</p>
            <h4>Reducing QA Costs with Automation</h4>
            <p className="desc">
              Learn how automation can significantly reduce quality assurance
              costs while ensuring high standards.
            </p>
            <button className="btn">
                View
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <div className="card-top green">
            <div>
              <h3>Machine Learning QA</h3>
              <span className="tag">Innovation</span>
            </div>
            <img
              src="https://i.pravatar.cc/100?img=32"
              alt="speaker"
            />
          </div>

          <div className="card-body">
            <p className="date">Mar 23, 2024</p>
            <h4>The Future of QA with Machine Learning</h4>
            <p className="desc">
              Explore how ML is revolutionizing QA with smarter and faster
              testing.
            </p>
            <button className="btn">View</button>
          </div>
        </div>
      </div>
    </section>
  );
}
