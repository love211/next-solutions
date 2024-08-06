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

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];

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
        className={`min-h-[${drawerVariants[variant]}] overflow-y-auto`}
      >
        <div className="w-full flex">
          <DrawerHeader>
            <DrawerTitle
              className={
                "font-link-sans font-black text-[clamp(28px,8vmin,56px)] tracking-tight leading-[1.05] text-left text-[#1E2330]"
              }
            >
              {title}
            </DrawerTitle>
            <DrawerDescription>{description}</DrawerDescription>
            <Button className="rounded-full max-w-32" onClick={onCreate}>
              Create One{" "}
            </Button>
          </DrawerHeader>
          <div className="p-4 pb-0">{content}</div>
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
