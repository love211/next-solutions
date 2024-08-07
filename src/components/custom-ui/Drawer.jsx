import * as React from "react";
// import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
// import { Bar, BarChart, ResponsiveContainer } from "recharts";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";

export let drawerVariants = {
  medium: "70%",
  small: "50%",
  large: "80%",
};
export function CustomDrawer({
  open,
  setOpen,
  onCreate,
  title,
  description,
  content,
  variant = "medium",
}) {
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent
        className={`min-h-[${drawerVariants[variant]}] max-h-[80%] overflow-y-auto`}
      >
        <div className="w-full flex lg:flex-row flex-col h-fit">
          <DrawerHeader>
            <DrawerTitle
              className={
                "font-link-sans font-black text-center text-[clamp(28px,8vmin,56px)] tracking-tight leading-[1.05] lg:text-left text-[#1E2330]"
              }
            >
              {title}
            </DrawerTitle>
            <DrawerDescription>{description}</DrawerDescription>
            <div className="flex items-center w-full justify-center lg:justify-start">
              <Button
                className="rounded-lg w-full h-[3rem] max-w-[12rem]"
                onClick={onCreate}
              >
                Create One{" "}
              </Button>
            </div>
          </DrawerHeader>
          <div className="p-4 flex items-center justify-center">{content}</div>
          {/* <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter> */}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
