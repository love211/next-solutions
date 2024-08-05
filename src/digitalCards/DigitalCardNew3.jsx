import React from "react";
import MobileWrapper from "./MobileWrapper";

import { FaInstagram, FaPaypal } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { PictureContainer, ProfileAvatar } from "@/components/custom-ui/Button";

const DigitalCardNew3 = () => {
  return (
    <MobileWrapper>
      <div
        className="w-[20rem] h-fit px-6 flex flex-col items-center gap-[1.5rem] py-[1.5rem] gap
     bg-[url(https://i.pinimg.com/564x/7e/07/07/7e07072a7950b0a559a9cef4d09a939c.jpg)] bg-cover"
      >
        <ProfileAvatar />
        <div className="w-fit h-fit flex flex-col gap-[0.5rem] text-black text-center">
          <h1 className="text-3xl font-bold">Hande Erccel</h1>
          <p>Senior Software Developer</p>
        </div>
        <div className="w-fit h-fit md:h-full flex items-center justify-center gap-[0.75rem]">
          <FaInstagram className="stroke-black fill-black  h-8 w-8" />
          <FaPaypal className="stroke-black fill-black  h-8 w-8" />
          <BsTwitterX className="stroke-black fill-black  h-8 w-8" />
        </div>
        <div className="w-fit h-fit flex flex-col gap-[1rem]">
          <PictureContainer
            bgUrl={
              "bg-[url(https://i.pinimg.com/564x/df/2e/99/df2e99142efec623a4ea44f41fc8f063.jpg)]"
            }
          />
          <PictureContainer
            bgUrl={
              "bg-[url(https://i.pinimg.com/564x/f1/cb/6e/f1cb6ebedd355aae8300b09fb01e389f.jpg)]"
            }
          />
        </div>
      </div>
    </MobileWrapper>
  );
};

export default DigitalCardNew3;
