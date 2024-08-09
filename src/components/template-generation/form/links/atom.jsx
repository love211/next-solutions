import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PencilIcon, SaveIcon } from "lucide-react";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const EditableText = ({ value, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [linkData, setLinkData] = useState(value);
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onSave(linkData);
  };

  const handleInputChange = (e) => {
    setLinkData(e.target.value);
  };

  return (
    <div className="flex items-center">
      {isEditing ? (
        <Input
          value={linkData}
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

export default EditableText;

export const AddHeader = ({ ...buttonProps }) => {
  return (
    <button
      className="flex items-center px-4 py-2 border rounded-full text-gray-600 border-gray-300 hover:bg-gray-100 gap-2"
      {...buttonProps}
    >
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
  );
};

export function Archive() {
  return (
    <Link
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
      <FaAngleRight />
    </Link>
  );
}
