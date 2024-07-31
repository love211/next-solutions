import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../auth/useAuth";

import { toast } from "react-toastify";

import GoogleLogin from "./GoogleLogin";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is Required"),
  password: Yup.string().required("Password is Required"),
});
const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setSubmitting(true);
        await login(values.email, values.password);
        setSubmitting(false);
        toast.success("user login success");
        navigate("/");
      } catch (error) {
        setSubmitting(false);
        console.log(error);
      }
    },
  });

  const { handleSubmit, handleChange, values, errors, touched } = formik;
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
          <form
            className="w-full flex flex-col gap-[2rem]"
            onSubmit={handleSubmit}
          >
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
                    onChange={handleChange}
                    value={values.email}
                    className="w-full h-[2.625rem] p-[0.62rem] flex items-center border border-[#E2E8F0] rounded-[0.25rem]"
                  />
                  {errors.email && touched.email && (
                    <div className="text-red-500">{errors.email}</div>
                  )}
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
                    onChange={handleChange}
                    value={values.password}
                    className="w-full h-[2.625rem] p-[0.62rem] flex items-center border border-[#E2E8F0] rounded-[0.25rem]"
                  />
                  {errors.password && touched.password && (
                    <div className="text-red-500">{errors.password}</div>
                  )}
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
                  to={"/sign-up"}
                  className="w-full flex items-center justify-start lg:justify-end"
                >
                  <p className="text-[#031B59] font-semibold">
                    if new user go to Signup
                  </p>
                </Link>
              </div>
            </div>
            {/* Log In Button */}
            <div
              className={`w-full flex items-center justify-center px-[24px] py-[12px] ${
                formik.isSubmitting ? "bg-gray-400" : "bg-[#031B59]"
              } rounded-[8px]`}
            >
              <button className="text-white" type="submit">
                {formik.isSubmitting ? "Logging in..." : "Log In"}
              </button>
            </div>
          </form>
          {/* <div className="w-full flex items-center justify-center px-[24px] py-[12px] bg-[#031B59] rounded-[8px]">
            <button className="text-white" onClick={GoogleLoginButton}>
              Google Log In
            </button>
          </div> */}
          {/* <GoogleLoginButton /> */}
          <GoogleLogin />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
