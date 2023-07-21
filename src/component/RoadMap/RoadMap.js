/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import data from "./data";
import "swiper/css";
import "swiper/css/autoplay";
import "./roadMap.css";

const RoadMap = () => (
  <section id="roadmap">
    <div className="container">
      <h3 className="fn__maintitle big" data-text="RoadMap" data-align="center">
        RoadMap
      </h3>

      <div className="fn_cs_roadmap">
        <div className="step_holder">
          <div className="step_in" style={{ width: "100%" }} />
        </div>
        <div className="slider_holder">
          <div className="swiper-container swiper-container-horizontal">
            <div className="swiper-wrapper">
              <Swiper
                slidesPerView="auto"
                centeredSlides
                grabCursor
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="roadmap">
                {data.map((element) => (
                  <SwiperSlide key={element.id}>
                    <div className="item">
                      <span className="icon" />
                      <span className="phase">{element.phase}</span>
                      <div className="item_in">
                        <p className="date">{element.date}</p>
                        <h3 className="card-title">{element.title}</h3>
                        <p className="desc">{element.description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default RoadMap;
