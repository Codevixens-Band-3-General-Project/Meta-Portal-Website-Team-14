import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="left_part">
            <p>
              Copyright 2022 — Designed &amp; Developed by
              <Link
                to="https://themeforest.net/user/frenify/portfolio"
                onClick={scrollToTop}>
                Frenify
              </Link>
            </p>
          </div>
          <div className="right_part">
            <ul>
              <li>
                <Link
                  className="creative_link"
                  to="/privacy"
                  onClick={scrollToTop}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="creative_link"
                  to="/cookies"
                  onClick={scrollToTop}>
                  Cookies
                </Link>
              </li>
              <li>
                <Link
                  className="creative_link"
                  to="/terms-conditions"
                  onClick={scrollToTop}>
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
