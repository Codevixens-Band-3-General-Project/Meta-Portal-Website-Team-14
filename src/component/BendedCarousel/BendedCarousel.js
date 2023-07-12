/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import { EffectCards, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpg";
import img4 from "../../images/4.jpg";
import img5 from "../../images/5.jpg";
import img6 from "../../images/6.jpg";
import img7 from "../../images/7.jpg";
import "swiper/css";
import "swiper/css/effect-cards";
import "./BendedCarousel.css";

const BendedCarousel = ({ background }) => {
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
    <section id="home2">
      {background}

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
        data-ratio="0.925">
        <Swiper
          effect="cards"
          centeredSlides
          slidesPerView="auto"
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
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="bendedSwiper">
          {data}
        </Swiper>
      </div>
    </section>
  );
};

export default BendedCarousel;
