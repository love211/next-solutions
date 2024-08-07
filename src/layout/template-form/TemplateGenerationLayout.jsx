import PreviewTemplate from "@/digitalCards/PreviewTemplate";
import { Outlet, useLocation } from "react-router";
import SideBar from "./SideBar";

const TemplateGenerationLayout = () => {
  const location = useLocation();
  const { data } = location.state || { data: {} };
  return (
    <div className="w-screen px-2 py-2 flex">
      <div className="w-fit h-full max-h-screen hidden lg:flex sticky top-2">
        <SideBar />
      </div>
      <div className="flex flex-grow px-4 justify-between">
        <Outlet />
      </div>
      <div className="h-full sticky top-2 hidden lg:block">
        <PreviewTemplate data={{}} cardId={data} customClass=" w-[100%]" />
      </div>
    </div>
  );
};

export default TemplateGenerationLayout;