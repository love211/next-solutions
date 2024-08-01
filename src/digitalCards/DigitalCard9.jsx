import React from "react";
import MobileWrapper from "./MobileWrapper";
import { FaInstagram, FaPaypal } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { getCardData, handleOpenLink } from "@/util/cardHelper";

const DigitalCard9 = ({ data, isPreview = false }) => {
  const { name, designation, company, about, phone, email, weblink } =
    getCardData(data);
  return (
    <MobileWrapper>
      <div
        className="w-[20rem] h-full px-6 flex flex-col items-center gap-[1.5rem] py-8 gap
     bg-[url(https://i.pinimg.com/564x/21/e8/90/21e8900137d9c5cd6f4626acc9eba018.jpg)]"
      >
        <div className="w-[6rem] h-[6rem] flex items-center justify-center rounded-full border border-white bg-slate-500">
          <p className="text-[#fff] font-bold">HArMOnize</p>
        </div>
        <div className="w-fit h-fit flex flex-col gap-[0.5rem] text-[#191919] text-center">
          <h1 className="text-3xl font-bold">{name}</h1>
          <p>{designation}</p>
        </div>
        <div className="w-fit h-fit flex flex-col gap-[1rem]">
          <button
            className="w-[15rem] h-[3rem] border-2 border-[#A1A1A1] bg-[#f6f4ec] font-bold text-[#191919] shadow-md rounded-full"
            onClick={() => handleOpenLink()}
          >
            Menu
          </button>
          <button
            className="w-[15rem] h-[3rem] border-2 border-[#A1A1A1] bg-[#f6f4ec] font-bold text-[#191919] shadow-md rounded-full"
            onClick={() => handleOpenLink()}
          >
            Order online
          </button>
          <button
            className="w-[15rem] h-[3rem] border-2 border-[#A1A1A1] bg-[#f6f4ec] font-bold text-[#191919] shadow-md rounded-full"
            onClick={() => handleOpenLink()}
          >
            Our Story
          </button>
          <button
            className="w-[15rem] h-[3rem] border-2 border-[#A1A1A1] bg-[#f6f4ec] font-bold text-[#191919] shadow-md rounded-full"
            onClick={() => handleOpenLink()}
          >
            Locations
          </button>
        </div>
        <div className="w-fit h-fit flex items-center justify-center gap-[0.75rem] pb-11">
          <FaInstagram className="stroke-white fill-white  h-8 w-8" />
          <FaPaypal className="stroke-white fill-white  h-8 w-8" />
          <BsTwitterX className="stroke-white fill-white  h-8 w-8" />
        </div>
      </div>
    </MobileWrapper>
  );
};

export default DigitalCard9;
