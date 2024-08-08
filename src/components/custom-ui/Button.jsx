import { cn } from "@/lib/utils";
import React from "react";

export const ProfileAvatar = () => {
  return (
    <div className="min-w-[6rem] min-h-[6rem] flex items-center justify-center rounded-full border border-white bg-slate-500">
      <p className="text-white font-bold">HArMOnize</p>
    </div>
  );
};

export const PillButton = ({ name, bgColor, textColor }) => {
  return (
    <button
      className={`w-[15rem] h-[3rem] border-2 border-[#A1A1A1] bg-[${bgColor}] text-[${textColor}] font-bold shadow-md rounded-full`}
    >
      {name}
    </button>
  );
};

export const SoftRoundedButton = ({ name, bgColor, textColor }) => {
  return (
    <button
      className={`w-[15rem] h-[3rem] border-2 border-[#fff] bg-[${bgColor}] shadow-[10_5px_5px_5px_rgba(255,255,255,1)] text-[${textColor}] font-bold
    hover:bg-[rgba(255,255,255,0.5)] hover:scale-105 shadow-md rounded-lg transition-all duration-150 `}
    >
      {name}
    </button>
  );
};

export const PictureContainer = ({ bgUrl }) => {
  return (
    <div
      className={`relative group w-[15rem] h-[8rem] border-2  border-[#A1A1A1] ${bgUrl} overflow-hidden bg-cover font-bold shadow-md rounded-[0.75rem]
    `}
    >
      <div
        className="absolute h-full w-full flex items-center justify-center bg-[rgba(255,255,255,0.5)] top-0 left-0
    group-hover:translate-y-0 translate-y-[100%] transition-all duration-200"
      >
        <p className="text-[#191919]">Click to view more..</p>
      </div>
    </div>
  );
};
