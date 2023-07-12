/* eslint-disable no-shadow */
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import logo from "../../images/logo.png";
import Button from "../Button/Button";
import Context from "../context/Context";
import CircleBtn from "../CircleButton/CircleButton";
import "./Navbar.css";

const Navbar = () => {
  const [isShown, setIsShown] = useState(false);
  const { IsConnected } = useContext(Context);
  const { leftSidebar, IsOpen } = useContext(Context);
  const [effect, seteffect] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        seteffect(window.pageYOffset > 10),
      );
    }
  }, []);

  const handleClick = () => {
    setIsShown((current) => !current);
  };

  const ConnectToWallet = () => {
    IsConnected(true);
  };

  const OpenSidebar = () => {
    IsOpen((leftSidebar) => !leftSidebar);
  };

  return (
    <>
      <div className="metaportal_fn_mobnav">
        <div className="mob_top">
          <div className="social_trigger">
            <CircleBtn clickHandler={OpenSidebar} active={leftSidebar} />
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
                  <Link to="https://www.linkedin.com/">Ln.</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="wallet">
            <Button text="Wallet" handleBtnClick={ConnectToWallet} full="" />
          </div>
        </div>
        <div className="mob_mid">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <CircleBtn clickHandler={handleClick} active={isShown} />
        </div>
        <div className={isShown ? "mob_bot active" : "mob_bot"}>
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
      </div>
      <header id="header">
        <div className={`header ${effect ? "active" : ""}`}>
          <div className="header_in">
            <div className="trigger_logo">
              <CircleBtn clickHandler={OpenSidebar} active={leftSidebar} />
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
    </>
  );
};

export default Navbar;
