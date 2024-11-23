import React, { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, email, message };

    try {
      const response = await axios.post(
        "https://wahab07-breast-cancer-app-backend.hf.space/contact",
        formData
      );
      setResponseMessage(response.data.message);
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="container text-center">
      <h1>Contact Us</h1>
      <p>
        If you have any questions, please reach out to us using the form below.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{ marginBottom: "50px" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group" style={{ marginBottom: "50px" }}>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group" style={{ marginBottom: "50px" }}>
          <textarea
            className="form-control"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            style={{ padding: "20px" }}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ backgroundColor: "#6c63ff", borderColor: "#6c63ff" }}
        >
          Submit
        </button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default ContactUs;
