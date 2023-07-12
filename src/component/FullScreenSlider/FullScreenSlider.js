/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-unresolved */
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import img1 from "../../images/f1.jpg";
import img2 from "../../images/f2.jpg";
import img3 from "../../images/f3.jpg";
import img4 from "../../images/f4.jpg";
import img5 from "../../images/f5.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./FullScreenSlider.css";

const FullScreenSlider = () => {
  const swiperRef = useRef();

  const imgs = [
    { id: "1", img: img1, text: "Meta Legend #4354" },
    { id: "2", img: img2, text: "Meta Legend #4355" },
    { id: "3", img: img3, text: "Meta Legend #4356" },
    { id: "4", img: img4, text: "Meta Legend #4357" },
    { id: "5", img: img5, text: "Meta Legend #4358" },
  ];

  const data = imgs.map((element) => (
    <SwiperSlide key={element.id}>
      <div
        key={element.id}
        className="title"
        data-swiper-parallax="-300"
        style={{ backgroundImage: `url(${element.img})` }}>
        <h3 className="fn__maintitle big">{element.text}</h3>
      </div>
    </SwiperSlide>
  ));

  return (
    <section id="full_slider">
      <div className="fn_cs_full_slider">
        <Swiper
          speed={600}
          parallax
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop
          modules={[Parallax, Pagination, Autoplay]}
          className="fullScreen">
          <div
            slot="container-start"
            className="parallax-bg"
            data-swiper-parallax="-23%"
          />
          {data}
        </Swiper>

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
    </section>
  );
};

export default FullScreenSlider;
