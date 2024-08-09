import React from "react";
import { cardToRender } from "@/pages/Template";
import NoData from "@/components/NoData";

const PreviewTemplate = ({ data, cardId, customClass }) => {
  const PreviewCard = cardToRender[cardId];
  if (!PreviewCard) {
    return (
      <div className={customClass}>
        {" "}
        <NoData />
      </div>
    );
  }
  return (
    <div className={`flex justify-center ${customClass}`}>
      <PreviewCard data={data} isPreview={true} />
    </div>
  );
};

export default PreviewTemplate;
