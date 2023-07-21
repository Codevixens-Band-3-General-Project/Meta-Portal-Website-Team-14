/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import "./circleButton.css";

const CircleBtn = ({ clickHandler, active }) => (
  <div className={`trigger${active ? " active" : ""}`} onClick={clickHandler}>
    <span />
  </div>
);

export default CircleBtn;
