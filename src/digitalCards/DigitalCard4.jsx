import React from "react";
import img2 from "../assets/aCard.png";
import img3 from "../assets/men.png";
import frame1 from "../assets/frame1.png";
import frame2 from "../assets/frame2.png";
import frame3 from "../assets/frame3.png";
import MobileWrapper from "./MobileWrapper";

const DigitalCard4 = () => {
  return (
    <div className="flex h-screen justify-center items-center w-full ">
      {/* <div className="h-full w-full"> */}
      <MobileWrapper>
        <div className="w-[359.40px] bg-black h-fit">
          <div className="absolute left-0 w-full h-full flex flex-col items-center justify-center">
            <div className="absolute top-[7.5%]">
              <img src={img3} />
            </div>
            <div className="flex flex-col lg:w-[359.40px] w-[65%] items-center justify-center bg-white bg-opacity-10 mt-[10rem] lg:mt-7 ">
              <span className="text-2xl font-bold gradient-text">
                Johnathan Doe
              </span>
              <span className="text-white text-base">Marketing Expert</span>
              <br />
              <span className="text-white text-base text-center w-full">
                I’m a highly skilled marketing profession with over 7 years of
                industry experience.
              </span>
            </div>
            <div className="flex flex-col gap-4 mt-10">
              <div className="flex gap-4 text-center items-center">
                <img src={frame3} />
                <span className="text-white">nextsolution.com</span>
              </div>
              <div className="flex gap-4 text-center items-center">
                <img src={frame2} />
                <span className="text-white">+91 7846589803</span>
              </div>
              <div className="flex gap-4 text-center items-center">
                <img src={frame1} />
                <span className="text-white">helen@nextsolution.com</span>
              </div>
            </div>
          </div>
          <img
            className="w-full  "
            src={img2} // Replace with actual image path
            alt="Profile"
          />
        </div>
      </MobileWrapper>
      {/* </div> */}
    </div>
  );
};

export default DigitalCard4;
