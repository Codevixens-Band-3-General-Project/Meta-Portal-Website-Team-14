/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchDropdown from "../component/searchBox/SearchDropdown";

const LandingPage = ({
  aboutSection,
  blogSection,
  collectionSection,
  contactSection,
  carousel,
}) => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [showSearchButton, setShowSearchButton] = useState(false);
  const [showSideLinks, setShowSideLinks] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleCloseDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 300; // Adjust this value as needed

      clearTimeout(scrollTimeout);

      if (window.scrollY > scrollThreshold) {
        setShowSearchButton(true);
        setShowSideLinks(true);
      } else {
        setShowSearchButton(false);
        setShowSideLinks(false);
      }

      setScrollTimeout(() =>
        setTimeout(() => {
          setShowSideLinks(false);
          setShowSearchButton(false);
        }, 10000),
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [scrollTimeout]);

  const handleScroll = () => {
    const scrollThreshold = 200; // Adjust this value as needed

    if (window.scrollY > scrollThreshold) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showDropdown ? (
        <SearchDropdown closeDropdown={handleCloseDropdown} />
      ) : null}
      {carousel}
      {collectionSection}
      {aboutSection}
      {blogSection}
      {contactSection}

      {/* <!-- Social --> */}
      <SocialSideLinkStyle showSideLinks={showSideLinks}>
        <div id="sideSocials" className="hold">
          <div className="social">
            <h4 className="title">Follow Us:</h4>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer">
                  Fb.
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noreferrer">
                  Tw.
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer">
                  In.
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer">
                  Ln.
                </a>
              </li>
            </ul>
          </div>
        </div>
      </SocialSideLinkStyle>
      {/* <!-- Social --> */}

      {/* <!-- Totop --> */}
      <ScrollToTopStyle
        showScrollButton={showScrollButton}
        onClick={scrollToTop}>
        <button type="button" className="metaportal_fn_totop">
          <span className="totop_inner">
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.0"
                width="512.000000pt"
                height="512.000000pt"
                viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet"
                className="fn__svg replaced-svg">
                <g
                  transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                  stroke="none">
                  <path d="M352 3837 l-352 -352 1280 -1280 1280 -1280 1280 1280 1280 1280 -352 352 -353 353 -927 -927 -928 -928 -928 928 -927 927 -353 -353z" />
                </g>
              </svg>
            </span>
            <span className="text">Scroll To Top</span>
          </span>
        </button>
      </ScrollToTopStyle>
      {/* <!-- Totop --> */}

      {/* <!-- Search --> */}
      <SearchButtonStyle showSearchButton={showSearchButton}>
        <button
          type="button"
          className="sideSearch"
          onClick={() => {
            setShowDropdown(true);
          }}>
          <span className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              width="512.000000pt"
              height="512.000000pt"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
              className="fn__svg replaced-svg">
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                stroke="none">
                <path d="M2075 5113 c-437 -38 -840 -195 -1200 -466 -103 -78 -324 -299 -402 -402 -406 -538 -555 -1178 -427 -1825 128 -644 551 -1218 1131 -1532 783 -426 1728 -355 2438 181 l80 61 545 -543 c300 -299 558 -551 573 -561 43 -26 119 -32 171 -12 53 20 109 78 126 131 15 46 7 124 -16 162 -10 15 -262 273 -561 573 l-543 545 61 80 c852 1129 472 2742 -796 3378 -352 177 -798 264 -1180 230z m432 -429 c913 -133 1583 -903 1583 -1819 0 -1014 -821 -1835 -1835 -1835 -695 0 -1322 386 -1639 1010 -227 446 -260 972 -89 1445 138 384 411 723 751 934 159 99 356 184 522 227 207 53 499 69 707 38z" />
              </g>
            </svg>
          </span>
        </button>
      </SearchButtonStyle>
      {/* <!-- Search --> */}
    </>
  );
};

const SocialSideLinkStyle = styled.div`
  #sideSocials {
    z-index: 5;
    position: fixed;
    left: 50px;
    top: 50%;
    transition: 0.5s;
  }
  #sideSocials .social {
    transform: translateX(-50%) translateY(-50%) rotate(-90deg);
    display: flex;
    position: absolute;
    width: max-content;
    align-items: center;
  }
  .social .title {
    margin: 0 10px 0 0;
    padding: 0;
    line-height: 50px;
  }

  h4 {
    color: var(--hc);
    font-family: var(--hff);
    line-height: 1.22;
    letter-spacing: 0;
  }
  h4 {
    font-size: 24px;
  }

  h4 {
    font-weight: 400;
    margin-bottom: 20px;
  }
  .social ul {
    margin: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
  }
  .social li {
    margin: 0;
  }

  .social a,
  .social li {
    font-family: var(--hff);
    font-size: 18px;
    letter-spacing: 0;
    text-decoration: none;
    font-weight: 500;
    color: var(--hc);
  }
  @media (max-width: 1200px) {
    #sideSocials {
      display: none;
    }
  }
  #sideSocials {
    transition: 0.5s;
    transform: translateX(
      ${({ showSideLinks }) => (showSideLinks ? "0" : "-200px")}
    );
    opacity: ${({ showSideLinks }) => (showSideLinks ? "1" : "0")};
    visibility: ${({ showSideLinks }) =>
      showSideLinks ? "visible" : "hidden"};
  }
`;

const SearchButtonStyle = styled.div`
  .sideSearch {
    display: block;
    width: 50px;
    border-radius: 100%;
    position: fixed;
    z-index: 5;
    bottom: 30px;
    left: 30px;
    color: #bbb;
    transition: 0.5s;
  }

  .sideSearch {
    height: 50px;
    background-color: #000;
  }
  @media (max-width: 1040px) {
    .sideSearch {
      right: 30px;
      left: auto;
      bottom: 30px;
    }
  }

  @media (max-width: 768px) {
    .sideSearch {
      right: 30px;
      bottom: 20px;
    }
  }

  @media (max-width: 1040px) {
    .sideSearch {
      bottom: 170px;
    }
  }

  .sideSearch .fn__svg {
    position: absolute;
    display: block;
    z-index: 3;
    width: 20px;
    height: 20px;
    left: 50%;
    top: 50%;
    margin: -10px 0 0 -10px;
  }

  .fn__svg {
    fill: currentcolor;
    width: 18px;
    height: 18px;
    opacity: 0;
  }
  .replaced-svg {
    opacity: 1;
  }

  .sideSearch:after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    color: var(--mc1);
    top: 0;
    left: 0;
    opacity: 0.15;
    border-radius: 100%;
    box-shadow: 0 5px 20px;
    transition: 0.3s;
  }
  .sideSearch {
    transition: 0.5s;
    transform: translateX(
      ${({ showSearchButton }) => (showSearchButton ? "0" : "-200px")}
    );
    opacity: ${({ showSearchButton }) => (showSearchButton ? "1" : "0")};
    visibility: ${({ showSearchButton }) =>
      showSearchButton ? "visible" : "hidden"};
  }
  @media (max-width: 1040px) {
    .sideSearch {
      transform: translateX(
        ${({ showSearchButton }) => (showSearchButton ? "0" : "200px")}
      );
    }
  }
`;

const ScrollToTopStyle = styled.div`
  .metaportal_fn_totop {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
  }
  .fn__svg {
    fill: currentcolor;
    width: 18px;
    height: 18px;
    opacity: 0;
  }
  .metaportal_fn_totop {
    display: block;
    margin: 0;
    padding: 0;
    position: fixed;
    z-index: 5;
    right: 30px;
    bottom: 120px;
    width: 50px;
    color: #bbb;
    transition: 0.5s;
  }
  .metaportal_fn_totop {
    font-size: 18px;
    letter-spacing: 0;
    font-weight: 500;
    font-family: var(--hff);
    text-decoration: none;
  }
  .metaportal_fn_totop .totop_inner {
    transform: translateX(-50%) translateY(-50%) rotate(-90deg);
    display: flex;
    top: 50%;
    left: 50%;
    position: absolute;
    width: max-content;
    align-items: center;
  }
  .metaportal_fn_totop .icon {
    display: block;
    width: 50px;
    border-radius: 100%;
    position: relative;
    margin-right: 30px;
  }
  .metaportal_fn_totop .icon {
    height: 50px;
    background-color: #000;
  }
  .metaportal_fn_totop .fn__svg {
    position: absolute;
    display: block;
    z-index: 3;
    width: 20px;
    height: 20px;
    left: 50%;
    top: 50%;
    margin: -10px 0 0 -10px;
    transform: rotate(-90deg);
  }
  .replaced-svg {
    opacity: 1;
  }
  .metaportal_fn_totop .icon:after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    color: var(--mc1);
    opacity: 0.15;
    border-radius: 100%;
    box-shadow: 0 5px 20px;
    -moz-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    transition: 0.3s;
  }
  .metaportal_fn_totop {
    transition: 0.5s;
    transform: translateX(
      ${({ showScrollButton }) => (showScrollButton ? "0" : "100px")}
    );
    opacity: ${({ showScrollButton }) => (showScrollButton ? "1" : "0")};
    visibility: ${({ showScrollButton }) =>
      showScrollButton ? "visible" : "hidden"};
  }
  @media (max-width: 1200px) {
    .metaportal_fn_totop .text {
      display: none;
    }
  }
  @media (max-width: 1200px) {
    .metaportal_fn_totop .icon {
      margin-right: 0;
    }
  }
`;

export default LandingPage;
