import useAuth from "@/auth/useAuth";
import MenuPopover from "@/components/MenuPopover";
import useMediaQuery from "@/hooks/useMediaQuery";
import { LogOutIcon } from "lucide-react";
import { Outlet, useNavigate } from "react-router-dom";

const PrivateLayout = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <div>
      <div className="flex w-full h-20 justify-end px-[50px] py-2">
        {isDesktop ? (
          <button
            onClick={() => {
              // if (isAuthenticated) {
              //   logout();
              // }
              // navigate("/login");
            }}
            className="h-16 w-44 rounded-[44px] border-2 border-[#7096D1] text-[#334EAC] font-bold"
          >
            {/* {isAuthenticated ? "Logout" : "Login"} */}
            <MenuPopover />
          </button>
        ) : (
          <LogOutIcon />
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default PrivateLayout;
