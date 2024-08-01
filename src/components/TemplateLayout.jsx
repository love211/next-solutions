import React from "react";

const IndividualCardLayout = ({ children }) => {
  return (
    <div
      id="layout"
      className="relative w-screen h-[calc(100vh-5rem)] max-w-[100vw] xl:max-h-[100vh] flex items-center justify-center"
    >
      {children}
    </div>
  );
};

export default IndividualCardLayout;
