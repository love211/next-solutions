import React from "react";
import { useParams } from "react-router";
import { cardToRender } from "@/pages/Template";

const PreviewTemplate = ({ data, cardId }) => {
  const PreviewCard = cardToRender[cardId];
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
