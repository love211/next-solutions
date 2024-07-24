import CardTemplate from "../Cards/Card";

const Home = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col">
      <div className="flex flex-col gap-[3rem]">
        <div className="flex flex-col gap-[0.62rem] items-center">
          <h1 className="p-4 text-[3rem] text-[#2936a3] font-medium lg:text-[5rem]">Templates</h1>
          <p className="text-[1.875rem] text-[#26282b]">Digital Business Cards</p>
        </div>
        <CardTemplate />
      </div>
    </div>
  );
};

export default Home;
