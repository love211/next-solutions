import Menu from "@/components/MenuPopover";

import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
  return (
    <div>
      {/* <div className="flex w-full h-20 justify-end px-[50px] py-2">
        <Menu />
      </div> */}
      <Outlet />
    </div>
  );
};

export default PrivateLayout;
