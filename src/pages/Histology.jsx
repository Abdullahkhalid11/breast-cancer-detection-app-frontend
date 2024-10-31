import React, { useState } from "react";
import axios from "axios";
import "./styles/CourseDetails.css"; // Custom styling for the details page

const Histology = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/predict_histology",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <section className="course-details">
      <div className="container">
        <h1>MammoGuard - Upload Histopathological Image</h1>
        <p>Upload your Histopathological Image to get a prediction.</p>
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFileChange} />
          <button
            type="submit"
            className="btn btn-primary"
            style={{ backgroundColor: "#6c63ff", borderColor: "#6c63ff" }}
          >
            Upload
          </button>
        </form>
        {prediction && (
          <div className="prediction-result">
            <h2>Prediction Result:</h2>
            <p>{prediction}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Histology;
