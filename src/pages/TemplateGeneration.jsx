import TemplateForm from "@/components/dialog/UserForm";
import PreviewTemplate from "@/digitalCards/PreviewTemplate";
import { User } from "lucide-react";
import { FaChartBar, FaLink, FaPalette, FaStore } from "react-icons/fa";
import { useLocation } from "react-router";

const SidebarItem = ({ icon: Icon, label, active }) => (
  <div
    className={`flex items-center space-x-2 p-4 rounded-lg ${
      active ? "bg-gray-200 text-purple-600" : "hover:bg-gray-100"
    }`}
  >
    <Icon className="w-5 h-5" />
    <span className={`text-sm cursor-pointer ${active ? "font-semibold" : ""}`}>
      {label}
    </span>
  </div>
);

function SideBar() {
  return (
    <div className="flex flex-col w-[20%] p-4 bg-white rounded-3xl sticky top-0">
      {/* Sidebar content here */}
      <h2 className="text-lg font-bold mb-4 bg-white">Sidebar</h2>
      <div className="flex flex-col bg-gray-50 p-4 rounded-3xl">
        {/* Sidebar content here */}
        <SidebarItem icon={User} label="Personal" active />
        <SidebarItem icon={FaLink} label="Links" />
        <SidebarItem icon={FaStore} label="Shop" />
        <SidebarItem icon={FaPalette} label="Appearance" />
        <SidebarItem icon={FaChartBar} label="Analytics" />
      </div>
    </div>
  );
}
const TemplateGeneration = () => {
  const location = useLocation();
  const { data } = location.state || { data: {} };

  return (
    <div className="flex justify-center items-center w-screen h-[100vh] px-2 py-2">
      <div className="flex overflow-y-scroll h-full w-full gap-4">
        <SideBar />
        <div className="flex flex-grow px-4 justify-between">
          <TemplateForm className="w-full rounded-3xl bg-white p-4 h-fit" />
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

export default TemplateGeneration;
