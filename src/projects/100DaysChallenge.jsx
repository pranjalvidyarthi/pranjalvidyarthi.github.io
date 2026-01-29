import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const series = [
  {
    id: 1,
    title: "100 Days 100 HTML Designs",
    description: "Daily coding challenges & mini projects",
    link: "/series/html_1_series",
    badge: "UPDATED"
  },

];

const DaysChallenge = () => {
  return (
    <section className="py-5 themed-section">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">100 Days Coding Project Series</h2>

        <div className="row">
          {series.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold d-flex align-items-center gap-2">
                    {item.title}

                    {item.badge && (
                      <span className="new-badge">{item.badge}</span>
                    )}
                  </h5>
                  <p className="card-text text-muted">{item.description}</p>

                  <Link to={item.link} className="btn btn-dark">
                    View Series →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DaysChallenge
