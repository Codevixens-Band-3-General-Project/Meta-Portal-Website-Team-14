import "./Home.css";
import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpg";
import img4 from "../../images/4.jpg";
import img5 from "../../images/5.jpg";
import img6 from "../../images/6.jpg";
import img7 from "../../images/7.jpg";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useRef } from "react";

export default function Home() {
  const swiperRef = useRef();

  return (
    <section id="home">
      <div className="container">
        <h3 className="fn__maintitle big">Meta Legends</h3>

        <div className="fn_cs_slider" data-responsive="on">
          <div className="slider_top">
            <Swiper
              effect={"coverflow"}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: -20,
              }}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, EffectCoverflow, Pagination]}
              className="mySwiper"
              loop={true}
              delay={3000}
            >
              <SwiperSlide>
                <img src={img1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img3} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img4} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img5} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img6} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img7} />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="slider_nav">
            <Link
              to=""
              className="prev"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <span className="circle"></span>
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
              <span className="circle"></span>
            </Link>
            <Link
              to=""
              className="next"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <span className="circle"></span>
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
              <span className="circle"></span>
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
          <a
            href="https://opensea.io/"
            className="metaportal_fn_button"
            target="_blank"
          >
            <span>Buy On Opensea</span>
          </a>
        </div>
      </div>
    </section>
  );
}
