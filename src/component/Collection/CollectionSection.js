import React, { useEffect, useState } from "react";
import './CollectionSection.css';
import img1 from "../Images/1.jpg";
import img2 from "../Images/2.jpg";
import img3 from "../Images/3.jpg";
import img4 from "../Images/4.jpg";
import img5 from "../Images/5.jpg";
import img6 from "../Images/6.jpg";
import img7 from "../Images/7.jpg";
import img8 from "../Images/8.jpg";

const CollectionSection = () => {

    const [i, setI] = useState(0);
    const imageSources = [img1, img2, img3, img4, img5, img6, img7, img8];

  useEffect(() => {
    const interval = setInterval(() => {
      setI((prevI) => (prevI + 1) % imageSources.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  

  return (
    <>
    <section className="collection">
    <div className="container">
        <h3 className="fn__maintitle big">our collection</h3>
        <div className="image-container">
        <div className="flip-container-top">
          <div className="flipper big">
            <div className="front">
              <img
                className="front-image"
                src={imageSources[i]}
                alt="Slideshow"
              />
            </div>
            <div className="back">
              <img
                className="back-image"
                src={imageSources[(i + 1) % imageSources.length]}
                alt="Slideshow"
              />
            </div>
          </div>
          <div className="flipper small">
            <div className="front">
              <img
                className="front-image"
                src={imageSources[(i + 2) % imageSources.length]}
                alt="Slideshow"
              />
            </div>
            <div className="back">
              <img
                className="back-image"
                src={imageSources[(i + 1) % imageSources.length]}
                alt="Slideshow"
              />
            </div>
          </div>
          <div className="flipper big">
            <div className="front">
              <img
                className="front-image"
                src={imageSources[(i + 1) % imageSources.length]}
                alt="Slideshow"
              />
            </div>
            <div className="back">
              <img
                className="back-image"
                src={imageSources[(i + 1) % imageSources.length]}
                alt="Slideshow"
              />
            </div>
          </div>
          <div className="flipper small">
            <div className="front">
              <img
                className="front-image"
                src={imageSources[(i + 4) % imageSources.length]}
                alt="Slideshow"
              />
            </div>
            <div className="back">
              <img
                className="back-image"
                src={imageSources[(i + 1) % imageSources.length]}
                alt="Slideshow"
              />
            </div>
          </div>
          </div>
          <div className="flip-container-bottom">
          <div className="flipper small">
            <div className="front">
              <img
                className="front-image"
                src={imageSources[(i + 3) % imageSources.length]}
                alt="Slideshow"
              />
            </div>
            <div className="back">
              <img
                className="back-image"
                src={imageSources[(i + 1) % imageSources.length]}
                alt="Slideshow"
              />
            </div>
          </div>
          <div className="flipper big">
            <div className="front">
              <img
                className="front-image"
                src={imageSources[(i + 7) % imageSources.length]}
                alt="Slideshow"
              />
            </div>
            <div className="back">
              <img
                className="back-image"
                src={imageSources[(i + 1) % imageSources.length]}
                alt="Slideshow"
              />
            </div>
          </div>
          <div className="flipper small">
            <div className="front">
              <img
                className="front-image"
                src={imageSources[(i + 6) % imageSources.length]}
                alt="Slideshow"
              />
            </div>
            <div className="back">
              <img
                className="back-image"
                src={imageSources[(i + 1) % imageSources.length]}
                alt="Slideshow"
              />
            </div>
          </div>
          <div className="flipper big">
            <div className="front">
              <img
                className="front-image delayed-image"
                src={imageSources[(i + 5) % imageSources.length]}
                alt="Slideshow"
              />
            </div>
            <div className="back">
              <img
                className="back-image"
                src={imageSources[(i + 1) % imageSources.length]}
                alt="Slideshow"
              />
            </div>
            </div>
    </div>
    </div>
    <div className="description">
                <p>Meta Legends represent a collection of 17,000 legends categorized by level of rarity and generated with hundreds of elements. The Legends are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.</p>
                <a href="collection.html" className="desc_button">
                    <span className="button_span">see all collection</span>
                </a>
            </div>
    </div>
    </section>
    <div className="fn_cs_section_divider">
			<div className="divider">
				<span className="short" />
				<span className="long" />
				<span className="short" />
			</div>
		</div>
    </>
  );
}

export default CollectionSection;