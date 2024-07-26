const AddUserButton = ({
  isLoading,
  customClass = "bg-[#031B59] border-2 border-white",
  renderText,
  ...buttonProps
}) => {
  return (
    <div
      className={`flex items-center justify-center px-[24px] py-[12px] ${
        isLoading ? "bg-gray-400" : customClass
      } rounded-3xl`}
    >
      <button className="text-white" {...buttonProps}>
        {/* {renderText(isLoading)} */}
        Create
      </button>
    </div>
  );
};

export default AddUserButton;
