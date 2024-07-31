import React from "react";
import MobileWrapper from "./MobileWrapper";
import UserImg from "../assets/user.png";
import { BsTelephone } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import { MdInsertLink, MdOutlineMailOutline } from "react-icons/md";
import { DrawerDialogDemo } from "@/components/dialog/AddTemplateDialog";
import { getCardData, handleOpenLink } from "@/util/cardHelper";

const CardWave = ({ data, isPreview = false }) => {
  console.log("data", data);
  const { name, designation, company, about, phone, email, weblink } =
    getCardData(data);
  return (
    <MobileWrapper>
      <div className="w-[19rem] h-[75rem] flex items-start justify-center wave-bg pt-[5.8rem]">
        {/* 1st Section */}
        <div className="w-full px-4 flex flex-col items-center justify-start gap-[2.5rem]">
          <div className="w-full flex flex-col items-center gap-[1.5rem]">
            {!isPreview && <DrawerDialogDemo />}
            <div className="w-[10.875rem] h-[10.875rem] border-[#fff] boder-4">
              <img
                src={UserImg}
                alt=""
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="w-full flex flex-col items-center text-center text-white">
              <p className="text-2xl font-extrabold drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                {name}
              </p>
              <p>{designation}</p>
              <p>{company}</p>
            </div>
          </div>
          <div
            className="w-full h-[9.0625rem] p-[1.25rem] flex flex-col items-center gap-[0.5rem] text-white text-center
       bg-[rgba(24,64,95,0.50)] rounded-[1.25rem]"
          >
            <p className="font-bold">About Me</p>
            <p>{about}</p>
          </div>
          <div
            className="w-full h-[9.9375rem] flex flex-col items-center text-white text-center
       bg-[rgba(24,64,95,0.50)] rounded-[1.25rem] overflow-clip"
          >
            <button className="w-full h-[3.3125rem] flex items-start">
              <div className="w-[3rem] h-full flex items-center justify-center bg-[#abccc9]">
                <BsTelephone />
              </div>
              <div className="w-full h-full px-4 flex items-center justify-start bg-[rgba(51,81,114,0.3)]">
                <p className="text-white">{phone}</p>
              </div>
            </button>
            <button className="w-full h-[3.3125rem] flex items-start">
              <div className="w-[3rem] h-full flex items-center justify-center bg-[#abccc9]">
                <MdOutlineMailOutline />
              </div>
              <div
                className="w-full h-full px-4 flex items-center justify-start bg-[rgba(51,81,114,0.3)]"
                onClick={() => handleOpenLink("https://www.nextsolution.net/")}
              >
                <p className="text-white">{email}</p>
              </div>
            </button>
            <button className="w-full h-[3.3125rem] flex items-start">
              <div className="w-[3rem] h-full flex items-center justify-center bg-[#abccc9]">
                <CiGlobe />
              </div>
              <div
                className="w-full h-full px-4 flex items-center justify-start bg-[rgba(51,81,114,0.3)]"
                onClick={() => handleOpenLink("https://www.nextsolution.net/")}
              >
                <p className="text-white">{weblink}</p>
              </div>
            </button>
          </div>
          <div
            className="w-full p-[1.25rem] flex flex-col items-center gap-[1.25rem] bg-[rgba(24,64,95,0.50)]
          rounded-[1.25rem]"
          >
            <div className="w-full max-w-[15.875rem] flex flex-col gap-[0.5rem] text-center text-white">
              <p className="text-2xl text-bold">Web Links</p>
              <p className="text-sm text-center text-pretty">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                eu ipsum ac quam accumsan suscipit.
              </p>
            </div>
            <button className="w-full  h-[3rem] px-[0.75rem] flex justify-start items-center gap-[0.69rem] rounded-[2.375rem] border-[0.5px] border-[#fff]">
              <div className="min-w-[1.875rem] min-h-[1.875rem] rounded-full flex items-center justify-center border-[0.5px] border-[#fff]">
                <MdInsertLink className="fill-white" />
              </div>
              <div className="w-full flex flex-col gap-[0.12rem] text-white">
                <p className="text-sm font-bold">Article Title</p>
                <p className="text-xs">Sub title</p>
              </div>
            </button>
            <button className="w-full  h-[3rem] px-[0.75rem] flex justify-start items-center gap-[0.69rem] rounded-[2.375rem] border-[0.5px] border-[#fff]">
              <div className="min-w-[1.875rem] min-h-[1.875rem] rounded-full flex items-center justify-center border-[0.5px] border-[#fff]">
                <MdInsertLink className="fill-white" />
              </div>
              <div className="w-full flex flex-col gap-[0.12rem] text-white">
                <p className="text-sm font-bold">Article Title</p>
                <p className="text-xs">Sub title</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </MobileWrapper>
  );
};

export default CardWave;
