const Loading = () => {
  return (
    <div
      role="status"
      className="w-full h-full flex items-center justify-center flex-col gap-[1rem] space-y-2.5 animate-pulse max-w-lg"
    >
      <div className="flex items-center w-full">
        <div className="h-[2rem] bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
        <div className="h-[2rem] ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        <div className="h-[2rem] ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      </div>
      <div className="flex items-center w-full max-w-[780px]">
        <div className="h-[2rem] bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
        <div className="h-[2rem] ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div className="h-[2rem] ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
      </div>
      <div className="flex items-center w-full max-w-[700px]">
        <div className="h-[2rem] bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div className="h-[2rem] ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
        <div className="h-[2rem] ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      </div>
      <div className="flex items-center w-full max-w-[780px]">
        <div className="h-[2rem] ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
        <div className="h-[2rem] ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div className="h-[2rem] ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
      </div>
      <div className="flex items-center w-full max-w-[740px]">
        <div className="h-[2rem] ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
        <div className="h-[2rem] ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        <div className="h-[2rem] ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
      </div>
      <div className="flex items-center w-full max-w-[760px]">
        <div className="h-[2rem] ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div className="h-[2rem] ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
        <div className="h-[2rem] ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
export default Loading;
