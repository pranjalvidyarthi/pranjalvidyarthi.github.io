import React from "react";

const UnderConstruction = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center themed-section text-dark">
      <h1 className="display-1 mb-3">🚧</h1>
      <h2 className="mb-3">Under Construction</h2>
      <p className="lead">This page is currently under development. Stay tuned!</p>
      <div className="mt-3">
        <a href="/" className="btn btn-dark">
          Go Home
        </a>
      </div>
    </div>
  );
};

export default UnderConstruction;
