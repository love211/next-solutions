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

const LinkCard = ({ value, onSave, isHeadlineCard = false }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [headerContent, setHeaderContent] = useState(
    "Custom software development & website design servi..."
  );
  const [urlLink, setUrlLink] = useState("http://next-solutions.com");

  //   const handleUrl = (e) => setUrlLink(e.target.value);
  //   const onLinkSave = (value) => setUrlLink(value);
  return (
    <Card className="flex flex-col shadow-lg rounded-ee-3xl">
      <div className="flex "></div>
      <CardHeader className="flex flex-row items-center justify-between gap-1">
        <EditableText onSave={onSave} value={value} />
        <div>
          <Switch />
        </div>
      </CardHeader>
      {!isHeadlineCard && (
        <CardContent className="flex justify-start gap-1 items-center">
          <EditableText onSave={onSave} value={urlLink} />
        </CardContent>
      )}

      <CardFooter
        className={`flex ${
          !isHeadlineCard ? "justify-between" : "justify-end"
        } items-center h-fit`}
      >
        {!isHeadlineCard ? (
          <>
            <div className="flex space-x-3">
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
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <FaShareAlt />
              </Button>
              <Button variant="ghost" size="icon">
                <FaTrash />
              </Button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-end space-x-2">
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
