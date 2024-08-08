import React from "react";
import { IoMdMail } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { RiTwitchLine } from "react-icons/ri";
import { DiStackoverflow } from "react-icons/di";

const Cardd02 = () => {
  return (
    <div className="w-full max-w-[25.872rem] h-fit flex flex-col rounded-[1.5rem] overflow-clip bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.6)]">
      <div
        className="w-full relative h-[19rem] px-10 flex flex-col gap-[1rem] items-center justify-start py-6
        bg-[url(https://i.pinimg.com/564x/f9/12/16/f91216afcd5d87423c537421f81c48d1.jpg)] filter text-center bg-cover bg-center
        before:w-full before:absolute before:top-0 before:left-0 before:!h-full before:px-0 before:py-0 before:bg-[rgba(0,0,0,0.2)]"
      >
        <div className="w-[5.2rem] h-[5.2rem] rounded-full bg-transparent border-2 border-white z-10">
          <img
            src="https://1536d3e04534b566.demo.carrd.co/assets/images/image01.jpg?v=809dd194"
            alt="Side picture of Cayce Pollard"
            className="h-20 w-20 rounded-full p-1"
          />
        </div>
        <p className="text-sm text-white z-10">System Operator</p>
        <p className="text-3xl text-white font-semibold font-serif z-10">Kara Smith</p>
        <p className="text-xs text-white z-10">Aenean sed adipiscing diam donec risus quis varius quam quisque vel pretium lectus quam veroeros</p>
      </div>
      <div className="w-full h-fit px-4 py-[1.2rem] flex justify-between items-center gap-[0.5rem]">
        <div className="w-full flex justify-start gap-[0.5rem]">
        <button className="w-9 h-9 border border-slate-200 rounded-full flex items-center justify-center">
            <DiStackoverflow className="h-5 w-5 fill-[#686868]" />
          </button>
          <button className="w-9 h-9 border border-slate-200 rounded-full flex items-center justify-center">
            <IoPhonePortraitOutline className="h-4 w-4 stroke-[#686868]" />
          </button>
          <button className="w-9 h-9 border border-slate-200 rounded-full flex items-center justify-center">
            <RiTwitchLine className="h-5 w-5 fill-[#686868]" />
          </button>
        </div>
        <div className="w-full flex items-center justify-end">
          <button className="w-fit min-w-fit px-4 py-2 flex items-center gap-[0.5rem] text-xs text-white rounded-full bg-[#39A2A8] "><IoMdMail fill="white"/> Email Me</button>
        </div>
      </div>
    </div>
  );
};

export default Cardd02;