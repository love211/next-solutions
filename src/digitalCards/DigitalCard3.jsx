import React from "react";
import User from "../assets/user.png";
import { BsTelephone } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import MobileWrapper from "./MobileWrapper";

const DigitalCard3 = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white">
    <MobileWrapper>
      <div
        className="relative w-full max-w-[24.75rem] h-[69.785rem] flex flex-col justify-end gap-[3.18rem]
     py-[4rem] bg-cardTech bg-black"
      >
        <div className="absolute w-[12rem] h-[12rem] right-[2.5rem] top-[4.8rem]">
          <img src={User} alt="" />
        </div>
        <div className="w-full h-fit px-[4.188rem] flex flex-col gap-[0.88rem]">
          <div className="w-full flex flex-col gap-[0.5rem] text-center text-white">
            <p className="font-serif text-[1.875rem] font-bold">
              Helen Wilson
            </p>
            <p className="text-2xl text-[#F0EBE5]">Co-Founder</p>
          </div>
          <div className="w-full flex flex-col items-center gap-[0.69rem]">
            <hr className="w-[4.0625rem] bg-[#DCD0BE]" />
            <p className="text-center text-sm text-[#F0EBE5]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              eu ipsum ac quam accumsan suscipit.
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
        <div className="w-full px-[2.288rem] flex flex-col items-center gap-[1.25rem]">
          <div className="w-full max-w-[15.875rem] flex flex-col gap-[0.5rem] text-center text-white">
            <p className="text-2xl text-bold">Web Links</p>
            <p className="text-sm text-center text-pretty">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              eu ipsum ac quam accumsan suscipit.
            </p>
          </div>
          <div className="w-full flex flex-col gap-[1.25rem]">
            <div className="w-full  h-[3rem] px-[0.75rem] flex justify-start items-center gap-[0.69rem] rounded-[2.375rem] border-[0.5px] border-[#fff]">
              <div className="min-w-[1.875rem] min-h-[1.875rem] rounded-full flex items-center justify-center border-[0.5px] border-[#fff]">
                <MdInsertLink className="fill-white" />
              </div>
              <div className="w-full flex flex-col gap-[0.12rem] text-white">
                <p className="text-sm font-bold">Article Title</p>
                <p className="text-xs">Sub title</p>
              </div>
            </div>
            <div className="w-full  h-[3rem] px-[0.75rem] flex justify-start items-center gap-[0.69rem] rounded-[2.375rem] border-[0.5px] border-[#fff]">
              <div className="min-w-[1.875rem] min-h-[1.875rem] rounded-full flex items-center justify-center border-[0.5px] border-[#fff]">
                <MdInsertLink className="fill-white" />
              </div>
              <div className="w-full flex flex-col gap-[0.12rem] text-white">
                <p className="text-sm font-bold">Article Title</p>
                <p className="text-xs">Sub title</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </MobileWrapper>
  </div>















  );
};

export default DigitalCard3;
