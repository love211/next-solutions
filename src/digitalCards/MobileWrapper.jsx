import React from "react";

const MobileWrapper = ({ children }) => {
  return (
    <div className="w-fit max-h-[90%] rounded-[2rem] border-[0.25rem] border-[#191919] overflow-y-auto hide-scrollbar ">
      {children}
    </div>
  );
};

export default MobileWrapper;
