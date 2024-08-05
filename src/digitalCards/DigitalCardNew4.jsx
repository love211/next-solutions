import React from "react";
import MobileWrapper from "./MobileWrapper";

import { FaInstagram, FaPaypal } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { PictureContainer, ProfileAvatar, SoftRoundedButton } from "@/components/custom-ui/Button";

const DigitalCArdNew4 = () => {
  return (
    <MobileWrapper>
      <div
        className="w-[20rem] h-fit lg:h-full xl:h-[41.1rem] max-h-[41.1rem] px-6 flex flex-col items-center gap-[1.5rem] py-[1.5rem] gap
     bg-[url(https://i.pinimg.com/564x/c7/11/b5/c711b5b320ceb364b7ed459986cafb52.jpg)] bg-cover"
      >
        <ProfileAvatar />
        <div className="w-fit h-fit flex flex-col gap-[0.5rem] text-[#fff] text-center">
          <h1 className="text-2xl font-bold">Eric Sussane</h1>
          <p>An innovator and philanthrophist.</p>
        </div>
        <div className="w-fit h-fit flex flex-col gap-[1rem]">
          <SoftRoundedButton
            name={"My Store"}
            bgColor={"#191919"}
            textColor={"#fff"}
          />
          <div className="w-full flex flex-col items-center gap-[0.5rem]">
            <p className="text-white">How Galaxy Work</p>
            <PictureContainer
              bgUrl={
                "bg-[url(https://i.pinimg.com/736x/54/da/bc/54dabc06686452f2aaa2c18806882406.jpg)]"
              }
            />
          </div>
          <SoftRoundedButton
            name={"My Website"}
            bgColor={"#191919"}
            textColor={"#fff"}
          />
          <SoftRoundedButton
            name={"Locations"}
            bgColor={"#191919"}
            textColor={"#fff"}
          />
        </div>
        <div className="w-fit h-fit flex items-center justify-center gap-[0.75rem]">
          <FaInstagram className="stroke-[#fff] fill-[#fff]  h-8 w-8" />
          <FaPaypal className="stroke-[#fff] fill-[#fff]  h-8 w-8" />
          <BsTwitterX className="stroke-[#fff] fill-[#fff]  h-8 w-8" />
        </div>
      </div>
    </MobileWrapper>
  );
};

export default DigitalCArdNew4;
