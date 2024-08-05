import React from "react";
import MobileWrapper from "./MobileWrapper";
import { FaInstagram, FaPaypal } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { PictureContainer, PillButton, ProfileAvatar } from "@/components/custom-ui/Button";

const DigitalCardNew1 = () => {
  return (
    <MobileWrapper>
      <div
        className="w-[20rem] h-[45rem] px-6 flex flex-col items-center gap-[1.5rem] py-[1.5rem] gap
     bg-[url(https://i.pinimg.com/564x/1b/b1/3f/1bb13f4acb5b69fb41bc5974c6dc8248.jpg)] bg-cover"
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
          <PillButton name={"Menu"} bgColor={"#191919"} textColor={"black"} />
          <PictureContainer
            bgUrl={
              "bg-[url(https://i.pinimg.com/564x/0b/e1/ff/0be1ff0fd9c2769d148377657ff0e608.jpg)]"
            }
          />
          <PillButton
            name={"Locations"}
            bgColor={"#191919"}
            textColor={"black"}
          />
          <PillButton
            name={"Locations"}
            bgColor={"#191919"}
            textColor={"black"}
          />
        </div>
      </div>
    </MobileWrapper>
  );
};

export default DigitalCardNew1;
