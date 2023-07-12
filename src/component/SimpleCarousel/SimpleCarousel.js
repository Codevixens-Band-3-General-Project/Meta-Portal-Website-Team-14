/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect } from "react";
import $ from "jquery";
import "jquery.ripples";
import Button from "../Button/Button";
import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpg";
import img4 from "../../images/4.jpg";
import img5 from "../../images/5.jpg";
import img6 from "../../images/6.jpg";
import img7 from "../../images/7.jpg";
import "swiper/css";
import "swiper/css/autoplay";
import "./SimpleCarousel.css";

const SimpleCarousel = ({ water }) => {
  useEffect(() => {
    $(".water").ripples({
      resolution: 256,
      perturbance: 0.01,
    });

    return () => {
      // Cleanup the ripples effect when the component is unmounted
      $(".water").ripples("destroy");
    };
  }, []);

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
    <section id="hero4">
      <div className={water ? "fn_cs_hero_slider water" : "fn_cs_hero_slider"}>
        <div className="left_part">
          <h3 className="fn__maintitle big" data-text="Meta Legends">
            Meta Legends
          </h3>
          <p>
            Meta Legends represent a collection of 17,000 legends categorized by
            level of rarity and generated with hundreds of elements. The Legends
            are stored as ERC-721 tokens on the Ethereum blockchain and hosted
            on IPFS.
          </p>
          <Button text="Buy On Opensea" />
        </div>
        <div className="slider_part">
          <div className="swiper-container swiper-container-horizontal">
            <div className="swiper-wrapper">
              <Swiper
                slidesPerView={4}
                centeredSlides
                grabCursor
                loop
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="simple">
                {data}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleCarousel;
