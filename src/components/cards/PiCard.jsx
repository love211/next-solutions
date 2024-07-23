import { CiGlobe } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const PYCard = () => (
  <div className="w-[23.4375rem] h-[50.75rem] mt-4 flex flex-col">
    <div className="relative w-[23.4375rem] h-[27.3125rem] flex flex-col">
      <div className="w-[23.4375rem] h-[27.3125rem]">
        <img
          src={"https://i.pinimg.com/474x/25/9f/76/259f76bfd1bbbff232893b5288734727.jpg"}
          alt="PROFILE"
          className="w-full h-full object-cover"
        />
      </div>
      {/* <div className="absolute bottom-0 w-fit h-fit flex items-center justify-center">
        <img src={"https://i.pinimg.com/474x/29/15/2a/29152aa6a484fed99341ffd0de5f95ac.jpg"} alt="PROFILE" className="w-fit h-fit " />
      </div> */}
    </div>
    <div className="w-full h-fit max-h-[8rem] py-[0.75rem] px-[1.12rem] flex flex-col gap-[0.88rem] bg-[#132A13]">
      <p className="text-2xl text-bold text-white">Helen Wilson</p>
      <p className="text-[0.875rem] text-white">
        Loreum ipsum dolor sit amet consecturo Loreum ipsum dolor sit amet
        consecturoLoreum ipsum dolor sit amet consecturo
      </p>
    </div>
    <div className="w-full h-fit bg-[#E7F8E7] px-[1.5rem] py-[2.06rem] flex flex-col gap-[1.75rem]">
      <button className="w-full h-[2.75rem] flex items-center justify-center gap-[0.75rem] rounded-[1.25rem] bg-[#8FA855]">
        <FaPhoneAlt className="fill-white" />
        <p className="text-white">+91 7846589803</p>
      </button>
      <button className="w-full h-[2.75rem] flex items-center justify-center gap-[0.75rem] rounded-[1.25rem] bg-[#8FA855]">
        <FiMail className="stroke-white" />
        <p className="text-white">helen@nextsolution.com</p>
      </button>
      <button className="w-full h-[2.75rem] flex items-center justify-center gap-[0.75rem] rounded-[1.25rem] bg-[#8FA855]">
        <CiGlobe className="fill-white" />
        <p className="text-white">nextsolution.com</p>
      </button>
    </div>
  </div>
);

export default PYCard