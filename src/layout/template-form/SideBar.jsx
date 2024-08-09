import { PATH } from "@/routes/path";
import { User } from "lucide-react";
import { BsFileEarmarkPerson } from "react-icons/bs";
import { FaConnectdevelop, FaLink } from "react-icons/fa";
import { IoAnalytics } from "react-icons/io5";
import { RiColorFilterLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router";

export let sideBarItemsData = [
  { icon: BsFileEarmarkPerson, label: "Personal", link: PATH.templateForm.personalInfo },
  { icon: FaLink, label: "Links", link: PATH.templateForm.links },
  { icon: FaConnectdevelop, label: "Social", link: "/shop" },
  { icon: RiColorFilterLine, label: "Appearance", link: PATH.templateForm.appearance },
  { icon: IoAnalytics, label: "analytics", link: "/analytics" },
];
const SidebarItem = ({ icon: Icon, label, active, onNavigate }) => (
  <div
    className={`w-full flex items-center gap-2 px-4 h-[2.5rem] relative`}
  >
    <div className={`w-full h-full flex items-center justify-start rounded-xl px-3 gap-[0.75rem] ${
      active ? " bg-gray-200 text-purple-600 before:w-[0.25rem] before:absolute before:" : "hover:bg-gray-100"
    }`}>
      <Icon className="w-5 h-5" />
      <p
        className={`text-sm cursor-pointer capitalize ${active ? "font-bold text-base" : ""}`}
        onClick={onNavigate}
      >
        {label}
      </p>
    </div>
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
    <div className="flex flex-col w-[14rem] h-[calc(100vh-1.3rem)] py-8 bg-white rounded-3xl shadow-[0_0_10px_0_rgba(0,0,0,0.2)]">
      {/* Sidebar content here */}
      <div className="w-full px-4 flex items-start">
        <h2 className="text-lg font-bold mb-4 bg-white">Sidebar</h2>
      </div>
      <div className="w-full flex flex-col gap-[0.8rem]">
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