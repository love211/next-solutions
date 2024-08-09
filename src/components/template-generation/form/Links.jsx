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

const Links = () => {
  const [open, setOpen] = useState(false);
  const [urlState, setUrlState] = useState("");
  const [linksData, setLinkData] = useState([]);
  const { userDetails, loading } = useSelector((state) => state.template);

  const handleLinkSave = async () => {
    const response = await apiService.patch(
      `${apiEndpoints.addLink}/${userDetails.id}`,
      {
        weblinks: [urlState],
      }
    );
    console.log("response", response);
    // setLinkData((prev) => [
    //   ...prev,
    //   {
    //     link: urlState,
    //     title: "Hire Remote Developers | 1 on 1 Hiring Support with UpStack®",
    //   },
    // ]);
    setOpen(false);
  };
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const fetchMetadata = async () => {
    try {
      const response = await fetch(`https://deeporion.com/`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const htmlText = data.contents;
      const doc = parseDocument(htmlText);
      const titleElement = doc.querySelector("title");
      const descriptionElement = doc.querySelector('meta[name="description"]');

      setTitle(titleElement ? titleElement.textContent : "No title found");
      setDescription(
        descriptionElement
          ? descriptionElement.attribs.content
          : "No description found"
      );
    } catch (error) {
      setError(error.message);
    }
  };

  // useEffect(() => {
  //   fetchMetadata();
  // }, []);

  console.log("linksData", linksData);
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
        <AddHeader />

        {/* View archive link */}
        <Archive />
      </div>
      {/* <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter URL</DialogTitle>
          </DialogHeader> */}
      {open && (
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
      {/* </DialogContent>
      </Dialog> */}
      <LinkCard isHeadlineCard onSave />
      <LinkCard />
    </div>
  );
};

export default Links;
