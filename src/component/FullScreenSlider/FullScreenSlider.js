import { useRef } from "react";
import img1 from "../../images/f1.jpg";
import img2 from "../../images/f2.jpg";
import img3 from "../../images/f3.jpg";
import img4 from "../../images/f4.jpg";
import img5 from "../../images/f5.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "./FullScreenSlider.css";

// import required modules
import { Parallax, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

export default function FullScreenSlider() {
  const swiperRef = useRef();

  return (
    <section id="full_slider">
      <div className="fn_cs_full_slider">
        <Swiper
          speed={600}
          parallax={true}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Parallax, Pagination, Autoplay]}
          className="fullScreen"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            data-swiper-parallax="-23%"
          ></div>
          <SwiperSlide>
            <div
              className="title "
              data-swiper-parallax="-300"
              style={{ backgroundImage: `url(${img1})` }}
            >
              <h3 className="fn__maintitle big" data-text="Meta Legend #4356">
                Meta Legend #4354
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="title"
              data-swiper-parallax="-300"
              style={{ backgroundImage: `url(${img2})` }}
            >
              <h3 className="fn__maintitle big" data-text="Meta Legend #4356">
                Meta Legend #4355
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="title"
              data-swiper-parallax="-300"
              style={{ backgroundImage: `url(${img3})` }}
            >
              <h3 className="fn__maintitle big" data-text="Meta Legend #4356">
                Meta Legend #4356
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="title"
              data-swiper-parallax="-300"
              style={{ backgroundImage: `url(${img4})` }}
            >
              <h3 className="fn__maintitle big" data-text="Meta Legend #4356">
                Meta Legend #4357
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="title"
              data-swiper-parallax="-300"
              style={{ backgroundImage: `url(${img5})` }}
            >
              <h3 className="fn__maintitle big" data-text="Meta Legend #4356">
                Meta Legend #4358
              </h3>
            </div>
          </SwiperSlide>
        </Swiper>

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
    </section>
  );
}
