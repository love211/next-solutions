import Menu from "@/components/MenuPopover";
import { useLocation, useNavigate } from "react-router";
import CardGrid from "@/components/home/CardsGrid";
import SideFilters from "@/components/home/SideFilters";
import { CustomDrawer } from "@/components/custom-ui/Drawer";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import PreviewTemplate from "@/digitalCards/PreviewTemplate";
import TemplateDrawer from "@/components/home/TemplateDrawer";

const Home = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleOpenDrawer = (data) => {
    setSearchParams({ id: data.id });
    navigate(`/?id=${encodeURIComponent(data.id)}`);
    setOpen(true);
    setSelectedCard(data);
  };
  console.log("searchParams", open);

  return (
    <div className="w-full max-w-screen h-full px-[1rem] lg:px-[3rem] flex flex-col items-center overflow-y-auto pb-[2rem]">
      <header
        id="header"
        className="sticky top-[2rem] w-full h-[7rem] flex items-center justify-end px-6 py-2
        border-[#1B1D1A] rounded-[10px] bg-white z-50"
      >
        <div className="w-full h-full flex justify-between gap-4">
          <button
            className="w-[12rem] h-full text-[#1E2330]"
            onClick={() => {
              navigate("/user-generated-cards/");
            }}
          >
            {" "}
            My Templates
          </button>

          <Menu />
        </div>
      </header>
      <div className="w-full h-auto flex flex-col items-center gap-[3rem] mt-[5rem]">
        <div className="w-full md:w-[80%] flex flex-col gap-[0.62rem] items-center text-center">
          <h1 className="p-4 text-[2rem] text-[#1B1D1A] font-extrabold lg:text-[5rem]">
            Your Digital Identity, Redefined
          </h1>
          <p className="text-[1.875rem] text-[#1E2330]">
            Networking for the Modern Age, Tailored to Every Profession,
            Everywhere.{" "}
          </p>
        </div>
        <div className="w-full h-auto flex justify-center gap-4 lg:gap-[3rem] ">
          {/* Browsed By */}
          <SideFilters />
          <div className="w-full flex items-center justify-center">
            <CardGrid onView={handleOpenDrawer} />
          </div>
        </div>
        <TemplateDrawer open={open} onClose={setOpen} data={selectedCard} />
      </div>
    </div>
  );
};

export default Home;
