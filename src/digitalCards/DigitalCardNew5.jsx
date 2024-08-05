import React from "react";
import MobileWrapper from "./MobileWrapper";

import { FaInstagram, FaPaypal } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { PictureContainer, ProfileAvatar, SoftRoundedButton } from "@/components/custom-ui/Button";

const DigitalCardNew5 = () => {
  return (
    <MobileWrapper>
      <div
        className="w-[20rem] h-fit  max-h-[44.1rem] px-6 flex flex-col items-center gap-[1.5rem] py-[1.5rem] gap
     bg-[url(https://i.pinimg.com/564x/65/5a/c8/655ac8ebaa5cc7b91b1f8012b7f17a91.jpg)] bg-cover"
      >
        <ProfileAvatar />
        <div className="w-fit h-fit flex flex-col gap-[0.5rem] text-[#fff] text-center">
          <h1 className="text-2xl font-bold">Eric Sussane</h1>
          <p>An innovator and philanthrophist.</p>
        </div>
        <div className="w-fit h-fit flex flex-col gap-[1rem]">
          <div className="w-full flex flex-col items-center gap-[0.5rem]">
            <p className="text-white">Electronics Workshop</p>
            <PictureContainer
              bgUrl={
                "bg-[url(https://i.pinimg.com/564x/96/4b/6d/964b6d1fae4e7efda930d87c39736ea6.jpg)]"
              }
            />
          </div>
          <SoftRoundedButton
            name={"My Website"}
            bgColor={"#191919"}
            textColor={"#fff"}
          />
          <div className="w-full flex flex-col items-center gap-[0.5rem]">
            <p className="text-white">Office Space</p>
            <PictureContainer
              bgUrl={
                "bg-[url(https://i.pinimg.com/564x/8a/96/e7/8a96e739a78fdd21d6f5ca102f64beea.jpg)]"
              }
            />
          </div>
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

export default DigitalCardNew5;
