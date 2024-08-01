import useAuth from "@/auth/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MenuIcon } from "lucide-react";
import { useNavigate } from "react-router";

export default function Menu() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  return isAuthenticated ? (
    <button className="h-[2.5rem] lg:[3rem] w-fit min-w-fit px-4 py-2 rounded-[12px] border-2 border-[#7096D1] text-[#334EAC] font-bold">
      <Popover>
        <PopoverTrigger asChild>
          {/* <Button variant="outline" className="bg-none"> */}
          <MenuIcon />
          {/* </Button> */}
        </PopoverTrigger>
        <PopoverContent className="max-w-40">
          <div className="flex flex-col gap-2">
            <Button
              onClick={() => {
                navigate("/user-generated-cards/");
              }}
            >
              {" "}
              My Templates
            </Button>
            <Button
              onClick={() => {
                logout();
                navigate("/login");
              }}
            >
              Logout
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </button>
  ) : (
    <button
      onClick={() => {
        navigate("/login");
      }}
      className=" h-[2.5rem] lg:[3rem] w-44 rounded-[44px] border-2 border-[#7096D1] text-[#334EAC] font-bold"
    >
      Login
    </button>
  );
}
