import React, { useRef } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from "prop-types";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";

const ImageSlider = ({ images }) => {
    const settings = {
        className: "center",
        centerMode: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows : false,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    centerMode : false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    centerMode : false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode : false
                }
            }
        ]
    };

    const arrowRef = useRef(null);
    return (
        <div>
            <Slider ref={arrowRef}
                className={settings.className}
                centerMode={settings.centerMode}
                dots={settings.dots}
                infinite={settings.infinite}
                speed={settings.speed}
                slidesToShow={settings.slidesToShow}
                slidesToScroll={settings.slidesToScroll}
                initialSlide={settings.initialSlide}
                arrows={settings.arrows}
                responsive={settings.responsive}>
                {images.map((image) => (
                    <div key={image.id}>
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </Slider>
            <div>
                <button type="button"
                onClick={() => arrowRef.current.slickPrev()}
                className='back'>
                    <span className='circle' />
                    <FiArrowLeftCircle className='icon'/>
                    <span className='circle' />
                </button>
                <hr />
                <button type="button"
                onClick={() => arrowRef.current.slickNext()}
                className='next'>
                    <span className='circle' />
                    <FiArrowRightCircle className='icon'/>
                    <span className='circle' />
                </button>
            </div>
        </div>
    ) 
}

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    })
  ).isRequired
};
export default ImageSlider;