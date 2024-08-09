import DrawerWrapper from "@/components/custom-ui/DrawerWrapper";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { useEffect, useState } from "react";

import LinkCard from "./links/LinkCard";
import { AddHeader, Archive } from "./links/atom";
import { parseDocument } from "htmlparser2";
import apiService from "@/api/axios";
import { apiEndpoints } from "@/api/apiEndPoint";
import { useSelector } from "react-redux";
import { IoClose } from "react-icons/io5";

let headerObj = {
  title: "",
};
const Links = () => {
  const [open, setOpen] = useState(false);
  const [urlState, setUrlState] = useState("");
  const [linksData, setLinkData] = useState([]);
  const { userDetails, loading } = useSelector((state) => state.template);
  const [headerData, setHeaderData] = useState([]);

  useEffect(() => {
    if (userDetails?.header?.length > 0) {
      setHeaderData(userDetails?.header);
    }
  }, [userDetails.header]);
  console.log("userDetails", userDetails);

  const handleLinkSave = async () => {
    const response = await apiService.patch(
      `${apiEndpoints.addLink}/${userDetails?.id}`,
      {
        weblinks: { url: [urlState] },
      }
    );
    console.log("response", response);

    setOpen(false);
  };
  const addHeaderHandler = () => {
    setHeaderData((prev, index) => [...prev, { ...headerObj, id: index + 1 }]);
  };
  const submitHeaderHandler = async (title) => {
    setHeaderData((prev) => prev.map((a) => ({ ...a, title: title })));
    if (editId) {
      const response = apiService.patch(apiEndpoints.editHeader(editCardId), {
        _id: "66b5c865171e9ef2259873ff",
        title: "software development",
        description: "jpjfdn",
      });
    }
    const response = await apiService.patch(
      `${apiEndpoints.addHeader}/${userDetails?.id}`,
      {
        content: headerData.map((data) => ({
          title: title,
          description: "yrd",
        })),
      }
    );
    console.log("responseHeader", response);
  };
  console.log("linksData", linksData);
  return (
    <div className="w-full flex flex-col gap-2">
      {!open ? (
        <button
          className="w-full min-h-[48px] bg-primary text-white rounded-2xl"
          onClick={() => setOpen(true)}
        >
          Add Links
        </button>
      ) : (
        <div className="w-full h-fit py-[1rem] px-3 flex flex-col gap-[0.75rem] bg-white rounded-xl animation-height">
          <div className="w-full h-[2rem] flex justify-end">
          <IoClose className="w-5 h-5" />
          </div>
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
              className="bg-primary rounded-xl w-[20%]"
              onClick={handleLinkSave}
            >
              Add
            </Button>
          </div>
        </div>
      )}
      <div className="flex items-center space-x-4 p-4 justify-between">
        {/* Add header button */}
        <AddHeader onClick={addHeaderHandler} />

        {/* View archive link */}
        <Archive />
      </div>
      {/* <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter URL</DialogTitle>
          </DialogHeader> */}

      {/* </DialogContent>
      </Dialog> */}
      {headerData.map((head) => (
        <LinkCard isHeadlineCard onSave={submitHeaderHandler} value={head} />
      ))}
      {userDetails?.weblink?.map((link) => (
        <LinkCard key={link._id} value={link} />
      ))}
    </div>
  );
};

export default Links;
