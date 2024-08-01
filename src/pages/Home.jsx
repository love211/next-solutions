import { useNavigate } from "react-router";
import CardTemplate from "../Cards/Card";
import useAuth from "../auth/useAuth";

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  return (
    <div className="w-full h-full flex items-center flex-col">
      <header
        id="header"
        className="w-full h-[5rem] flex items-center justify-end px-6 lg:px-[8.41rem] py-2"
      >
        <button
          onClick={() => {
            if (isAuthenticated) {
              logout();
            }
            navigate("/login");
          }}
          className=" h-[2.5rem] lg:[3rem] w-44 rounded-[44px] border-2 border-[#7096D1] text-[#334EAC] font-bold"
        >
          {isAuthenticated ? "Logout" : "Login"}
        </button>
      </header>
      <div className="flex flex-col gap-[3rem]">
        <div className="flex flex-col gap-[0.62rem] items-center">
          <h1 className="p-4 text-[3rem] text-[#2936a3] font-medium lg:text-[5rem]">
            Digital Templates
          </h1>
          <p className="text-[1.875rem] text-[#26282b]">
            Get your digitial Business Cards
          </p>
        </div>
        <CardTemplate />
      </div>
    </div>
  );
};

export default Home;
