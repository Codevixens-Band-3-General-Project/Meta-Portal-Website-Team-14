/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import m1 from "../../assets/m1.jpg";
import m2 from "../../assets/m2.jpg";
import m3 from "../../assets/m3.jpg";
import m4 from "../../assets/m4.jpg";
import m5 from "../../assets/m5.jpg";
import m6 from "../../assets/m6.jpg";
import "./mintPage.css";

class MintPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    };
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      if (date) {
        this.setState(date);
      } else {
        this.setState({ finished: true });
        this.stop();
      }
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  // eslint-disable-next-line class-methods-use-this
  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    };

    // calculate time difference between now and expected date
    if (diff >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = `0${value}`;
    }
    return value;
  }

  render() {
    const countDown = this.state;

    return (
      <div className="metaportal_fn_mintpage">
        <div className="container small">
          <div className="metaportal_fn_mint_top">
            <div className="mint_left">
              <div className="img">
                <div className="img_in">
                  <img src="img/1x1.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="mint_right">
              <div className="metaportal_fn_share">
                <h5 className="label">Share:</h5>
                <ul>
                  <li>
                    <Link to="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        style={{ enableBackground: "new 0 0 512 512" }}
                        xmlSpace="preserve"
                        className="fn__svg replaced-svg">
                        <g>
                          <g>
                            <path d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016    c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992    c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056    c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152    c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792    c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44    C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568    C480.224,136.96,497.728,118.496,512,97.248z" />
                          </g>
                        </g>
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
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
                        style={{ enableBackground: "new 0 0 96.124 96.123" }}
                        xmlSpace="preserve"
                        className="fn__svg replaced-svg">
                        <g>
                          <path d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803   c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654   c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246   c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z" />
                        </g>
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        style={{ enableBackground: "new 0 0 512 512" }}
                        xmlSpace="preserve"
                        className="fn__svg replaced-svg">
                        <g>
                          <g>
                            <path d="M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160    C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48    h192c61.76,0,112,50.24,112,112V352z" />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path d="M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336    c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z" />
                          </g>
                        </g>
                        <g>
                          <g>
                            <circle cx="393.6" cy="118.4" r="17.056" />
                          </g>
                        </g>
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Layer_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 310.05 310.05"
                        style={{ enableBackground: "new 0 0 310.05 310.05" }}
                        xmlSpace="preserve"
                        className="fn__svg replaced-svg">
                        <g id="XMLID_798_">
                          <path
                            id="XMLID_799_"
                            d="M245.265,31.772C223.923,11.284,194.388,0,162.101,0c-49.32,0-79.654,20.217-96.416,37.176   c-20.658,20.9-32.504,48.651-32.504,76.139c0,34.513,14.436,61.003,38.611,70.858c1.623,0.665,3.256,1,4.857,1   c5.1,0,9.141-3.337,10.541-8.69c0.816-3.071,2.707-10.647,3.529-13.936c1.76-6.495,0.338-9.619-3.5-14.142   c-6.992-8.273-10.248-18.056-10.248-30.788c0-37.818,28.16-78.011,80.352-78.011c41.412,0,67.137,23.537,67.137,61.425   c0,23.909-5.15,46.051-14.504,62.35c-6.5,11.325-17.93,24.825-35.477,24.825c-7.588,0-14.404-3.117-18.705-8.551   c-4.063-5.137-5.402-11.773-3.768-18.689c1.846-7.814,4.363-15.965,6.799-23.845c4.443-14.392,8.643-27.985,8.643-38.83   c0-18.55-11.404-31.014-28.375-31.014c-21.568,0-38.465,21.906-38.465,49.871c0,13.715,3.645,23.973,5.295,27.912   c-2.717,11.512-18.865,79.953-21.928,92.859c-1.771,7.534-12.44,67.039,5.219,71.784c19.841,5.331,37.576-52.623,39.381-59.172   c1.463-5.326,6.582-25.465,9.719-37.845c9.578,9.226,25,15.463,40.006,15.463c28.289,0,53.73-12.73,71.637-35.843   c17.367-22.418,26.932-53.664,26.932-87.978C276.869,77.502,265.349,51.056,245.265,31.772z"
                          />
                        </g>
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
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
                          <path d="M0 2599 l0 -1560 843 4 c887 4 903 5 1089 52 97 25 254 106 333 172 158 133 267 317 310 523 19 89 21 271 4 366 -42 244 -187 429 -416 533 l-53 24 68 40 c94 57 201 166 240 247 99 203 98 507 -3 715 -118 245 -370 396 -723 434 -66 7 -385 11 -897 11 l-795 0 0 -1561z m1590 997 c109 -23 178 -61 217 -119 42 -62 53 -104 53 -198 0 -148 -55 -241 -171 -294 -111 -50 -173 -55 -635 -55 l-424 0 0 346 0 346 443 -5 c355 -4 457 -8 517 -21z m57 -1208 c90 -27 140 -57 192 -114 68 -74 86 -130 85 -264 -3 -249 -123 -384 -371 -420 -38 -5 -260 -10 -495 -10 l-428 0 0 416 0 415 483 -4 c404 -3 491 -6 534 -19z" />
                          <path d="M3270 3820 l0 -190 680 0 680 0 0 190 0 190 -680 0 -680 0 0 -190z" />
                          <path d="M3800 3399 c-452 -46 -808 -332 -934 -749 -83 -275 -87 -661 -10 -926 80 -278 218 -450 482 -600 227 -130 541 -189 818 -155 303 38 505 129 684 311 125 126 211 266 239 389 l9 41 -314 0 -314 0 -35 -54 c-63 -99 -162 -164 -293 -192 -266 -56 -546 57 -645 260 -34 69 -67 194 -67 253 l0 43 852 0 851 0 -6 193 c-10 331 -61 524 -192 722 -187 282 -448 429 -830 465 -124 11 -173 11 -295 -1z m291 -503 c142 -31 274 -126 329 -240 32 -66 60 -163 60 -208 l0 -28 -525 0 -525 0 6 28 c17 79 49 171 76 220 41 72 122 154 184 185 103 52 267 70 395 43z" />
                        </g>
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="metaportal_fn_breadcrumbs">
                <p>
                  <Link to="/">Home</Link>
                  <span className="separator">/</span>
                  <Link to="/collection">Collection</Link>
                  <span className="separator">/</span>
                  <span className="current">Meta Legends #5675</span>
                </p>
              </div>
              <h3
                className="fn__maintitle"
                data-text="Meta Legends #5675"
                data-align="left">
                Meta Legends #5675
              </h3>
              <div className="desc">
                <p>
                  Suspendisse eu velit est. Cras nec vestibulum quam. Donec
                  tincidunt purus nec enim tincidunt, sit amet facilisis massa
                  laoreet. Integer mollis nec sapien eu lacinia. Nunc eu massa
                  dictum, vulputate neque ac, porta mauris. Sed sollicitudin
                  nisi augue, a gravida turpis elementum vel. Curabitur sagittis
                  quis diam et rhoncus. Nam pellentesque imperdiet aliquet. Sed
                  non ante malesuada, ultrices sem at, tempus libero.
                </p>
                <p>
                  Duis eu lorem ut mauris pulvinar auctor. Maecenas et dapibus
                  orci, eleifend euismod justo. Quisque luctus turpis eu
                  tristique feugiat. Praesent ac magna feugiat, interdum lacus
                  ac, interdum dui. Pellentesque id quam quis enim malesuada
                  rutrum. Orci varius natoque penatibus et magnis dis
                  parturient.
                </p>
              </div>
              <div className="view_on">
                <ul>
                  <li>
                    <span>View On:</span>
                  </li>
                  <li>
                    <Link to="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.0"
                        width="223.000000pt"
                        height="200.000000pt"
                        viewBox="0 0 223.000000 200.000000"
                        preserveAspectRatio="xMidYMid meet"
                        className="fn__svg replaced-svg">
                        <g
                          transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
                          stroke="none">
                          <path d="M1058 1985 c-40 -22 -48 -45 -48 -129 0 -42 -3 -76 -8 -76 -4 0 -65 16 -136 35 -71 20 -131 34 -133 31 -2 -2 14 -40 36 -85 142 -282 206 -551 170 -723 -13 -65 -90 -228 -153 -327 -26 -40 -45 -79 -42 -87 4 -11 34 -14 136 -14 l130 0 0 -100 0 -100 -152 0 c-134 0 -157 2 -196 21 -56 27 -93 84 -100 149 l-5 50 -275 0 -275 0 6 -78 c7 -85 37 -181 82 -258 44 -75 150 -174 231 -217 140 -73 135 -72 739 -72 534 0 541 0 587 22 69 31 141 104 212 213 35 52 84 127 110 167 37 56 62 82 116 118 37 25 82 50 99 56 31 11 31 11 31 86 0 66 -2 74 -17 69 -10 -3 -137 -39 -283 -81 l-265 -77 -70 -68 c-92 -91 -116 -100 -260 -100 l-115 0 0 100 0 100 74 0 c85 0 102 10 200 120 75 84 110 135 149 218 28 58 32 77 31 147 -1 97 -23 160 -96 272 -52 81 -266 303 -326 338 l-32 19 0 88 c0 90 -13 142 -43 166 -24 20 -79 24 -109 7z" />
                          <path d="M586 1558 c-18 -29 -126 -198 -240 -376 -113 -178 -206 -328 -206 -333 0 -5 103 -9 254 -9 l254 0 52 105 c61 121 72 195 50 319 -21 118 -101 346 -121 346 -5 0 -24 -24 -43 -52z" />
                        </g>
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.0"
                        width="398.000000pt"
                        height="317.000000pt"
                        viewBox="0 0 398.000000 317.000000"
                        preserveAspectRatio="xMidYMid meet"
                        className="fn__svg replaced-svg">
                        <g
                          transform="translate(0.000000,317.000000) scale(0.100000,-0.100000)"
                          stroke="none">
                          <path d="M585 2580 l-590 -590 998 -998 997 -997 997 997 998 998 -590 590 -590 590 -815 0 -815 0 -590 -590z m1601 195 c202 -29 410 -115 575 -240 46 -35 193 -173 327 -307 l243 -244 -253 -250 c-139 -137 -284 -273 -321 -301 -90 -68 -290 -167 -399 -198 -98 -27 -281 -55 -363 -55 -87 0 -275 28 -371 55 -110 31 -310 129 -401 197 -37 28 -182 164 -321 302 l-252 250 252 253 c139 139 287 278 329 308 276 199 610 279 955 230z" />
                          <path d="M1860 2594 c-167 -36 -326 -150 -403 -289 -81 -144 -107 -305 -73 -453 51 -225 227 -406 453 -468 77 -21 221 -20 303 1 216 55 392 228 451 440 23 82 18 266 -8 351 -94 297 -417 485 -723 418z m235 -368 c60 -28 128 -98 145 -151 8 -23 11 -66 8 -111 -4 -63 -9 -79 -40 -121 -67 -93 -166 -134 -271 -111 -157 33 -242 183 -195 342 15 51 108 147 158 163 62 19 140 15 195 -11z" />
                        </g>
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="metaportal_fn_mintbox">
            <div className="mint_left">
              <div className="mint_title">
                <span>Public Mint is Live</span>
              </div>
              <div className="mint_list">
                <ul>
                  <li>
                    <div className="item">
                      <h4>Price</h4>
                      <h3>2.25 ETH</h3>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <h4>Remaining</h4>
                      <h3>344/999</h3>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <h4>Quantity</h4>
                      <div className="qnt">
                        <span className="decrease">-</span>
                        <span className="summ" data-price="2.25">
                          2
                        </span>
                        <span className="increase">+</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <h4>Total Price</h4>
                      <h3>
                        <span className="total_price">4.5</span> ETH + GAS
                      </h3>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mint_desc">
                <Link to="#" target="_blank" className="metaportal_fn_button">
                  <span>Mint Now</span>
                </Link>
                <p>
                  By clicking “MINT NOW” button, you agree to our{" "}
                  <Link to="">Terms of Service</Link> and our{" "}
                  <Link to="">Privacy Policy</Link>.
                </p>
              </div>
            </div>
            <div className="mint_right">
              <div className="mright">
                <div className="mint_time">
                  <h4>Public Mint Ends In</h4>

                  <h3
                    className="metaportal_fn_countdown"
                    data-type="ever"
                    data-date="October 13, 2022 12:30:00"
                    data-days="34"
                    data-hours="10"
                    data-minutes="20"
                    data-seconds="0">
                    {this.addLeadingZeros(countDown.days)}d:{" "}
                    {this.addLeadingZeros(countDown.hours)}h:{" "}
                    {this.addLeadingZeros(countDown.min)}m:{" "}
                    {this.addLeadingZeros(countDown.sec)}s
                  </h3>
                </div>
                <div className="mint_checked">
                  <p>
                    <span className="text">Whitelist:</span>
                    <span className="status">
                      Soldout
                      <span className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          viewBox="0 0 26 26"
                          enableBackground="new 0 0 26 26"
                          className="fn__svg replaced-svg">
                          <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                        </svg>
                      </span>
                    </span>
                  </p>
                  <p>
                    <span className="text">Presale:</span>
                    <span className="status">
                      Soldout
                      <span className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          viewBox="0 0 26 26"
                          enableBackground="new 0 0 26 26"
                          className="fn__svg replaced-svg">
                          <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" />
                        </svg>
                      </span>
                    </span>
                  </p>
                </div>
                <div className="mint_info">
                  <p>
                    You need to pay a GAS fee during minting. We allow max 5
                    mints per wallet.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="metaportal_fn_nft_cats">
            <ul>
              <li>
                <div className="item">
                  <h4 className="parent_category">Clothing</h4>
                  <h3 className="child_category" title="Black Yukata">
                    Black Yukata
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">Eyes</h4>
                  <h3 className="child_category" title="Daydreaming">
                    Daydreaming
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">Special</h4>
                  <h3 className="child_category" title="Fireflies, Smoke">
                    Fireflies, Smoke
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">Type</h4>
                  <h3 className="child_category" title="Human, Sand">
                    Human, Sand
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">Mouth</h4>
                  <h3 className="child_category" title="Not Bad">
                    Not Bad
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">Neck</h4>
                  <h3 className="child_category" title="Zen Headphones">
                    Zen Headphones
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">Eyes</h4>
                  <h3 className="child_category" title="Striking">
                    Striking
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">Neck</h4>
                  <h3 className="child_category" title="Zen Headphones">
                    Zen Headphones
                  </h3>
                </div>
              </li>
            </ul>
          </div>
          <div className="metaportal_fn_similar">
            <h3 className="fn__maintitle" data-text="Similar Items">
              Similar Items
            </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="metaportal_fn_drops">
              <ul className="grid">
                <li>
                  <div className="nft__item">
                    <div className="img_holder">
                      <img src={m1} alt="" />
                      <Link to="nft-single.html" className="full_link" />
                    </div>
                    <div className="title_holder">
                      <h3 className="fn_title">
                        <Link to="#">Meta Legends #4588</Link>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="nft__item">
                    <div className="img_holder">
                      <img src={m2} alt="" />
                      <Link to="nft-single.html" className="full_link" />
                    </div>
                    <div className="title_holder">
                      <h3 className="fn_title">
                        <Link to="#">Meta Legends #4587</Link>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="nft__item">
                    <div className="img_holder">
                      <img src={m3} alt="" />
                      <Link to="nft-single.html" className="full_link" />
                    </div>
                    <div className="title_holder">
                      <h3 className="fn_title">
                        <Link to="#">Meta Legends #4586</Link>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="nft__item">
                    <div className="img_holder">
                      <img src={m4} alt="" />
                      <Link to="nft-single.html" className="full_link" />
                    </div>
                    <div className="title_holder">
                      <h3 className="fn_title">
                        <Link to="#">Meta Legends #4585</Link>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="nft__item">
                    <div className="img_holder">
                      <img src={m5} alt="" />
                      <Link to="nft-single.html" className="full_link" />
                    </div>
                    <div className="title_holder">
                      <h3 className="fn_title">
                        <Link to="#">Meta Legends #4584</Link>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="nft__item">
                    <div className="img_holder">
                      <img src={m6} alt="" />
                      <Link to="nft-single.html" className="full_link" />
                    </div>
                    <div className="title_holder">
                      <h3 className="fn_title">
                        <Link to="#">Meta Legends #4583</Link>
                      </h3>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MintPage;
