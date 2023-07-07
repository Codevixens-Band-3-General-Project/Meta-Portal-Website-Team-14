import "./Sidebar_Cards.css";
import { Link } from "react-router-dom";

export default function Cards({ text, img }) {
  return (
    <div className="item">
      <Link to="/"></Link>
      <span className="icon">
        <img src={img} alt="" />
      </span>
      <span className="text">{text}</span>
    </div>
  );
}
