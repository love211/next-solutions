import React from "react";
import User from "../assets/user.png";
import { BsTelephone } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";

const DigitalCard3 = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white">
      <div
        className="relative w-full max-w-[24.75rem] h-[51.75rem] flex flex-col justify-end gap-[3.81rem]
       py-[4rem] bg-cardTech bg-black"
      >
        <div className="absolute w-[12rem] h-[12rem] right-[2.4rem] top-[4.8rem]">
          <img src={User} alt="" />
        </div>
        <div className="w-full h-fit px-[4.188rem] flex flex-col gap-[0.88rem]">
          <div className="w-full flex flex-col gap-[0.5rem] text-center text-white">
            <p className="font-serif text-[1.875rem] font-bold">Helen Wilson</p>
            <p className="text-2xl text-[#F0EBE5]">Co-Founder</p>
          </div>
          <div className="w-full flex flex-col items-center gap-[0.69rem]">
            <hr className="w-[4.0625rem] bg-[#DCD0BE]" />
            <p className="text-center text-sm text-[#F0EBE5]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
              ipsum ac quam accumsan suscipit.
            </p>
          </div>
        </div>
        <div className="w-full px-[4.188rem] flex flex-col gap-[0.88rem] text-white">
          <button className="w-full h-[2.937rem] flex items-center justify-center gap-[0.88rem] rounded-[1.125rem] bg-[rgba(198,66,95,0.58)]">
            <BsTelephone className="fill-white" /> <p>+91 7846589803</p>
          </button>
          <button className="w-full h-[2.937rem] flex items-center justify-center gap-[0.88rem] rounded-[1.125rem] bg-[rgba(198,66,95,0.58)]">
            <MdOutlineMailOutline className="stroke-white" />{" "}
            <p>helen@nextsolution.com</p>
          </button>
          <button className="w-full h-[2.937rem] flex items-center justify-center gap-[0.88rem] rounded-[1.125rem] bg-[rgba(198,66,95,0.58)]">
            <CiGlobe className="stroke-white" /> <p>nextsolution.com</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalCard3;
