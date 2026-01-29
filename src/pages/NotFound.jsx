import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center themed-section">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-3">Page Not Found</h2>
      <p className="text-muted mb-4">Sorry, the page you are looking for does not exist!!</p>
      <Link to="/" className="btn btn-dark btn-lg">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
