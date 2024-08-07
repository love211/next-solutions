import React from "react";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define size variants using cva
const drawerSizeVariants = cva("", {
  variants: {
    size: {
      small: "h-[50%]",
      medium: "h-[80%]",
      large: "h-[100%]",
      custom: "", // Custom size can be handled via additional class or inline style
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

const DrawerWrapper = ({
  isOpen,
  onOpen,
  size = "medium",
  className,
  children,
}) => {
  // Get the drawer class based on size variant
  const drawerClass = cn(drawerSizeVariants({ size }), className);
  console.log("isOpen", drawerClass);
  return (
    <Drawer open={isOpen} onOpenChange={onOpen}>
      <DrawerContent className={drawerClass}>{children}</DrawerContent>
    </Drawer>
  );
};

export default DrawerWrapper;
