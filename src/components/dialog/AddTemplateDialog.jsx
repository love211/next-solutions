import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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

import useMediaQuery from "@/hooks/useMediaQuery";
import AddUserButton from "../AddUserButton";
import TemplateForm from "./UserForm";
import PreviewTemplate from "../../digitalCards/PreviewTemplate";
export function DrawerDialogDemo({ buttonTitle = "Create One" }) {
  const [open, setOpen] = React.useState(false);
  const [preview, setPreview] = React.useState(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const handleClose = () => {
    setPreview(null);
    setOpen(false);
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {/* <Button variant="outline">{buttonTitle}</Button> */}
          <AddUserButton />
        </DialogTrigger>
        <DialogContent
          className={`sm:max-w-[900px] max-h-[90%]`}
          onClose={handleClose}
        >
          {/* <DialogContent className="sm:max-w-[425px] max-h-[700px] lg:max-h-full"> */}
          <DialogHeader>
            <DialogTitle>Create Business Card</DialogTitle>
            <DialogDescription>
              Make changes to your card here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-row gap-2 h-full overflow-y-auto">
            <TemplateForm
              className={"px-4 overflow-y-auto h-full"}
              onClose={handleClose}
              setPreview={setPreview}
              isPreview={preview ? true : false}
            />
            {preview && <PreviewTemplate data={preview} />}
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Create</Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[600px]">
        <DrawerHeader className="text-left">
          <DrawerTitle>Create Business Card</DrawerTitle>
          <DrawerDescription>
            Make changes to your card here. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
        <TemplateForm
          className="px-4 max-h-[500px] overflow-y-auto"
          onClose={handleClose}
        />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
