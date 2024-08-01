import React from "react";
import { cardToRender } from "@/pages/Template";

const PreviewTemplate = ({ data, cardId, customClass }) => {
  const PreviewCard = cardToRender[cardId];
  if (!PreviewCard) {
    return <div> card not found</div>;
  }
  return (
    <div className={`flex ${customClass}`}>
      <PreviewCard data={data} isPreview={true} />
    </div>
  );
};

export default PreviewTemplate;
