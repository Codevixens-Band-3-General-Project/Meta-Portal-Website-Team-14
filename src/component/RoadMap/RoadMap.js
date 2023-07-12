import React, { useState, useEffect } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './RoadMap.css'

const RoadMap = () => {
    const cards = [
        {
            id: 1,
            phase: 'Phase 01',
            date: 'October 09, 2022',
            title: 'Mini Game Launch For Community',
            description: 'Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.',
        },
        {
            id: 2,
            phase: 'Phase 02',
            date: 'October 17, 2022',
            title: 'New Set #12 is Coming Up',
            description: 'Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.',
        },
        {
            id: 3,
            phase: 'Phase 03',
            date: 'October 028, 2022',
            title: 'Metaverse 3.0 Launch',
            description: 'Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.',
        },
        {
            id: 4,
            phase: 'Phase 04',
            date: 'November 11, 2022',
            title: 'Female Set #20 is Coming Up',
            description: 'Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.',
        },
        {
            id: 5,
            phase: 'Phase 05',
            date: 'November 23, 2022',
            title: 'Mini Game Lounch For Community',
            description: 'Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.',
        },
        {
            id: 6,
            phase: 'Phase 06',
            date: 'December 02, 2022',
            title: 'Mini Game Launch For Community',
            description: 'Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.',
        },
        {
            id: 7,
            phase: 'Phase 07',
            date: 'January 14, 2023',
            title: 'Mini Game Launch For Community',
            description: 'Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.',
        },
        {
            id: 8,
            phase: 'Phase 08',
            date: 'January 28, 2023',
            title: 'Mini Game Launch For Community',
            description: 'Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.',
        },
        {
            id: 9,
            phase: 'Phase 09',
            date: 'February 12, 2023',
            title: 'Mini Game Launch For Community',
            description: 'Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.',
        },
    ];

    return (
        <section id="roadmap">
             <div className="container">
                <h3 className="fn__maintitle big" data-text="RoadMap" data-align="center">RoadMap</h3>
                 <div className="fn_cs_roadmap">
                    <div className="step_holder">
						<div className="step_in" style={{width: '100%'}} />
					</div>
                    <div className="slider_holder">
                        <div className="swiper-container swiper-container-horizontal">
                            <div
                    className="swiper-wrapper">
                    <Slider
                    infinite={false}
                    speed={500}
                    slidesToShow={4}
                    slidesToScroll={1}
                    autoplay
                    autoplaySpeed={3000}
                    arrows={false}
                    className="swiper-slide"                
                    >
                        {cards.map((card) => (
                            <div key={card.id} className="item">
                                <span className="icon" />
                                <span className="phase">{card.phase}</span>
                                <div className="item_in">
                                    <p className="date">{card.date}</p>
                                    <h3 className="card-title">{card.title}</h3>
                                    <p className="desc">{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                  </div>
                        </div>
                    </div>
                 </div>
             </div>
        </section>
    );
}

export default RoadMap;