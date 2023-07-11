// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpg";
import img4 from "../../images/4.jpg";
import img5 from "../../images/5.jpg";
import img6 from "../../images/6.jpg";
import img7 from "../../images/7.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay } from "swiper/modules";
import "./BendedCarousel.css";

export default function BendedCarousel() {
  return (
    <section id="home2">
      <div className="canvas_bg">
        <canvas id="space" height="926.156" width="866"></canvas>
      </div>

      <div className="container">
        <h3 className="fn__maintitle big">Meta Legends</h3>

        <div className="fn_cs_desc">
          <p>
            Meta Legends represent a collection of 17,000 legends categorized by
            level of rarity and generated with hundreds of elements. The Legends
            are stored as ERC-721 tokens on the Ethereum blockchain and hosted
            on IPFS.
          </p>
        </div>
      </div>

      <div
        className="frenify_cards_gallery"
        data-initial-width="540"
        data-ratio="0.925"
      >
        <Swiper
          effect={"cards"}
          centeredSlides={true}
          slidesPerView={"auto"}
          cardsEffect={{
            perSlideRotate: 30,
            rotate: true,
            slideShadows: false,
            stretch: 100,
            depth: 150,
            modifier: 1.5,
          }}
          grabCursor={false}
          modules={[EffectCards, Autoplay]}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="bendedSwiper"
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
    </section>
  );
}
