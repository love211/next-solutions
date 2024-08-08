import React from "react";
import { IoLogoInstagram, IoPhonePortraitOutline } from "react-icons/io5";
import { RiTwitchLine } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";

const Cardd03 = () => {
  return (
    <div className="w-full max-w-[20.872rem] h-fit flex flex-col rounded-[1.5rem] overflow-clip bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.6)]">
      <div
        className="w-full relative h-fit px-10 flex flex-col gap-[1rem] items-start justify-start py-8
      bg-[#3C414D] filter text-left bg-cover bg-center
      before:w-full before:absolute before:top-0 before:left-0 before:!h-full before:px-0 before:py-0 before:bg-[rgba(0,0,0,0.2)]"
      >
        <div className="w-fit h-fit rounded-full bg-transparent border-4 border-[#FACEBB] z-10">
          <img
            src="https://37186d62534e64fb.demo.carrd.co/assets/images/image05.jpg?v=10344a96"
            alt="Side picture of Cayce Pollard"
            className="h-20 w-20 rounded-full object-cover"
          />
        </div>
        <p className="text-3xl text-[rgba(242,230,225,0.988)] font-semibold font-serif z-10">
          Lexa Smith
        </p>
        <p className="text-xs text-[rgba(232,209,200,0.741)] z-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eos ab <a className="text-[#FFF2ED] underline">est eaque nam tempora</a> consectetur cumque iste.
        </p>
        <div className="w-full flex items-center justify-start">
          <button className="w-fit min-w-fit px-4 py-2 flex items-center gap-[0.5rem] text-xs text-[#FACEBB] rounded-full bg-[rgba(255,255,255,0.11)] ">
            <CiMail className="stroke-2 stroke-[#FACEBB]" /> Email Me
          </button>
        </div>
      </div>
      <div className="w-full h-fit px-4 py-[1.2rem] flex justify-between items-center gap-[0.5rem] bg-[#424752] ">
        <div className="w-full flex justify-start gap-[0.5rem]">
          <button className="w-9 h-9 rounded-full flex items-center justify-center bg-[#3C414D]">
            <FaTiktok className="h-5 w-5 fill-[#FACEBB]" />
          </button>
          <button className="w-9 h-9 rounded-full flex items-center justify-center bg-[#3C414D]">
            <IoLogoInstagram className="h-5 w-5 fill-[#FACEBB]" />
          </button>
          <button className="w-9 h-9 rounded-full flex items-center justify-center bg-[#3C414D]">
            <RiTwitchLine className="h-5 w-5 fill-[#FACEBB]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cardd03;