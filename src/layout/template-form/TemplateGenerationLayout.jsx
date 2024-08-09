import PreviewTemplate from "@/digitalCards/PreviewTemplate";
import { Outlet, useLocation } from "react-router";
import SideBar, { sideBarItemsData } from "./SideBar";
import CardImage from "../../assets/variant1.webp";
import { IoShareSocialOutline } from "react-icons/io5";

const TemplateGenerationLayout = () => {
  const location = useLocation();
  const { data } = location.state || { data: {} };
  return (
    <div className="w-screen flex">
      <div className="w-fit h-full max-h-screen hidden lg:flex sticky top-2 left-2">
        <SideBar />
      </div>
      <div className="lg:basis-[45%] w-full flex flex-col items-center gap-[1rem] lg:px-4 justify-between border-r-2 py-2">
        {/* Mobile Header */}
        <div className="w-full h-fit px-2 py-2 flex-col flex lg:hidden bg-white">
          <div className="w-full flex py-2  items-center justify-between ">
            <p className="text-[#3d3c3c] text-2xl text-bold shadow-sm italic">Next Solution</p>
            <button className="w-fit min-h-fit px-3 py-2 border rounded-lg bg-">
              <IoShareSocialOutline />
            </button>
          </div>
          <div className="w-full h-fit px-2 py-2 flex justify-between bg-white">
            {sideBarItemsData.map((item) =>(
            <button className="w-fit flex flex-col items-center gap-[0.25rem]"
              onNavigate={() => onNavigate(item.link)}>
            <item.icon className="w-6 h-6"/>
              <p>{item.label}</p>
            </button>
            ))}
          </div>
        </div>
        <div className="w-full px-6 flex flex-col gap-[1rem]">
        {/* Card */}
          <div className="w-full h-[12rem] px-6 py-6 flex items-center gap-[1rem] bg-[#264f1a] rounded-[1.5rem]">
            <div className="w-full h-full flex flex-col justify-between gap-[1rem]">
              <div className="w-full h-fit flex justify-start max-w-[20rem]">
                <p className="text-[1.3rem] xl:text-[1.3rem] text-[#d2e722]">
                  Add your Digital card to get you more clicks.
                </p>
              </div>
              <button className="w-full max-w-[13rem] min-h-[2.8rem] text-sm md:text-base rounded-full border border-[#d2e722] text-[#d2e722]">
                Share it now
              </button>
            </div>
            <div className="min-w-fit h-full hidden sm:flex">
              <img src={CardImage} className="w-full h-full" />
            </div>
          </div>
          <Outlet />
        </div>
      </div>
      <div className="lg:basis-[45%] w-full h-fit py-6 lg:flex flex-col items-center justify-center sticky top-2 hidden">
        <h2 className="text-3xl text-[#474545]">Preview Of the Template</h2>
        <PreviewTemplate
          data={{}}
          cardId={data}
          customClass="w-[100%] scale-[0.65]"
        />
      </div>
    </div>
  );
};

export default TemplateGenerationLayout;