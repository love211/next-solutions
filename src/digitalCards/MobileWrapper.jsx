import React from "react";

const MobileWrapper = ({ children }) => {
  return (
    <div className="max-h-[90%] w-fit sm:max-w-[75%] md:w-fit  rounded-[2rem] border-[0.25rem] border-[#191919] overflow-y-auto hide-scrollbar ">
      {children}
    </div>
  );
};

export default MobileWrapper;
