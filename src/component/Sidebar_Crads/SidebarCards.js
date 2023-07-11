import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar_Cards.css";

const SidebarCards = ({ text, img }) => {
  <div className="item">
    <Link to="/" />
    <span className="icon">
      <img src={img} alt="" />
    </span>
    <span className="text">{text}</span>
  </div>;
};

export default SidebarCards;
