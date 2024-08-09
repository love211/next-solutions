import { mockupData } from "@/Cards/mockupCardData";

const CardGrid = ({ onView }) => {
  
  return (
    <div className="w-fit h-fit grid grid-cols-2 xl:grid-cols-3 gap-[3rem]">
      {mockupData.map((mockup) => (
        <div
          key={mockup.id}
          className="relative w-full max-w-[14.68rem] h-auto lg:h-fit max-h-[42rem] overflow-hidden group md:rounded-[37px]"
          onClick={() => onView(mockup)}
        >
          <img src={mockup.image} className="" alt="" />
          <div className="absolute top-0 left-0 w-full h-full hidden group-hover:flex items-center justify-center bg-[#ffffffcc]">
            <button className="w-[60%] h-[3rem] border rounded-lg border-[#686868]">
              {mockup.title}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CardGrid;
