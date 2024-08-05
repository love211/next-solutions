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
      className={`w-[15rem] h-[3rem] border-2 border-[#A1A1A1] bg-[${bgColor}] text-[${textColor}]  font-bold shadow-md rounded-lg`}
    >
      {name}
    </button>
  );
};

export const PictureContainer = ({ bgUrl }) => {
  return (
    <div
      className={`w-[15rem] h-[12rem] border-2  border-[#A1A1A1] ${bgUrl}  bg-cover  font-bold shadow-md rounded-[0.75rem]`}
    ></div>
  );
};
