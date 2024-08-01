const MobileWrapper = ({ children, customHeight = "h-[90%]" }) => {
  return (
    <div
      id="mobileWrapper"
      className={`${customHeight} w-full flex items-center justify-center px-1`}
    >
      <div className="h-full md:max-h-[40rem] lg:max-h-[65rem] w-fit md:w-fit rounded-[2rem] border-[0.25rem] border-[#191919] overflow-y-auto hide-scrollbar ">
        {children}
      </div>
    </div>
  );
};

export default MobileWrapper;