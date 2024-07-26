import { FaCaretRight, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import MobileWrapper from "./MobileWrapper";
import profile from "../assets/img1.png";
import { BsBrowserEdge } from "react-icons/bs";
import { DrawerDialogDemo } from "@/components/dialog/AddTemplateDialog";
import { handleOpenLink } from "./CheckCard";
const Article = () => (
  <div className="flex gap-4 w-full card-article justify-center items-center">
    <div className="bg-[#8FA855] h-12 w-12 flex items-center justify-center rounded-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
      >
        <path
          d="M4.4 12.5C4.4 10.79 5.79 9.4 7.5 9.4H11.5V7.5H7.5C4.74 7.5 2.5 9.74 2.5 12.5C2.5 15.26 4.74 17.5 7.5 17.5H11.5V15.6H7.5C5.79 15.6 4.4 14.21 4.4 12.5ZM8.5 13.5H16.5V11.5H8.5V13.5ZM17.5 7.5H13.5V9.4H17.5C19.21 9.4 20.6 10.79 20.6 12.5C20.6 14.21 19.21 15.6 17.5 15.6H13.5V17.5H17.5C20.26 17.5 22.5 15.26 22.5 12.5C22.5 9.74 20.26 7.5 17.5 7.5Z"
          fill="white"
        />
      </svg>
    </div>
    <div className="flex flex-col w-[70%]">
      <p>Article Title</p>
      <p>Sub title</p>
    </div>
    <div>
      <FaCaretRight />
    </div>
  </div>
);
const DigitalCard6 = () => {
  return (
    <MobileWrapper>
      <div className="flex flex-col max-w-[24.313rem]">
        <div className="relative">
         
          <div>
            <img src={profile} className="w-full" />
          </div>
          <div className="absolute w-[85%] z-[1] right-0 left-0 mx-auto bottom-[34px] bg-green-900 bg-opacity-50 p-[20px] text-center text-white gap-5">
            <div className="flex flex-col gap-[6px]">
              <h4 className="text-2xl font-bold capitalize">helen Wilson </h4>
              <h6 className="text-[16px] font-normal"> Marketing Manager</h6>
            </div>
            <p className="break-words text-[14px] font-normal">
              Loreum ipsum dolor sit amet consecturo Loreum ipsum dolor sit amet
              consecturoLoreum ipsum dolor sit amet consecturo
            </p>
          </div>
        </div>

        <div className="flex flex-col break-words bg-[#132A13] px-[18px] text-white py-[24px]">
          <h5 className="text-center text-white font-work-sans font-bold capitalize text-xl">
            Web links{" "}
          </h5>
           {/* <DrawerDialogDemo /> */}
          <p className="text-center">
            Loreum ipsum dolor sit amet consecturo Loreum ipsum dolor sit amet
            consecturoLoreum ipsum dolor sit amet consecturo
          </p>
          <div className="flex flex-col">
            <Article />
            <Article />
          </div>
        </div>
        <div className=" bg-[#132A13] text-white flex px-4 items-center justify-center">
          <div className="gap-8 w-full justify-start items-start bg-gradient-to-r from-green-900 to-green-800 p-2 mb-5 rounded-lg">
            <div
              className="flex items-center justify-center gap-2"
              onClick={() => handleOpenLink("https://www.nextsolution.net/")}
            >
              <div>
                <FaPhoneAlt />
              </div>
              <p>+91 7846589803</p>
            </div>
            <div
              className="flex items-center justify-center gap-2"
              onClick={() => handleOpenLink("https://www.nextsolution.net/")}
            >
              <div>
                <FaRegEnvelope />
              </div>
              <p>helen@nextsolution.com</p>
            </div>
            <div
              className="flex items-center justify-center gap-2"
              onClick={() => handleOpenLink("https://www.nextsolution.net/")}
            >
              <div>
                <BsBrowserEdge />
              </div>
              <p>nextsolution.com</p>
            </div>
          </div>
        </div>
      </div>
    </MobileWrapper>
  );
};

export default DigitalCard6;
