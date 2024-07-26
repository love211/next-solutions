const MobileWrapper = ({ children }) => {
  return (
    <div className="h-[90%] max-h-[75rem] w-full flex items-center justify-center px-1">
      <div className="h-full w-fit md:w-fit rounded-[2rem] border-[0.25rem] border-[#191919] overflow-y-auto hide-scrollbar ">
        {children}
      </div>
    </div>
  );
};

export default MobileWrapper;