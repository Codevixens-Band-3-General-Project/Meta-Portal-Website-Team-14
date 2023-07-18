/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./sidebarCards.css";

const SidebarCards = ({ text, img, link }) => (
  <div className="item">
    <Link to={link} />
    <span className="icon">
      <img src={img} alt="" />
    </span>
    <span className="text">{text}</span>
  </div>
);

export default SidebarCards;
