/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-unresolved */
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpg";
import img4 from "../../images/4.jpg";
import img5 from "../../images/5.jpg";
import img6 from "../../images/6.jpg";
import img7 from "../../images/7.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./3DCarousel.css";
import Button from "../button/Button";

const Carousel3D = () => {
  const swiperRef = useRef();

  const imgs = [
    { id: "1", img: img1 },
    { id: "2", img: img2 },
    { id: "3", img: img3 },
    { id: "4", img: img4 },
    { id: "5", img: img5 },
    { id: "6", img: img6 },
    { id: "7", img: img7 },
  ];

  const data = imgs.map((element) => (
    <SwiperSlide key={element.id}>
      <img src={element.img} alt="" />
    </SwiperSlide>
  ));

  return (
    <section id="home" className="dcarouselCont">
      <div className="container">
        <h3
          className="fn__maintitle big carousel-header"
          data-text="Meta Legends"
          data-align="center">
          Meta Legends
        </h3>

        <div className="fn_cs_slider" data-responsive="on">
          <div className="slider_top">
            <Swiper
              effect="coverflow"
              centeredSlides
              slidesPerView="auto"
              coverflowEffect={{
                rotate: -20,
                slideShadows: false,
              }}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, EffectCoverflow, Pagination]}
              className="Swiper3d"
              loop
              delay={3000}>
              {data}
            </Swiper>
          </div>
          <div className="slider_nav">
            <Link
              to=""
              className="prev"
              onClick={() => swiperRef.current?.slidePrev()}>
              <span className="circle" />
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
              <span className="circle" />
            </Link>
            <Link
              to=""
              className="next"
              onClick={() => swiperRef.current?.slideNext()}>
              <span className="circle" />
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
              <span className="circle" />
            </Link>
          </div>
        </div>

        <div className="fn_cs_desc">
          <p>
            Meta Legends represent a collection of 17,000 legends categorized by
            level of rarity and generated with hundreds of elements. The Legends
            are stored as ERC-721 tokens on the Ethereum blockchain and hosted
            on IPFS.
          </p>
          <Link to="https://opensea.io">
            <Button text="BUY ON OPENSEA" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Carousel3D;
