import { Link } from "react-router-dom";
import "./Button.css";

export default function Button({ text }) {
  return (
    <Link href="#" className="metaportal_fn_button">
      <span>{text}</span>
    </Link>
  );
}
