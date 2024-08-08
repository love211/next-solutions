import { PATH } from "@/routes/path";
import { User } from "lucide-react";
import { FaChartBar, FaLink, FaPalette, FaStore } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";

let sideBarItemsData = [
  { icon: FaLink, label: "Personal", link: PATH.templateForm.personalInfo },
  { icon: FaLink, label: "Links", link: PATH.templateForm.links },
  { icon: FaStore, label: "Social", link: "/shop" },
  { icon: FaPalette, label: "Appearance", link: PATH.templateForm.appearance },
  { icon: FaChartBar, label: "analytics", link: "/analytics" },
];
const SidebarItem = ({ icon: Icon, label, active, onNavigate }) => (
  <div
    className={`flex items-center space-x-2 p-4 rounded-lg ${
      active ? "bg-gray-200 text-purple-600" : "hover:bg-gray-100"
    }`}
  >
    <Icon className="w-5 h-5" />
    <span
      className={`text-sm cursor-pointer ${active ? "font-semibold" : ""}`}
      onClick={onNavigate}
    >
      {label}
    </span>
  </div>
);

export default function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location.pathname + link", location.state);
  const basePath = location.pathname.substring(
    0,
    location.pathname.indexOf("/form") + 5
  );

  const onNavigate = (link) =>
    navigate(basePath + link, { state: location.state });
  return (
    <div className="flex flex-col w-[14rem] h-[calc(100vh-1.3rem)] px-4 py-8 bg-white rounded-3xl">
      {/* Sidebar content here */}
      <h2 className="text-lg font-bold mb-4 bg-white">Sidebar</h2>
      <div className="flex flex-col bg-gray-50 p-4 rounded-3xl">
        {/* Sidebar content here */}
        {sideBarItemsData.map((item) => {
          return (
            <SidebarItem
              icon={item.icon}
              label={item.label}
              active={location.pathname === basePath + item.link}
              onNavigate={() => onNavigate(item.link)}
            />
          );
        })}
      </div>
    </div>
  );
}