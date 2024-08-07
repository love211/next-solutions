import DrawerWrapper from "@/components/custom-ui/DrawerWrapper";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Drawer } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Edit, PencilIcon, SaveIcon } from "lucide-react";
import { useState } from "react";
import {
  FaChartBar,
  FaEdit,
  FaImage,
  FaLock,
  FaSearch,
  FaShareAlt,
  FaStar,
  FaTrash,
} from "react-icons/fa";

const EditableText = ({ value, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex items-center">
      {isEditing ? (
        <Input
          value={value}
          onChange={handleInputChange}
          className="flex-grow"
        />
      ) : (
        <span className="font-semibold">{value}</span>
      )}
      <Button
        variant="ghost"
        size="icon"
        onClick={isEditing ? handleSaveClick : handleEditClick}
      >
        {isEditing ? (
          <SaveIcon size={15} style={{ marginBottom: "4px" }} />
        ) : (
          <PencilIcon size={15} style={{ marginBottom: "4px" }} />
        )}
      </Button>
    </div>
  );
};
const CustomCard = ({ isFooter = true }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [headerContent, setHeaderContent] = useState(
    "Custom software development & website design servi..."
  );
  const [urlLink, setUrlLink] = useState("http://next-solutions.com");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setHeaderContent(e.target.value);
  };

  const handleUrl = (e) => setUrlLink(e.target.value);
  return (
    <Card className="flex flex-col shadow-lg rounded-ee-3xl">
      <div className="flex "></div>
      <CardHeader className="flex flex-row items-center justify-between gap-1">
        <EditableText value={headerContent} onChange={handleInputChange} />
        <div>
          <Switch />
        </div>
      </CardHeader>
      {!isFooter && (
        <CardContent className="flex justify-start gap-1 items-center">
          <EditableText onChange={handleUrl} value={urlLink} />
        </CardContent>
      )}
      {!isFooter && (
        <CardFooter className="flex justify-between items-center">
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
        </CardFooter>
      )}
    </Card>
  );
};

const Links = () => {
  const [open, setOpen] = useState(false);
  const [cardContent, setCardContent] = useState([]);
  console.log("links", open);
  return (
    <div className="flex flex-col gap-2 px-4 w-[90%]">
      <button
        className="w-full min-h-[48px] bg-primary text-white rounded-3xl"
        onClick={() => setOpen(true)}
      >
        Add Links
      </button>
      <div className="flex items-center space-x-4 p-4 justify-between">
        {/* Add header button */}
        <button className="flex items-center px-4 py-2 border rounded-full text-gray-600 border-gray-300 hover:bg-gray-100 gap-2">
          <svg
            class="mr-xs"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.5 -0.000244141H0V0.999755L0.5 0.999756L15.4999 0.999775L15.9999 0.999776L15.9999 -0.000224382L15.4999 -0.000225008L0.5 -0.000244141ZM0.500074 3.99976L7.37309e-05 4.49975L0 15.4998L0.5 15.9998H15.5L16 15.4998V4.49977L15.5 3.99977L0.500074 3.99976ZM1 14.9998L1.00007 4.99976L15 4.99977V14.9998H1Z"
              fill="black"
            ></path>
          </svg>
          <p>Add header</p>
        </button>

        {/* View archive link */}
        <a
          href="#"
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M4 3a2 2 0 00-2 2v2a2 2 0 002 2v6a2 2 0 002 2h8a2 2 0 002-2V9a2 2 0 002-2V5a2 2 0 00-2-2H4zm0 2h12v2H4V5zm2 4h8v6H6V9z" />
          </svg>
          View archive
        </a>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter URL</DialogTitle>
          </DialogHeader>
          <div className="flex items-center gap-2">
            <div className="flex flex-col gap-2 w-[80%]">
              {/* <Label htmlFor="name">URL</Label> */}
              <Input type="text" id="url" placeholder="URL" />
            </div>
            <Button className="bg-primary rounded-2xl w-[20%]">Add</Button>
          </div>
        </DialogContent>
      </Dialog>
      <CustomCard />
      <CustomCard isFooter={false} />
    </div>
  );
};

export default Links;
