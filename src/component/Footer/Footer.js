import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => (
  <footer id="footer">
    <div className="container">
      <div className="footer">
        <div className="left_part">
          <p>
            Copyright 2022 — Designed &amp; Developed by
            <Link to="https://themeforest.net/user/frenify/portfolio">
              Frenify
            </Link>
          </p>
        </div>
        <div className="right_part">
          <ul>
            <li>
              <Link className="creative_link" to="/privacy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="creative_link" to="/cookies">
                Cookies
              </Link>
            </li>
            <li>
              <Link className="creative_link" to="/terms-conditions">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
