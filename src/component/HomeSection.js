import React from "react";
import Images from "./Images";
import ImageSlider from "./ImageSlider";

const HomeSection = () => (
    <div className="container">
        <h3>META LEGENDS</h3>
        <ImageSlider images={Images} />
    </div>
)

export default HomeSection;