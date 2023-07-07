import { Link } from "react-router-dom";
import "./Button.css";

export default function Button({ text, handleBtnClick, full }) {
  return (
    <Link
      className={`metaportal_fn_button ${full}`}
      onClick={handleBtnClick}
      to="/"
    >
      <span>{text}</span>
    </Link>
  );
}
