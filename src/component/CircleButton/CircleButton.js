/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from "react";
import "./CircleButton.css";

const CircleButton = ({ clickHandler, active }) => (
  <div className={`trigger${active ? " active" : ""}`} onClick={clickHandler}>
    <span />
  </div>
);

export default CircleButton;
