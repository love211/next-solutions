import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useEffect, useState } from "react";

import LinkCard from "./links/LinkCard";
import { AddHeader, Archive } from "./links/atom";
import { parseDocument } from "htmlparser2";
import apiService from "@/api/axios";
import { apiEndpoints } from "@/api/apiEndPoint";
import { useSelector } from "react-redux";

let headerObj = {
  title: "",
};
const Links = () => {
  const [open, setOpen] = useState(false);
  const [urlState, setUrlState] = useState("");
  const [linksData, setLinkData] = useState([]);
  const { userDetails, loading } = useSelector((state) => state.template);

  const handleLinkSave = async () => {
    const response = await apiService.patch(
      `${apiEndpoints.addLink}/${userDetails?.id}`,
      {
        weblinks: { url: [urlState] },
      }
    );

    setOpen(false);
  };

  const linkEditHandler = () => {};
  const addHeaderHandler = async () => {
    const response = await apiService.patch(
      apiEndpoints?.addHeader(userDetails?.id),
      {
        title: "",
        description: "",
      }
    );
    console.log("response", response);
  };

  const submitHeaderHandler = async ({ data, id }) => {
    console.log("aaya", data, id);
    try {
      if (id) {
        const response = await apiService.patch(apiEndpoints?.editHeader(id), {
          _id: id,
          title: data,
          description: "jpjfdn",
        });
        console.log("responseHeader", response);
      }
    } catch (error) {
      throw new Error("validation");
      console.log("error", error);
    }
  };
  const cardVisiblityHandler = async (value) => {};
  console.log("linksData", linksData);
  return (
    <div className="flex flex-col gap-2 px-4 w-[90%]">
      {!open ? (
        <button
          className="w-full min-h-[48px] bg-primary text-white rounded-3xl"
          onClick={() => setOpen(true)}
        >
          Add Links
        </button>
      ) : (
        <div className="flex items-center gap-2">
          <div className="flex flex-col gap-2 w-[80%]">
            <Input
              type="text"
              name="url"
              id="url"
              placeholder="URL"
              onChange={(e) => setUrlState(e.target.value)}
            />
          </div>
          <Button
            className="bg-primary rounded-2xl w-[20%]"
            onClick={handleLinkSave}
          >
            Add
          </Button>
        </div>
      )}
      <div className="flex items-center space-x-4 p-4 justify-between">
        <AddHeader onClick={addHeaderHandler} />
        <Archive />
      </div>
      {userDetails?.header?.map((head) => (
        <LinkCard
          isHeadlineCard
          onSave={submitHeaderHandler}
          value={head}
          key={head._id}
        />
      ))}
      {userDetails?.weblink?.map((link) => (
        <LinkCard
          key={link._id}
          value={link}
          onSave={linkEditHandler}
          onVisiblityToggle={cardVisiblityHandler}
        />
      ))}
    </div>
  );
};

export default Links;
