import Menu from "@/components/MenuPopover";
import CardSlider from "../Cards/CardSlider";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import DigitalCardNew1 from "@/digitalCards/DigitalCardNew1";
import card1 from "../assets/41.png";
import card2 from "../assets/new1.png";
import card3 from "../assets/new2.png";
import card4 from "../assets/image4.png";
import card5 from "../assets/image2.png";
import card6 from "../assets/new/image01.png";
import card7 from "../assets/new/image02.png";

const Category = [
  "Fashion",
  "Real State",
  "Professional Baseballer",
  "Realtor",
  "Healthcare",
];
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-screen h-full px-[3rem] flex flex-col items-center overflow-y-auto pb-[2rem]">
      <header
        id="header"
        className="sticky top-[2rem] w-full h-[7rem] flex items-center justify-end px-6 py-2
        border-[#1B1D1A] rounded-[10px] bg-white z-50"
      >
        <div className="w-full h-full flex justify-between gap-4">
          <button
            className="w-[12rem] h-full text-[#1E2330]"
            onClick={() => {
              navigate("/user-generated-cards/");
            }}
          >
            {" "}
            My Templates
          </button>
          {/* <button
            className="w-[12rem] h-full text-[#1E2330]"
            onClick={() => {
              logout();
              navigate("/login");
            }}
          >
            Logout
          </button> */}
          <Menu />
        </div>
      </header>
      <div className="w-full h-auto flex flex-col items-center gap-[3rem] mt-[5rem]">
        <div className="w-full md:w-[80%] flex flex-col gap-[0.62rem] items-center text-center">
          <h1 className="p-4 text-[2rem] text-[#1B1D1A] font-extrabold lg:text-[5rem]">
            Your Digital Identity, Redefined
          </h1>
          <p className="text-[1.875rem] text-[#1E2330]">
            Networking for the Modern Age, Tailored to Every Profession,
            Everywhere.{" "}
          </p>
        </div>
        <div className="w-full h-auto flex justify-center gap-[3rem] ">
          {/* Browsed By */}
          <div className="w-fit max-w-[25rem] h-fit flex flex-col gap-[2rem]">
            <h2 className="text-2xl text-[#1B1D1A] font-medium">Browsed by</h2>
            <div className="w-full flex flex-wrap gap-[0.5rem]">
              {Category.map((data, index) => (
                <div
                  key={index}
                  className="w-fit px-8 py-1 rounded-full text-[#1E2330] text-lg border border-[#193c2b]"
                >
                  <p>{data}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="w-full h-fit grid grid-cols-3 gap-[3rem]">
              <div className="relative w-[14.68rem] h-fit max-h-[42rem] overflow-hidden group rounded-[37px]">
                <img src={card1} className="" alt="" />
                <div className="absolute top-0 left-0 w-full h-full hidden group-hover:flex items-center justify-center bg-[#ffffffcc]">
                  <button className="w-[60%] h-[3rem] border rounded-lg border-[#686868]">
                    Create Me
                  </button>
                </div>
              </div>
              <div className="reltive w-[14.68rem] h-fit max-h-[42rem] ">
                <img src={card2} className="" alt="" />
                <div className="absolute top-0 left-0 w-full h-full hidden group-hover:flex items-center justify-center bg-[#ffffffcc]">
                  <button className="w-[60%] h-[3rem] border rounded-lg border-[#686868]">
                    Create Me
                  </button>
                </div>
              </div>
              <div className="relative w-[14.68rem] h-fit max-h-[42rem] ">
                <img src={card3} className="" alt="" />
                <div className="absolute top-0 left-0 w-full h-full hidden group-hover:flex items-center justify-center bg-[#ffffffcc]">
                  <button className="w-[60%] h-[3rem] border rounded-lg border-[#686868]">
                    Create Me
                  </button>
                </div>
              </div>
              <div className="w-[14.68rem] h-fit max-h-[42rem] ">
                <img src={card3} className="" alt="" />
                <div className="absolute top-0 left-0 w-full h-full hidden group-hover:flex items-center justify-center bg-[#ffffffcc]">
                  <button className="w-[60%] h-[3rem] border rounded-lg border-[#686868]">
                    Create Me
                  </button>
                </div>
              </div>
              <div className="w-[14.68rem] h-fit max-h-[42rem] ">
                <img src={card3} className="" alt="" />
                <div className="absolute top-0 left-0 w-full h-full hidden group-hover:flex items-center justify-center bg-[#ffffffcc]">
                  <button className="w-[60%] h-[3rem] border rounded-lg border-[#686868]">
                    Create Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <CardSlider /> */}
      </div>
    </div>
  );
};

export default Home;
