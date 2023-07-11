/* eslint-disable react/prop-types */
import React from "react";
import "./Wallet_items.css";
import { Link } from "react-router-dom";

const WalletItems = ({ text, img }) => (
  <div className="item">
    <Link to="/" />
    <span className="icon">
      <img src={img} alt="" />
    </span>
    <span className="text">{text}</span>
  </div>
);

export default WalletItems;
