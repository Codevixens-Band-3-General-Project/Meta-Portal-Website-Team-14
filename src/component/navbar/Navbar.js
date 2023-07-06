import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../images/logo.png";
import "./Navbar.css";
import Button from "../Button/Button";
import Context from "../context/Context";
import { useContext } from "react";

export default function Navbar() {
  const [isShown, setIsShown] = useState(false);
  const { walletConnected, IsConnected } = useContext(Context);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  const ConnectToWallet = (event) => {
    IsConnected(true);
  };

  return (
    <div className="metaportal_fn_main">
      <div className="metaportal_fn_mobnav">
        <div className="mob_top">
          <div className="social_trigger">
            <div className="trigger">
              <span></span>
            </div>
            <div className="social">
              <ul>
                <li>
                  <Link to="https://www.facebook.com/">Fb.</Link>
                </li>
                <li>
                  <Link to="https://www.twitter.com/">Tw.</Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com/">In.</Link>
                </li>
                <li>
                  <Link to="https://www.linkedin.com/" target="_blank">
                    Ln.
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="wallet">
            <Button text="Wallet" handleBtnClick={ConnectToWallet} />
          </div>
        </div>
        <div className="mob_mid">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div
            className={isShown ? "trigger active" : "trigger"}
            onClick={handleClick}
          >
            <span></span>
          </div>
        </div>
        {isShown && (
          <div className="mob_bot">
            <ul>
              <li>
                <Link className="creative_link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="creative_link" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="creative_link" to="/collection">
                  Collection
                </Link>
              </li>
              <li>
                <Link className="creative_link" to="/news">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="creative_link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <header id="header">
        <div className="header">
          <div className="header_in">
            <div className="trigger_logo">
              <div className="trigger">
                <span></span>
              </div>
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>

            <div className="nav">
              <ul>
                <li>
                  <Link className="creative_link" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="creative_link" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="creative_link" to="/Collection">
                    Collection
                  </Link>
                </li>
                <li>
                  <Link className="creative_link" to="/Blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="creative_link" to="/Contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="wallet">
              <Button
                text="Connect To Wallet"
                handleBtnClick={ConnectToWallet}
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
