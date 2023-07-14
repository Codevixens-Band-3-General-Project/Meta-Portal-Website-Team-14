/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import { Link, useLocation } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import logo from "../../images/logo.png";
import Button from "../button/Button";
import Context from "../context/Context";
import CircleBtn from "../circleButton/CircleButton";
import "./navbar.css";

const Navbar = ({ scrollToSection, homeRef }) => {
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

  const location = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        seteffect(window.pageYOffset > 10),
      );
    }
  }, []);

  const handleScrollToSectionClick = (sectionId) => {
    if (location.pathname !== "/") {
      window.location.href = `/`;
    } else {
      scrollToSection(sectionId);
    }
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
          <ul className="mobile-nav">
            <li
              onClick={() => handleScrollToSectionClick("home")}
              className={
                location.pathname === "/"
                  ? "creative_link active"
                  : "creative_link"
              }>
              Home
            </li>
            <li
              onClick={() => handleScrollToSectionClick("about")}
              className={
                location.pathname === "/"
                  ? "creative_link"
                  : "creative_link active"
              }>
              About
            </li>
            <li
              onClick={() => handleScrollToSectionClick("collection")}
              className={
                location.pathname === "/"
                  ? "creative_link"
                  : "creative_link active"
              }>
              Collection
            </li>
            <li
              onClick={() => handleScrollToSectionClick("blog")}
              className={
                location.pathname === "/"
                  ? "creative_link"
                  : "creative_link active"
              }>
              Blog
            </li>
            <li
              onClick={() => handleScrollToSectionClick("contact")}
              className={
                location.pathname === "/"
                  ? "creative_link"
                  : "creative_link active"
              }>
              Contact
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
                <li
                  onClick={() => handleScrollToSectionClick("home")}
                  className={
                    location.pathname === "/"
                      ? "creative_link active"
                      : "creative_link"
                  }>
                  Home
                </li>
                <li
                  onClick={() => handleScrollToSectionClick("about")}
                  className={
                    location.pathname === "/"
                      ? "creative_link"
                      : "creative_link active"
                  }>
                  About
                </li>
                <li
                  onClick={() => handleScrollToSectionClick("collection")}
                  className={
                    location.pathname === "/"
                      ? "creative_link"
                      : "creative_link active"
                  }>
                  Collection
                </li>
                <li
                  onClick={() => handleScrollToSectionClick("blog")}
                  className={
                    location.pathname === "/"
                      ? "creative_link"
                      : "creative_link active"
                  }>
                  Blog
                </li>
                <li
                  onClick={() => handleScrollToSectionClick("contact")}
                  className={
                    location.pathname === "/"
                      ? "creative_link"
                      : "creative_link active"
                  }>
                  Contact
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
