import React from "react";
import { Link } from "react-router-dom";
import "./styles/Services.css";
import histImage from "../assets/histopathology1.png";
import mammogram from "../assets/mammogram.jpeg";
import UltraSoundimg from "../assets/ultrasound.jpeg"; // Custom styling for the cards

const Courses = () => {
  return (
    <section className="courses-section">
      <div className="container text-center">
        <div className="heading" style={{ "padding-bottom": "50px" }}>
          <h1>Our Services</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card course-card">
              <img
                src={histImage}
                className="card-img-top"
                alt="Histology image"
              />
              <div className="card-body">
                <h5 className="card-title">Histolpathological images</h5>
                <p className="card-text">
                  Predict Breast Cancer using histolpathological images.
                </p>
                <Link
                  to="/services/histolpathology"
                  className="btn btn-primary"
                  style={{ backgroundColor: "#6c63ff", borderColor: "#6c63ff" }}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Data Analytics Card */}
          <div className="col-md-4">
            <div className="card course-card">
              <img
                src={mammogram}
                className="card-img-top"
                alt="Mamography image"
              />
              <div className="card-body">
                <h5 className="card-title">Mammograms</h5>
                <p className="card-text">
                  Predict Breast Cancer using Mammograms.
                </p>
                <Link
                  to="/services/mammography"
                  className="btn btn-primary"
                  style={{ backgroundColor: "#6c63ff", borderColor: "#6c63ff" }}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card course-card">
              <img
                src={UltraSoundimg}
                className="card-img-top"
                alt="Mamography image"
              />
              <div className="card-body">
                <h5 className="card-title">Sonograph</h5>
                <p className="card-text">
                  Predict Breast Cancer using Sonograph (Ultrasound images).
                </p>
                <Link
                  to="/services/ultrasound"
                  className="btn btn-primary"
                  style={{ backgroundColor: "#6c63ff", borderColor: "#6c63ff" }}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
