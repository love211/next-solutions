import MobileWrapper from "./MobileWrapper";
import React, { useState } from "react";
import UserImg from "../assets/user.png";
import { BsTelephone } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import { MdInsertLink, MdOutlineMailOutline } from "react-icons/md";
import AddUserButton from "../components/AddUserButton";
import { DrawerDialogDemo } from "@/components/dialog/AddTemplateDialog";
import { Link } from "react-router-dom";
import { getCardData, handleOpenLink } from "@/util/cardHelper";
import { insertZeroWidthSpace } from "@/util/commonFn";
import { TooltipCustom } from "@/components/Tooltip";

const PreviewTemplate = ({ data }) => {
  const { name, designation, company, about, phone, email, weblink } =
    getCardData(data);

  return (
    <div className="flex max-h-[65%]">
      <MobileWrapper>
        <div className="w-[20rem] h-[75rem] flex items-start justify-center cheque-bg pt-[5.8rem]">
          {/* 1st Section */}
          <div className="w-full flex flex-col items-center justify-start gap-[2.5rem]">
            <div className="w-full flex flex-col items-center gap-[1.5rem]">
              {/* <AddUserButton onClick={() => setOpen(true)} /> */}
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
            bg-[rgba(6,76,122,1)]"
            >
              <p className="font-bold">About Me</p>
              <p>{about}</p>
            </div>
            <div
              className="w-full h-[9.9375rem]  flex flex-col items-center text-white text-center
            bg-[#B9DBD8]"
            >
              <button className="w-full h-[3.3125rem] px-4 flex items-start border-b border-b-[rgba(51,81,114,0.30)] overflow-clip">
                <div className="w-[3rem] h-full flex items-center justify-center bg-[rgba(51,81,114,0.3)] ">
                  <BsTelephone className="fill-[rgba(3,6,45,1)]" />
                </div>
                <div className="w-full h-full px-4 flex items-center justify-start">
                  <p className="text-black">{phone}</p>
                </div>
              </button>
              <button className="w-full h-[3.3125rem] px-4  flex items-start border-b border-b-[rgba(51,81,114,0.30)]">
                <div className="w-[3rem] h-full flex items-center justify-center bg-[rgba(51,81,114,0.3)]">
                  <MdOutlineMailOutline className="fill-[rgba(3,6,45,1)]" />
                </div>
                <div
                  className="w-full h-full px-4 flex items-center justify-start"
                  onClick={() =>
                    handleOpenLink("https://www.nextsolution.net/")
                  }
                >
                  <p className="text-black">{email}</p>
                </div>
              </button>
              <button className="w-full h-[3.3125rem]  px-4 flex items-start border-b border-b-[rgba(51,81,114,0.30)]">
                <div className="w-[3rem] h-full flex items-center justify-center bg-[rgba(51,81,114,0.3)]">
                  <CiGlobe className="fill-[rgba(3,6,45,1)]" />
                </div>
                <div
                  className="w-full h-full px-4 flex items-center justify-start"
                  onClick={() =>
                    handleOpenLink("https://www.nextsolution.net/")
                  }
                >
                  <TooltipCustom
                    msg={weblink}
                    element={
                      <p className="text-black break-words max-w-80" >
                        {console.log(
                          "insertZeroWidthSpace(weblink)",
                          insertZeroWidthSpace(weblink),
                          weblink
                        )}
                        {insertZeroWidthSpace(weblink)}
                      </p>
                    }
                  />
                  {/* <p className="text-black break-words" title={weblink}>
                    {console.log(
                      "insertZeroWidthSpace(weblink)",
                      insertZeroWidthSpace(weblink),
                      weblink
                    )}
                    {insertZeroWidthSpace(weblink)}
                  </p> */}
                </div>
              </button>
            </div>
            <div
              className="w-full p-[1.25rem] flex flex-col items-center gap-[1.25rem] bg-[#064C7A]
            "
            >
              <div className="w-full max-w-[15.875rem] flex flex-col gap-[0.5rem] text-center text-white">
                <p className="text-2xl text-bold">Web Links</p>
                <p className="text-sm text-center text-pretty">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  eu ipsum ac quam accumsan suscipit.
                </p>
              </div>
              <button
                className="w-full  h-[3rem] px-[0.75rem] flex justify-start items-center gap-[0.69rem] rounded-[0.5rem] border-[0.5px]
               border-[#fff] bg-[rgba(255,255,255,0.12)]"
              >
                <div className="min-w-[1.875rem] min-h-[1.875rem] rounded-[0.5rem] flex items-center justify-center border-[0.5px] border-[#fff] bg-[#447EAB]">
                  <MdInsertLink className="fill-white" />
                </div>
                <div className="w-full flex flex-col gap-[0.12rem] text-white">
                  <p className="text-sm font-bold">Article Title</p>
                  <p className="text-xs">Sub title</p>
                </div>
              </button>
              <button
                className="w-full  h-[3rem] px-[0.75rem] flex justify-start items-center gap-[0.69rem]
              rounded-[0.5rem] border-[0.5px] border-[#fff] bg-[rgba(255,255,255,0.12)]"
              >
                <div
                  className="min-w-[1.875rem] min-h-[1.875rem] rounded-[0.5rem] flex items-center justify-center
                bg-[#447EAB] border-[0.5px] border-[#fff]"
                >
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
        {/* <button>Create one</button> */}
      </MobileWrapper>
    </div>
  );
};

export default PreviewTemplate;
