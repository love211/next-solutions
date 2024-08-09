const Category = [
  "Fashion",
  "Real State",
  "Professional Baseballer",
  "Realtor",
  "Healthcare",
];
const SideFilters = () => {
  return (
    <div className="w-fit max-w-[25rem] h-fit hidden lg:flex flex-col gap-[2rem]">
      <h2 className="text-2xl text-[#1B1D1A] font-medium">Browsed by</h2>
      <div className="w-full flex flex-wrap gap-[0.5rem]">
        {Category.map((data, index) => (
          <div
            key={index}
            className="w-fit px-8 py-1 rounded-full text-[#1E2330] text-lg border border-[#193c2b]"
          >
            <p>{data}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SideFilters;
