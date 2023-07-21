import React from "react";
import styled from "styled-components";
import BlogImage1 from "../assets/blog1.jpg";
import SectionDivider from "./sectionDivider/SectionDivider";

const Blog = () => (
  <BlogStyles>
    <SectionDivider />
    <section id="news">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="Latest Articles"
          data-align="center">
          Latest Articles
        </h3>

        {/* <!-- News Shotcode --> */}
        <div className="fn_cs_news">
          <div className="news_part">
            <div className="left_items">
              <div className="blog__item">
                <div className="counter">
                  <span className="cc">
                    <span>01</span>
                  </span>
                </div>
                <div className="meta">
                  <p>August 09, 2022 / MetaVerse / 4 Comments</p>
                </div>
                <div className="title">
                  <h3>
                    <a href="blog-single.html">
                      Reasons Why People Use Discord
                    </a>
                  </h3>
                </div>
                <div className="image">
                  <a href="blog-single.html">
                    <img src={BlogImage1} alt="" />
                  </a>
                </div>
                <div className="read_more">
                  <a href="blog-single.html">
                    <span>Read More</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="right_items">
              <div className="blog__item">
                <div className="counter">
                  <span className="cc">
                    <span>02</span>
                  </span>
                </div>
                <div className="meta">
                  <p>August 09, 2022 / MetaVerse / 4 Comments</p>
                </div>
                <div className="title">
                  <h3>
                    <a href="blog-single.html">
                      Trial-By-Combat: The Death Cup
                    </a>
                  </h3>
                </div>
                <div className="read_more">
                  <a href="blog-single.html">
                    <span>Read More</span>
                  </a>
                </div>
              </div>
              <div className="blog__item">
                <div className="counter">
                  <span className="cc">
                    <span>03</span>
                  </span>
                </div>
                <div className="meta">
                  <p>August 09, 2022 / NFT / 4 Comments</p>
                </div>
                <div className="title">
                  <h3>
                    <a href="blog-single.html">
                      Graffiti Racer Research Center #10
                    </a>
                  </h3>
                </div>
                <div className="read_more">
                  <a href="blog-single.html">
                    <span>Read More</span>
                  </a>
                </div>
              </div>
              <div className="blog__item">
                <div className="counter">
                  <span className="cc">
                    <span>04</span>
                  </span>
                </div>
                <div className="meta">
                  <p>August 09, 2022 / MetaVerse / 4 Comments</p>
                </div>
                <div className="read_more">
                  <a href="blog-single.html">
                    <span>Read More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom_part">
            <div className="left_bot">
              <a href="blog.html" className="metaportal_fn_button full">
                <span>Read All Articles</span>
              </a>
            </div>
            <div className="right_bot">
              <p>
                We’re a team of creatives who are excited about unique ideas and
                create consectetur adipiscing elit. Etiam vitae purus a lectus
                semper.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- !News Shotcode --> */}
      </div>
    </section>
  </BlogStyles>
);

const BlogStyles = styled.div`
  #news {
    padding: 144px 0 150px;
    padding-top: 0;
  }
  #news .fn__maintitle {
    margin-bottom: 140px;
  }
  .fn_cs_news .news_part {
    display: flex;
    margin-bottom: 40px;
    column-gap: 40px;
  }
  .fn_cs_news .bottom_part {
    display: flex;
    align-items: center;
    column-gap: 40px;
  }
  .fn_cs_news .bottom_part .left_bot,
  .fn_cs_news .bottom_part .right_bot,
  .fn_cs_news .left_items,
  .metaportal_fn_comments .input-item.half-item {
    width: 50%;
  }
  .fn_cs_news .left_items .blog__item {
    height: 100%;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25);
  }
  .blog__item {
    padding: 40px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 10px;
  }

  .blog__item .counter {
    margin-bottom: 15px;
  }
  .blog__item .counter .cc {
    width: 50px;
    height: 50px;
    display: block;
    position: relative;
    text-align: center;
    line-height: 50px;
    letter-spacing: 2px;
    font-size: 16px;
    font-family: var(--hff);
  }
  .blog__item .counter .cc:before {
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    border-radius: 100%;
  }
  .blog__item .counter .cc:before {
    position: absolute;
    color: var(--mc1);
    opacity: 0.15;
    content: "";
    box-shadow: 0 5px 20px;
  }
  .blog__item .counter .cc:after {
    border-radius: 100%;
    border: 3px solid transparent;
    background: linear-gradient(
        to top right,
        var(--mc1),
        var(--mc2),
        var(--mc1),
        var(--mc2)
      )
      border-box;
    -webkit-mask-composite: destination-out;
    -webkit-mask-composite: source-out;
    mask-composite: exclude;
    background-size: 300% 300%;
    -webkit-animation: 4s infinite alternate animatedgradient;
    animation: 4s infinite alternate animatedgradient;
  }
  .blog__item .counter .cc:after {
    content: "";
    position: absolute;
    bottom: 0;
    background: -moz-linear-gradient(
        bottom left,
        var(--mc1),
        var(--mc2),
        var(--mc1),
        var(--mc2)
      )
      border-box;
    background: -webkit-linear-gradient(
        bottom left,
        var(--mc1),
        var(--mc2),
        var(--mc1),
        var(--mc2)
      )
      border-box;
    background: -o-linear-gradient(
        bottom left,
        var(--mc1),
        var(--mc2),
        var(--mc1),
        var(--mc2)
      )
      border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    left: 0;
    top: 0;
    right: 0;
  }
  .blog__item .counter .cc span {
    margin-right: -2px;
    margin-top: 1px;
  }
  .blog__item .meta {
    margin-bottom: 7px;
  }
  .blog__item .title {
    margin-bottom: 30px;
  }
  .blog__item .read_more a {
    text-decoration: none;
    font-family: var(--hff);
    font-size: 16px;
    letter-spacing: 0.5px;
    padding-left: 100px;
    position: relative;
  }

  .blog__item .read_more a {
    font-weight: 500;
    color: var(--bc);
    text-transform: uppercase;
  }
  .blog__item .read_more span {
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
    display: inline-block;
  }
  .blog__item .read_more a:after {
    left: 0;
    width: 100px;
    height: 1px;
    content: "";
    position: absolute;
    top: 50%;
    background-color: #8d898e;
    transition: 0.3s;
  }
  .blog__item .meta p {
    margin: 0;
  }
  .blog__item .title h3 {
    margin: 0;
    font-weight: 300;
    font-size: 30px;
    letter-spacing: 0;
  }
  h3 > a {
    text-decoration: none;
    color: var(--hc);
    transition: all 0.3s ease;
    border: none;
  }

  .blog__item .image {
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 27px;
    a {
      transition: all 0.3s ease;
      border: none;
    }
    img {
      vertical-align: middle;
      max-width: 100%;
    }
  }
  .fn_cs_news .right_items .blog__item {
    height: 33.3333%;
  }
  .metaportal_fn_button.full {
    width: 100%;
    height: 80px;
    line-height: 80px;
  }
  .metaportal_fn_button {
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
  .metaportal_fn_button:before {
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    position: absolute;
    color: var(--mc1);
    content: "";
    opacity: 0.15;
    border-radius: 6px;
    box-shadow: 0 5px 20px;
  }
  .metaportal_fn_button.full {
    width: 100%;
    height: 80px;
    line-height: 80px;
  }
  .metaportal_fn_button {
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.5px;
    font-family: var(--hff);
    text-transform: uppercase;
    text-align: center;
    white-space: nowrap;
  }
  .metaportal_fn_button:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 6px;
    border: 3px solid transparent;
    background: linear-gradient(
        45deg,
        var(--mc1),
        var(--mc2),
        var(--mc1),
        var(--mc2)
      )
      border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: source-out;
    background-size: 300% 300%;
    animation: 4s infinite alternate animatedgradient;
  }
  .metaportal_fn_button span {
    position: relative;
    z-index: 5;
  }
  .fn_cs_news .bottom_part p {
    margin: 0;
    padding: 0 40px;
  }
  @media (max-width: 1040px) {
    .fn_cs_news .bottom_part p {
      padding: 0;
    }
  }

  @media (max-width: 768px) {
    .metaportal_fn_button {
      padding: 0 24px;
    }
  }
  @media (max-width: 1040px) {
    .fn_cs_news .bottom_part .left_bot {
      width: 100%;
    }
  }
  @media (max-width: 1040px) {
    .fn_cs_news .bottom_part .right_bot {
      margin-top: 20px;
      width: 100%;
    }
  }

  @media (max-width: 1040px) {
    .fn_cs_news .news_part {
      flex-direction: column;
      margin-bottom: 20px;
    }
  }
  @media (max-width: 1040px) {
    .fn_cs_news .left_items {
      width: 100%;
      margin-bottom: 20px;
    }
  }
  .fn_cs_news .right_items {
    display: flex;
    gap: 40px;
    width: 50%;
    flex-direction: column;
  }
  @media (max-width: 1040px) {
    .fn_cs_news .right_items {
      width: 100%;
      gap: 20px;
    }
  }

  @media (max-width: 1040px) {
    .fn_cs_news .bottom_part {
      flex-direction: column;
    }
  }

  .read_more a {
    vertical-align: baseline;
    background: 0 0;
    margin: 0;
    padding: 0;
  }
  .blog__item .read_more a:hover {
    color: var(--mc1);
  }
  .read_more a:hover::after {
    width: 50px; /* Adjust the desired width */
  }
  .read_more a:hover span {
    transform: translateX(-5px); /* Adjust the desired amount of translation */
    opacity: 1;
    color: #cc00ff; /* Adjust the desired color */
  }
`;

export default Blog;
