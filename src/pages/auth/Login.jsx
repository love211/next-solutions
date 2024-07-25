import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormdData] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="w-screen h-screen px-4 bg-image flex items-center justify-center">
      <div className="max-w-[40.25rem] max-h-[46.875rem] hidden xl:flex items-center justify-center rounded-l-[0.5rem] overflow-clip">
        <img
          src={`https://i.pinimg.com/564x/ba/5c/c0/ba5cc05370356d5acc315d3ba5406da3.jpg`}
          alt="Login"
          className="w-[40.25rem] h-[46.875rem]"
        />
      </div>
      {/* Right Column */}
      <div
        className="max-w-[40.25rem] w-full max-h-[46.875rem] h-fit xl:h-full p-4 lg:p-[3.88rem] flex flex-col items-center justify-center
       bg-[#fff] rounded-l-[0.5rem] xl:rounded-l-none  rounded-r-[0.5rem]"
      >
        <div className="w-full flex flex-col items-center gap-[3rem]">
          {/* Welcome Heading */}
          <div className="w-full flex flex-col gap-[0.5rem]">
            <p className="text-[2.75rem] text-[#031B59] font-semibold">
              Next Solutions
            </p>
            <h1 className="text-[1.75rem] text-[#031B59] font-semibold">
              Welcome Back!
            </h1>
            <p className="text-[#686868]">
              Enter your credentials to access your account.
            </p>
          </div>
          {/* Form Start */}
          <form className="w-full flex flex-col gap-[2rem]">
            <div className="w-full flex flex-col gap-[0.75rem]">
              {/* Input Field Container */}
              <div className="w-full flex flex-col items-start gap-[1.12rem]">
                {/* Email Field */}
                <div className="w-full flex flex-col gap-[0.25rem]">
                  <label className="text-[#191919]" htmlFor="email">
                    Email ID
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    className="w-full h-[2.625rem] p-[0.62rem] flex items-center border border-[#E2E8F0] rounded-[0.25rem]"
                  />
                </div>
                {/* Password Field */}
                <div className="w-full flex flex-col gap-[0.25rem]">
                  <label className="text-[#191919]" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full h-[2.625rem] p-[0.62rem] flex items-center border border-[#E2E8F0] rounded-[0.25rem]"
                  />
                </div>
              </div>
              {/* Forget password and Remember me */}
              <div className="w-full h-fit flex flex-col lg:flex-row lg:justify-between items-center gap-2">
                <div className="w-full flex gap-1">
                  <div className="w-fit flex items-center justify-center">
                    <input
                      type="checkbox"
                      id="checkbox"
                      name="checkbox"
                      className="w-[1.25rem] h-[1.25rem] border border-[#A1A1A1]"
                    />
                  </div>
                  <span className="text-[#191919]">Remember me</span>
                </div>
                <Link
                  href={"/"}
                  className="w-full flex items-center justify-start lg:justify-end"
                >
                  <p className="text-[#031B59] font-semibold">
                    Forgot Password?
                  </p>
                </Link>
              </div>
            </div>
            {/* Log In Button */}
            <div className="w-full flex items-center justify-center px-[24px] py-[12px] bg-[#031B59] rounded-[8px]">
              <button className="text-white">Log In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
