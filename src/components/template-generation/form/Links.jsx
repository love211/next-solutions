import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Links = () => {
  const [open, setOpen] = useState(false);
  console.log('links')
  return (
    <div className="flex flex-col w-full">
      <button className="w-full min-h-[48px] bg-blue-800 text-white" onClick={() => setOpen(true)}>
        Add Links
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Enter URL</Label>
            <Input type="text" id="url" />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Links;
