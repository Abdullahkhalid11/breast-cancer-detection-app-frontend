import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text">{course.description}</p>
        <p className="card-text">
          <strong>Price:</strong> ${course.price}
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
