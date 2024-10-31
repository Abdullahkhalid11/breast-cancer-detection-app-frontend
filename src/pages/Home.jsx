import React from "react";
import "./styles/Home.css";
import { Link } from "react-router-dom"; // Keep the same CSS for styling

const Home = () => {
  return (
    <section className="hero">
      <div className="container text-center">
        <h1 className="display-4">
          <span className="highlight">Mammo</span>Guard
        </h1>
        <p className="lead">Early Detection, Lifesaving Results.</p>
        <p className="lead">
          Harnessing Advanced AI for Breast Cancer Detection.
        </p>
        <Link
          to="/services"
          className="btn btn-primary btn-lg enroll-button"
          style={{ backgroundColor: "#6c63ff" }}
        >
          Evaluate Now
        </Link>
      </div>
    </section>
  );
};

export default Home;
