import { Link } from "react-router-dom";
import "./Button.css";

export default function Button({ text, handleBtnClick }) {
  return (
    <Link className="metaportal_fn_button" onClick={handleBtnClick} to="/">
      <span>{text}</span>
    </Link>
  );
}
