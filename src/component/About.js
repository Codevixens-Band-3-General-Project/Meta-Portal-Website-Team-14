/* eslint-disable react/no-unknown-property */
import React from "react";
import styled from "styled-components";
import VideoImage from "../assets/video/1.jpg";
import AboutRobort from "../assets/video/1x1.jpg";

const About = () => (
  <AboutStyles>
    <section id="about">
      {/* <!-- About Shortcode --> */}
      <div className="fn_cs_about">
        <div className="left_part">
          <div className="img">
            <div
              className="img_in"
              data-bg-img="img/about/1.jpg"
              style={{ backgroundImage: `url(${AboutRobort})` }}>
              <img
                src="https://frenify.com/work/envato/frenify/html/meta-portal/1/img/1x1.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="bg_overlay">
            <div className="bg_color" />
            <div
              className="bg_image"
              data-bg-img="img/about/bg.jpg"
              style={{
                backgroundImage:
                  'url("https://frenify.com/work/envato/frenify/html/meta-portal/1/img/about/bg.jpg")',
              }}
            />
          </div>
        </div>
        <div className="right_part">
          <div className="right_in">
            <h3 className="fn__maintitle" data-text="The Rise of Legends">
              The Rise of Legends
            </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                As the first hero of the Meta Legends, collection has over 9,999
                unique skins drawn from the different missions and challenges he
                faced throughout his life.
              </p>
              <p>
                The artwork has been hand-drawned by Robert Green in the
                traditional anime style and composited by Layla Efiyo.
              </p>
              <p>
                Curabitur pharetra velit eget dignissim varius. In vulputate
                elit at tortor pellentesque, non pulvinar neque consequat.
                Aenean tristique odio in libero tincidunt maximus. Nulla
                pharetra viverra dolor ut blandit. Cras finibus vel tortor eget
                lacinia. Pellentesque interdum elit non lacinia faucibus. Morbi
                nec felis auctor, tincidunt lacus sit amet, iaculis ipsum.
                Phasellus tempus sit amet justo et feugiat. Duis blandit semper
                lorem, egestas euismod ligula pharetra ac. Sed porta lorem eget
                neque bibendum, eget euismod justo mollis.
              </p>
              <p>
                Donec tristique porttitor sem, eget fermentum elit varius nec.
                Donec ut orci ipsum. Morbi efficitur felis eget dapibus
                fermentum. Phasellus sed tellus volutpat, hendrerit leo non,
                sollicitudin neque. Etiam ac lacus quam. Vivamus suscipit nisl
                tellus, at congue odio commodo at. Cras ante enim, sodales at
                pretium et, tempus at libero.
              </p>
            </div>
            <a
              href="https://discord.com/"
              className="metaportal_fn_button"
              target="_blank"
              rel="noreferrer">
              <span>Find us On Discord</span>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- !About Shortcode --> */}

      <div className="container">
        {/* <!-- Mint Shortcode --> */}
        <div className="fn_cs_mint">
          <div className="left_part">
            <h3 className="fn__maintitle" data-text="How to Mint">
              How to Mint
            </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                As the first hero of the Meta Legends, collection has over 9,999
                unique skins drawn from the different missions and challenges he
                faced throughout his life.
              </p>
              <p>
                The artwork has been hand-drawned by Robert Green in the
                traditional anime style and composited by Layla Efiyo.
              </p>
              <p>
                Curabitur pharetra velit eget dignissim varius. In vulputate
                elit at tortor pellentesque, non pulvinar neque consequat.
                Aenean tristique odio in libero tincidunt maximus. Nulla
                pharetra viverra dolor ut blandit. Cras finibus vel tortor eget
                lacinia. Pellentesque interdum elit non lacinia faucibus. Morbi
                nec felis auctor, tincidunt lacus sit amet, iaculis ipsum.
                Phasellus tempus sit amet justo et feugiat. Duis blandit semper
                lorem, egestas euismod ligula pharetra ac. Sed porta lorem eget
                neque bibendum, eget euismod justo mollis.
              </p>
              <p>
                Donec tristique porttitor sem, eget fermentum elit varius nec.
                Donec ut orci ipsum. Morbi efficitur felis eget dapibus
                fermentum. Phasellus sed tellus volutpat, hendrerit leo non,
                sollicitudin neque. Etiam ac lacus quam. Vivamus suscipit nisl
                tellus, at congue odio commodo at. Cras ante enim, sodales at
                pretium et, tempus at libero.
              </p>
            </div>
            <a href="nft-single.html" className="metaportal_fn_button">
              <span>How to Mint</span>
            </a>
          </div>

          <div className="right_part">
            {/* <!-- Steps Shortcode --> */}
            <div className="fn_cs_steps">
              <ul>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <h3 className="fn__gradient_title">01</h3>
                      <p>Connect your Wallet</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <h3 className="fn__gradient_title">02</h3>
                      <p>Select Your Quantity</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <h3 className="fn__gradient_title">03</h3>
                      <p>Confirm The Transaction</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <h3 className="fn__gradient_title">04</h3>
                      <p>Receive Your NFT’s</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* <!-- !Steps Shortcode --> */}

            {/* <!-- Video Shortcode --> */}
            <div className="fn_cs_video">
              <img src={VideoImage} alt="" />
              <a
                className="popup-youtube"
                href="https://www.youtube.com/watch?v=7e90gBu4pas">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="play"
                  x="0px"
                  y="0px"
                  height="100px"
                  width="100px"
                  viewBox="0 0 100 100"
                  enableBackground="new 0 0 100 100"
                  xmlSpace="preserve"
                  className="fn__svg replaced-svg">
                  <path
                    className="stroke-solid"
                    fill="none"
                    d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7     C97.3,23.7,75.7,2.3,49.9,2.5"
                  />
                  <path
                    className="icon"
                    d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"
                  />
                </svg>
              </a>
            </div>
            {/* <!-- /Video Shortcode --> */}
          </div>
        </div>
        {/* <!-- !Mint Shortcode --> */}
      </div>
    </section>
  </AboutStyles>
);

const AboutStyles = styled.div`
  #about {
    padding: 150px 0;
  }
  --mc1: #cc00ff;
  --mc2: #7000ff;
  --hc: #ddd;
  --bc: #9ba0b8;
  --hff: "Heebo", sans-serif;
  --bff: "Nunito", sans-serif;
  letter-spacing: 0;
  font-family: var(--bff);
  font-size: 18px;
  line-height: 1.44;
  font-weight: 400;
  color: var(--bc);
  word-break: break-word;
  margin: 0;
  display: block;
  box-sizing: border-box;
  /* padding: 150px 0; */
  .fn_cs_about {
    position: relative;
    display: flex;
    margin-bottom: 150px;
  }
  .metaportal_fn_main,
  .metaportal_fn_main * {
    box-sizing: border-box;
  }

  .container {
    width: 100%;
    max-width: 1800px;
    padding: 0 100px;
    margin: 0 auto;
  }
  .fn_cs_about .left_part .bg_color {
    background-color: rgba(0, 0, 0, 0.7);
  }

  .fn_cs_mint {
    position: relative;
    display: flex;
  }

  .fn_cs_about .left_part .bg_overlay {
    right: 130px;
  }
  .fn_cs_about .left_part {
    width: 57%;
    position: relative;
    display: flex;
    justify-content: flex-end;
    -ms-align-items: center;
    align-items: center;
    padding: 110px 0;
  }
  @media (max-width: 1400px) {
    .fn_cs_about .left_part,
    .fn_cs_steps[data-cols="4"] li {
      width: 50%;
    }
  }

  .fn_cs_mint .left_part {
    width: 40%;
    padding-right: 100px;
  }
  @media (max-width: 1400px) {
    .fn_cs_mint .left_part {
      padding-right: 50px;
    }
  }

  .fn_cs_divider .divider {
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -1px;
    width: 140px;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .fn_cs_divider .divider:before {
    width: 16px;
    content: "";
    position: absolute;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.5);
    transform: rotate(-65deg);
  }
  *,
  :after,
  :before {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .fn_cs_about .fn__maintitle,
  .fn_cs_mint .fn__maintitle {
    margin-bottom: 15px;
  }
  .fn_cs_counter_list .divider:after,
  .fn_cs_counter_list .divider:before,
  .fn_cs_divider .divider:after,
  .fn_cs_divider .divider:before {
    width: 16px;
    content: "";
    position: absolute;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.5);
    transform: rotate(-65deg);
  }
  .fn_cs_divider .divider:after {
    left: 3px;
  }
  .fn__maintitle {
    margin: 0;
    padding: 0;
    font-weight: 300;
    letter-spacing: 0.5px;
    font-size: 36px;
    line-height: 1;
  }
  .fn__maintitle,
  .trigger {
    z-index: 5;
    position: relative;
  }
  .metaportal_fn_main,
  .metaportal_fn_main * {
    box-sizing: border-box;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--hc);
    font-family: var(--hff);
    line-height: 1.22;
    letter-spacing: 0;
  }
  .clearfix:after,
  .clearfix:before,
  .container:after {
    display: table;
    content: "";
    clear: both;
  }
  .fn_cs_about .desc,
  .fn_cs_mint .desc,
  .fn_cs_shortabout .desc,
  .metaportal_fn_mint_top .desc {
    margin-bottom: 32px;
  }
  .desc p,
  .fn_cs_contact_info p,
  .metaportal_fn_pagetitle h3,
  .metaportal_fn_privacy p {
    margin-bottom: 27px;
  }
  .metaportal_fn_main,
  .metaportal_fn_main * {
    box-sizing: border-box;
  }
  .metaportal_fn_button,
  .metaportal_fn_protected input[type="submit"] {
    display: block;
    width: fit-content;
    max-width: 100%;
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.5px;
    font-family: var(--hff);
    height: 50px;
    line-height: 50px;
    padding: 0 34px;
    position: relative;
    color: var(--hc);
    text-transform: uppercase;
    text-align: center;
    white-space: nowrap;
    background-color: transparent;
    outline: transparent 0;
  }

  .fn_cs_mint .right_part {
    width: 60%;
  }
  .fn_cs_about .right_part {
    width: 43%;
    padding: 110px 100px;
  }
  @media (max-width: 1400px) {
    .fn_cs_about .right_part {
      padding: 110px 50px;
      width: 50%;
    }
  }
  .fn_cs_about .fn_cs_divider {
    margin-bottom: 25px;
  }
  .metaportal_fn_main,
  .metaportal_fn_main * {
    box-sizing: border-box;
  }
  .fn_cs_divider {
    height: 16px;
    position: relative;
  }
  @media (max-width: 1400px) {
    .fn_cs_steps {
      margin-bottom: 30px;
    }
  }
  @media (max-width: 1400px) {
    .fn_cs_steps ul {
      margin-left: -40px;
    }
  }
  .fn_cs_steps ul {
    margin: 0 0 0 -70px;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
  }

  .fn_cs_steps li {
    width: 50%;
    padding-left: 70px;
    margin-bottom: 70px;
  }
  .metaportal_fn_main,
  .metaportal_fn_main * {
    box-sizing: border-box;
  }
  .fn_cs_steps .item {
    height: 100%;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    position: relative;
  }
  #fun_facts,
  .blog__item,
  .fn_cs_about .left_part .bg_overlay,
  .fn_cs_steps .item,
  .fn_cs_video img,
  .metaportal_fn_mintbox {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25);
  }
  .fn_cs_steps .item_in {
    height: 100%;
    padding: 57px 50px 54px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.03);
  }
  .fn_cs_steps h3 {
    margin-bottom: 14px;
    color: #1a1734;
  }
  @media (max-width: 1400px) {
    .fn__gradient_title,
    .fn__maintitle.big {
      font-size: 40px;
    }
  }
  .fn__gradient_title {
    width: fit-content;
    max-width: 100%;
    margin: 0;
    padding: 0;
    font-size: 60px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 1;
    background: -moz-linear-gradient(90deg, var(--mc1), var(--mc2));
    background: -webkit-linear-gradient(90deg, var(--mc1), var(--mc2));
    background: linear-gradient(to right, var(--mc1), var(--mc2));
    -webkit-background-clip: text;
    -webkit-text-stroke: 4px transparent;
    color: #160f1a;
    filter: drop-shadow(0 5px 20px rgba(204, 0, 255, 0.15));
  }
  .fn_cs_steps p {
    margin: 0;
    font-size: 16px;
    font-family: var(--hff);
    font-weight: 500;
  }

  .fn__maintitle.big,
  .fn__maintitle.upper,
  .fn_cs_steps p {
    text-transform: uppercase;
  }
  .fn_cs_mint,
  .fn_cs_roadmap .slider_holder,
  .fn_cs_video,
  .metaportal_fn_categories li a span,
  .metaportal_fn_searchbox .searchbox {
    position: relative;
  }
  .bg_overlay,
  .bg_overlay .bg_color,
  .bg_overlay .bg_image {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .fn_cs_video img {
    min-height: 240px;
    min-width: 100%;
    border-radius: 10px;
  }
  .fn_cs_about .left_part .img img {
    min-width: 100%;
    opacity: 0;
  }
  .fn_cs_about .left_part .img {
    width: 542px;
    max-width: 100%;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.05);
    position: relative;
    z-index: 5;
  }
  .fn_cs_video a,
  a.metaportal_fn_videobutton {
    position: absolute;
    display: block;
    left: 50%;
    top: 50%;
    margin: -60px 0 0 -60px;
    z-index: 25;
  }

  .fn_cs_about .left_part .img_in {
    border-radius: 10px;
  }

  .fn_cs_about .left_part .img_in,
  .fn_cs_slider .slider_top .img {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .fn_cs_video a .fn__svg,
  a.metaportal_fn_videobutton .fn__svg {
    width: 120px;
    height: 120px;
    display: block;
    transition: 1s;
    border-radius: 50%;
  }
  *,
  :after,
  :before {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .bg_overlay .bg_color {
    z-index: 2;
  }

  @media (max-width: 1400px) {
    .fn_cs_about .left_part .bg_overlay {
      right: 80px;
    }
  }
  @media (max-width: 1200px) {
    .fn_cs_mint .left_part {
      padding-right: 0;
      width: 100%;
      margin-bottom: 80px;
    }
  }
  @media (max-width: 1400px) {
    .fn_cs_mint .left_part {
      padding-right: 50px;
    }
  }

  @media (max-width: 1200px) {
    .fn_cs_mint {
      display: block;
      > div {
        width: 100%;
      }
    }
  }
  @media (max-width: 1400px) {
    .fn_cs_steps ul {
      margin-left: -40px;
    }
  }
  @media (max-width: 1200px) {
    .fn_cs_mint .left_part {
      padding-right: 0;
      width: 100%;
      margin-bottom: 80px;
    }
  }
  @media (max-width: 1400px) {
    .fn_cs_steps li {
      padding-left: 40px;
      margin-bottom: 40px;
    }
  }
  @media (max-width: 1200px) {
    .fn_cs_contact_info li,
    .fn_cs_faq .faq_col,
    .fn_cs_mint .right_part {
      width: 100%;
    }
  }
  @media (max-width: 480px) {
    .fn_cs_counter_list li,
    .fn_cs_steps li,
    .metaportal_fn_mintbox .mint_list li,
    .metaportal_fn_nft_cats li {
      width: 100%;
    }
  }

  @media (max-width: 1200px) {
    .container {
      padding: 0 40px;
    }
  }
  @media (max-width: 1040px) {
    .container {
      padding: 0 20px;
    }
  }
  @media (max-width: 1040px) {
    .fn_cs_about {
      flex-direction: column-reverse;
    }
  }
  @media (max-width: 1040px) {
    .fn_cs_about .right_part {
      width: 100%;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 0;
    }
  }
  @media (max-width: 1040px) {
    .fn_cs_about .left_part {
      width: 100%;
      justify-content: center;
    }
  }
  @media (max-width: 1040px) {
    .fn_cs_about .left_part .bg_overlay {
      right: 0;
    }
  }
  .fn_cs_video a {
    color: unset;
  }
`;

export default About;
