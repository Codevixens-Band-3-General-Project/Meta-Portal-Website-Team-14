import Sidebar from "../Sidebar/Sidebar";
import Context from "../context/Context";
import { useContext, useState } from "react";
import OPENSEA from "../../images/opensea.png";
import DISCORD from "../../images/discord.png";
import "./LeftSidebar.css";
import Cards from "../Sidebar_Crads/Sidebar_Cards";
import { Link } from "react-router-dom";

export default function LeftSidebar() {
  const { leftSidebar, IsOpen } = useContext(Context);
  let [home, transformHome] = useState(false);
  let [pages, transformPages] = useState(false);
  let [more, transformMore] = useState(true);

  const handleClick = (event) => {
    IsOpen(false);
  };

  const transform0 = {
    transform: "translateX(0%)",
  };
  const transform100 = {
    transform: "translateX(-100%)",
  };
  const transform200 = {
    transform: "translateX(-200%)",
  };

  const data = [
    {
      name: "OPENSEA",
      img: OPENSEA,
    },
    {
      name: "DISCORD",
      img: DISCORD,
    },
  ];

  const sidebarItems = data.map((element) => {
    return (
      <li key={element.name}>
        <Cards text={element.name} img={element.img} />
      </li>
    );
  });

  const homeClicked = (event) => {
    transformHome((home) => !home);
  };

  const pagesClicked = (event) => {
    transformPages((pages) => !pages);
  };
  const moreClicked = (event) => {
    transformMore((more) => !more);
  };

  return (
    <Sidebar
      clickHandler={handleClick}
      active={leftSidebar}
      _closer="metaportal_fn_leftnav_closer"
      _className="metaportal_fn_leftnav"
      content={
        <div className="navbox">
          <div className="list_holder">
            <ul className="metaportal_fn_items">{sidebarItems}</ul>
          </div>
          <div className="nav_holder">
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.0"
                width="512.000000pt"
                height="512.000000pt"
                viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet"
                className="fn__svg replaced-svg"
              >
                <g
                  transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                  stroke="none"
                >
                  <path d="M352 3837 l-352 -352 1280 -1280 1280 -1280 1280 1280 1280 1280 -352 352 -353 353 -927 -927 -928 -928 -928 928 -927 927 -353 -353z"></path>
                </g>
              </svg>
            </span>

            <ul
              style={(() => {
                if (!more) {
                  return transform200;
                } else if (pages || home) {
                  return transform100;
                } else {
                  return transform0;
                }
              })()}
            >
              <li>
                <Link
                  to="/"
                  onClick={homeClicked}
                  className={home ? "active" : ""}
                >
                  <span className="creative_link">
                    Home
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.0"
                      width="512.000000pt"
                      height="512.000000pt"
                      viewBox="0 0 512.000000 512.000000"
                      preserveAspectRatio="xMidYMid meet"
                      className="fn__svg replaced-svg"
                    >
                      <g
                        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                        stroke="none"
                      >
                        <path d="M352 3837 l-352 -352 1280 -1280 1280 -1280 1280 1280 1280 1280 -352 352 -353 353 -927 -927 -928 -928 -928 928 -927 927 -353 -353z"></path>
                      </g>
                    </svg>
                  </span>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/" className="prev" onClick={homeClicked}>
                      <span className="creative_link">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.0"
                          width="512.000000pt"
                          height="512.000000pt"
                          viewBox="0 0 512.000000 512.000000"
                          preserveAspectRatio="xMidYMid meet"
                          className="fn__svg replaced-svg"
                        >
                          <g
                            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                            stroke="none"
                          >
                            <path d="M352 3837 l-352 -352 1280 -1280 1280 -1280 1280 1280 1280 1280 -352 352 -353 353 -927 -927 -928 -928 -928 928 -927 927 -353 -353z"></path>
                          </g>
                        </svg>
                        Home
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span className="creative_link">#1 3D Carousel</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/BendedCarousel">
                      <span className="creative_link">#2 Bended Carousel</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="index-3.html">
                      <span className="creative_link">#3 Video Background</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="index-4.html">
                      <span className="creative_link">#4 Water Effect</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/simpleCarousel">
                      <span className="creative_link">#5 Simple Carousel</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/FullScreenSlider">
                      <span className="creative_link">
                        #6 Fullscreen Slider
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="nft-single.html">
                  <span className="creative_link">Mint Page</span>
                </Link>
              </li>
              <li>
                <Link href="collection.html">
                  <span className="creative_link">Collection</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={pagesClicked}
                  className={pages ? "active" : ""}
                >
                  <span className="creative_link">
                    Pages
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.0"
                      width="512.000000pt"
                      height="512.000000pt"
                      viewBox="0 0 512.000000 512.000000"
                      preserveAspectRatio="xMidYMid meet"
                      className="fn__svg replaced-svg"
                    >
                      <g
                        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                        stroke="none"
                      >
                        <path d="M352 3837 l-352 -352 1280 -1280 1280 -1280 1280 1280 1280 1280 -352 352 -353 353 -927 -927 -928 -928 -928 928 -927 927 -353 -353z"></path>
                      </g>
                    </svg>
                  </span>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/" className="prev" onClick={pagesClicked}>
                      <span className="creative_link">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.0"
                          width="512.000000pt"
                          height="512.000000pt"
                          viewBox="0 0 512.000000 512.000000"
                          preserveAspectRatio="xMidYMid meet"
                          className="fn__svg replaced-svg"
                        >
                          <g
                            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                            stroke="none"
                          >
                            <path d="M352 3837 l-352 -352 1280 -1280 1280 -1280 1280 1280 1280 1280 -352 352 -353 353 -927 -927 -928 -928 -928 928 -927 927 -353 -353z"></path>
                          </g>
                        </svg>
                        Pages
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/comingSoon">
                      <span className="creative_link">Coming Soon</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/404">
                      <span className="creative_link">404 Page</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/protected">
                      <span className="creative_link">Protected Page</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/NothingFound">
                      <span className="creative_link">Search No Results</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      onClick={moreClicked}
                      className={!more ? "active" : ""}
                    >
                      <span className="creative_link">
                        More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.0"
                          width="512.000000pt"
                          height="512.000000pt"
                          viewBox="0 0 512.000000 512.000000"
                          preserveAspectRatio="xMidYMid meet"
                          className="fn__svg replaced-svg"
                        >
                          <g
                            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                            stroke="none"
                          >
                            <path d="M352 3837 l-352 -352 1280 -1280 1280 -1280 1280 1280 1280 1280 -352 352 -353 353 -927 -927 -928 -928 -928 928 -927 927 -353 -353z"></path>
                          </g>
                        </svg>
                      </span>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/" className="prev" onClick={moreClicked}>
                          <span className="creative_link">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.0"
                              width="512.000000pt"
                              height="512.000000pt"
                              viewBox="0 0 512.000000 512.000000"
                              preserveAspectRatio="xMidYMid meet"
                              className="fn__svg replaced-svg"
                            >
                              <g
                                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                stroke="none"
                              >
                                <path d="M352 3837 l-352 -352 1280 -1280 1280 -1280 1280 1280 1280 1280 -352 352 -353 353 -927 -927 -928 -928 -928 928 -927 927 -353 -353z"></path>
                              </g>
                            </svg>
                            More
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/cookies">
                          <span className="creative_link">Cookies</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/privacy">
                          <span className="creative_link">Privacy Policy</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/terms-conditions">
                          <span className="creative_link">
                            Terms &amp; Conditions
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="blog.html">
                  <span className="creative_link">Blog</span>
                </Link>
              </li>
              <li>
                <Link href="blog-single.html">
                  <span className="creative_link">Blog Single</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="info_holder">
            <div className="copyright">
              <p>
                Copyright 2022 - Designed &amp; Developed by{" "}
                <Link
                  to="https://themeforest.net/user/frenify/portfolio"
                  target="_blank"
                >
                  Frenify
                </Link>
              </p>
            </div>
            <div className="social_icons">
              <ul>
                <li>
                  <Link to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      id="Capa_1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 512 512"
                      xmlSpace="preserve"
                      className="fn__svg replaced-svg"
                    >
                      <g>
                        <g>
                          <path d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016    c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992    c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056    c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152    c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792    c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44    C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568    C480.224,136.96,497.728,118.496,512,97.248z"></path>
                        </g>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      id="Capa_1"
                      x="0px"
                      y="0px"
                      width="96.124px"
                      height="96.123px"
                      viewBox="0 0 96.124 96.123"
                      xmlSpace="preserve"
                      className="fn__svg replaced-svg"
                    >
                      <g>
                        <path d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803   c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654   c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246   c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z"></path>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      id="Capa_1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 512 512"
                      xmlSpace="preserve"
                      className="fn__svg replaced-svg"
                    >
                      <g>
                        <g>
                          <path d="M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160    C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48    h192c61.76,0,112,50.24,112,112V352z"></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336    c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z"></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <circle cx="393.6" cy="118.4" r="17.056"></circle>
                        </g>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      id="Layer_1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 310.05 310.05"
                      xmlSpace="preserve"
                      className="fn__svg replaced-svg"
                    >
                      <g id="XMLID_798_">
                        <path
                          id="XMLID_799_"
                          d="M245.265,31.772C223.923,11.284,194.388,0,162.101,0c-49.32,0-79.654,20.217-96.416,37.176   c-20.658,20.9-32.504,48.651-32.504,76.139c0,34.513,14.436,61.003,38.611,70.858c1.623,0.665,3.256,1,4.857,1   c5.1,0,9.141-3.337,10.541-8.69c0.816-3.071,2.707-10.647,3.529-13.936c1.76-6.495,0.338-9.619-3.5-14.142   c-6.992-8.273-10.248-18.056-10.248-30.788c0-37.818,28.16-78.011,80.352-78.011c41.412,0,67.137,23.537,67.137,61.425   c0,23.909-5.15,46.051-14.504,62.35c-6.5,11.325-17.93,24.825-35.477,24.825c-7.588,0-14.404-3.117-18.705-8.551   c-4.063-5.137-5.402-11.773-3.768-18.689c1.846-7.814,4.363-15.965,6.799-23.845c4.443-14.392,8.643-27.985,8.643-38.83   c0-18.55-11.404-31.014-28.375-31.014c-21.568,0-38.465,21.906-38.465,49.871c0,13.715,3.645,23.973,5.295,27.912   c-2.717,11.512-18.865,79.953-21.928,92.859c-1.771,7.534-12.44,67.039,5.219,71.784c19.841,5.331,37.576-52.623,39.381-59.172   c1.463-5.326,6.582-25.465,9.719-37.845c9.578,9.226,25,15.463,40.006,15.463c28.289,0,53.73-12.73,71.637-35.843   c17.367-22.418,26.932-53.664,26.932-87.978C276.869,77.502,265.349,51.056,245.265,31.772z"
                        ></path>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.0"
                      width="512.000000pt"
                      height="512.000000pt"
                      viewBox="0 0 512.000000 512.000000"
                      preserveAspectRatio="xMidYMid meet"
                      className="fn__svg replaced-svg"
                    >
                      <g
                        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                        stroke="none"
                      >
                        <path d="M0 2599 l0 -1560 843 4 c887 4 903 5 1089 52 97 25 254 106 333 172 158 133 267 317 310 523 19 89 21 271 4 366 -42 244 -187 429 -416 533 l-53 24 68 40 c94 57 201 166 240 247 99 203 98 507 -3 715 -118 245 -370 396 -723 434 -66 7 -385 11 -897 11 l-795 0 0 -1561z m1590 997 c109 -23 178 -61 217 -119 42 -62 53 -104 53 -198 0 -148 -55 -241 -171 -294 -111 -50 -173 -55 -635 -55 l-424 0 0 346 0 346 443 -5 c355 -4 457 -8 517 -21z m57 -1208 c90 -27 140 -57 192 -114 68 -74 86 -130 85 -264 -3 -249 -123 -384 -371 -420 -38 -5 -260 -10 -495 -10 l-428 0 0 416 0 415 483 -4 c404 -3 491 -6 534 -19z"></path>
                        <path d="M3270 3820 l0 -190 680 0 680 0 0 190 0 190 -680 0 -680 0 0 -190z"></path>
                        <path d="M3800 3399 c-452 -46 -808 -332 -934 -749 -83 -275 -87 -661 -10 -926 80 -278 218 -450 482 -600 227 -130 541 -189 818 -155 303 38 505 129 684 311 125 126 211 266 239 389 l9 41 -314 0 -314 0 -35 -54 c-63 -99 -162 -164 -293 -192 -266 -56 -546 57 -645 260 -34 69 -67 194 -67 253 l0 43 852 0 851 0 -6 193 c-10 331 -61 524 -192 722 -187 282 -448 429 -830 465 -124 11 -173 11 -295 -1z m291 -503 c142 -31 274 -126 329 -240 32 -66 60 -163 60 -208 l0 -28 -525 0 -525 0 6 28 c17 79 49 171 76 220 41 72 122 154 184 185 103 52 267 70 395 43z"></path>
                      </g>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      }
    />
  );
}
