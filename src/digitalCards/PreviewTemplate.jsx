import React from "react";
import { useParams } from "react-router";
import { cardToRender } from "@/pages/Template";

const PreviewTemplate = ({ data }) => {
  const cardId = useParams();
  const PreviewCard = cardToRender[cardId[1]];
  if (!PreviewCard) {
    return <div> card not found</div>;
  }
  return (
    <div className="flex">
      <PreviewCard data={data} isPreview={true} />
    </div>
  );
};

export default PreviewTemplate;
