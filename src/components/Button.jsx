import React from "react";

const Button = ({ text, onClick, className = "btn btn-primary" }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
