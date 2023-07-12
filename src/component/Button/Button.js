/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from "react";
import "./Button.css";

const Button = ({ text, handleBtnClick, full, type }) => {
  const buttonType = type || "button";

  return (
    <button
      type={buttonType}
      className={`metaportal_fn_button ${full}`}
      onClick={handleBtnClick}
      to="/">
      <span>{text}</span>
    </button>
  );
};

export default Button;
