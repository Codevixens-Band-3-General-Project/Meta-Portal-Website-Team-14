/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import "./pageTitle.css";

const PageTitle = ({ title, id }) => (
  <div className="metaportal_fn_pagetitle" id={id}>
    <div className="container small">
      <div className="pagetitle">
        <h3 className="fn__maintitle big">{title}</h3>
        <p>
          <Link to="/">Home</Link>
          <span className="divider">/</span>
          <span className="text">{title}</span>
        </p>
      </div>
    </div>
  </div>
);

export default PageTitle;
