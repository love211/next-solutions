import PreviewTemplate from "@/digitalCards/PreviewTemplate";
import { Outlet, useLocation } from "react-router";
import SideBar from "./SideBar";

const TemplateGenerationLayout = () => {
  const location = useLocation();
  const { data } = location.state || { data: {} };
  return (
    <div className="flex justify-center items-center w-screen h-[100vh] px-2 py-2">
      <div className="flex overflow-y-scroll h-full w-full gap-4">
        <SideBar />
        <div className="flex flex-grow px-4 justify-between">
          <Outlet />
        </div>
        <div className="sticky top-0">
          <PreviewTemplate
            data={{}}
            cardId={data}
            customClass="mt-10 w-[90%]"
          />
        </div>
      </div>
    </div>
  );
};

export default TemplateGenerationLayout;
