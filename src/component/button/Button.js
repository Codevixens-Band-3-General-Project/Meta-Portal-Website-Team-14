/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import "./button.css";

const Button = ({ text, handleBtnClick, full }) => (
  <button
    className={`metaportal_fn_button ${full}`}
    onClick={handleBtnClick}
    to="/">
    <span>{text}</span>
  </button>
);

export default Button;
