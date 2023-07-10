import "./SimpleCarousel.css";
import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpg";
import img4 from "../../images/4.jpg";
import img5 from "../../images/5.jpg";
import img6 from "../../images/6.jpg";
import img7 from "../../images/7.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import Button from "../Button/Button";

export default function SimpleCarousel() {
  return (
    <section id="hero4">
      <div className="fn_cs_hero_slider">
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
                centeredSlides={true}
                grabCursor={true}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="simple"
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
          </div>
        </div>
      </div>
    </section>
  );
}
