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

export default function MenuPopover() {
  const navigate = useNavigate("/login");
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <MenuIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-40">
        <div className="flex flex-col gap-2">
          <Button
            onClick={() => {
              navigate("/user-generated-cards/");
            }}
          >
            {" "}
            Designs
          </Button>
          <Button>Logout</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
