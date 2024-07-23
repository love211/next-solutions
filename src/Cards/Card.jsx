import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";
import { useNavigate } from "react-router";

const CardTemplate = () => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[65vw]">
        <Slider {...settings}>
          <div onClick={() => navigate("/template/1")}>
            <img src={card1} className="h-96 w-80 px-4" alt="" />
          </div>
          <div onClick={() => navigate("/template/2")}>
            <img src={card2} className="h-96 w-80 px-4" alt="" />
          </div>
          <div onClick={() => navigate("/template/3")}>
            <img src={card3} className="h-96 w-80 px-4" alt="" />
          </div>
          <div onClick={() => navigate("/template/4")}>
            <img src={card4} className="h-96 w-80 px-4" alt="" />
          </div>
          <div onClick={() => navigate("/template/5")}>
            <img src={card5} className="h-96 w-80 px-4" alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CardTemplate;
