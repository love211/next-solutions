import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card3 from "./cards/Card3";
import Card4 from "./cards/Card4";
import Card5 from "./cards/Card5";
import Card6 from "./cards/Card6";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <Card3 />
      </div>
      <div>
        <Card4 />
      </div>
      <div>
        <Card5 />
      </div>
      <div>
        <Card6 />
      </div>
    </Slider>
  );
}
