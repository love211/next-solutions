import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import EditableText from "./atom";
import { Button } from "@/components/ui/button";
import {
  FaChartBar,
  FaImage,
  FaLock,
  FaSearch,
  FaShareAlt,
  FaStar,
  FaTrash,
} from "react-icons/fa";
import { Trash } from "lucide-react";

const LinkCard = ({
  value,
  onSave,
  onVisiblityToggle,
  isHeadlineCard = false,
}) => {
  // console.log("onSave", onSave);
  return (
    <Card className="w-full py-3 flex flex-col gap-[0.5rem] shadow-lg rounded-2xl">
      <div className="w-full flex items-center justify-between">
        <div className="w-full flex flex-col ">
          <CardHeader className="flex flex-row items-center justify-between gap-1">
            <EditableText
              onSave={onSave}
              value={value}
              name="title"
              key={value._id}
            />
          </CardHeader>
          {!isHeadlineCard && (
            <CardContent className="flex justify-start gap-1 items-center">
              <EditableText onSave={onSave} value={value} name="url" />
            </CardContent>
          )}
        </div>
        <div className="px-2">
          <Switch
            checked={value?.visibility}
            onCheckedChange={onVisiblityToggle}
          />
        </div>
      </div>

      <CardFooter
        className={`w-full h-fit items-center flex ${
          !isHeadlineCard ? "justify-between" : "justify-end"
        } items-center h-fit`}
      >
        {!isHeadlineCard ? (
          <div className="w-full h-full flex items-center justify-between gap-[0.75rem]">
            <div className="w-full flex items-center justify-start gap-[0.75rem]">
              <Button variant="ghost" size="icon">
                <FaSearch />
              </Button>
              <Button variant="ghost" size="icon">
                <FaImage />
              </Button>
              <Button variant="ghost" size="icon">
                <FaStar />
              </Button>
              <Button variant="ghost" size="icon">
                <FaLock />
              </Button>
              <Button variant="ghost" size="icon">
                <FaChartBar />
              </Button>
            </div>
            <div className="w-full flex items-center justify-end gap-[0.75rem]">
              <Button variant="ghost" size="icon">
                <FaShareAlt className="fill-blue-800" />
              </Button>
              <Button variant="ghost" size="icon">
                <FaTrash className="fill-red-500" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="w-fit min-w-fit flex items-center justify-end">
            <Button variant="ghost" size="icon">
              <FaTrash />
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default LinkCard;
