import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../auth/useAuth";
import { useGoogleLogin } from "@react-oauth/google";

import { parsePhoneNumberFromString } from "libphonenumber-js";
import { toast } from "react-toastify";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is Required"),
  password: Yup.string().required("Password is Required"),
  contactNo: Yup.string()
    .test("is-valid-phone", "Invalid phone number", (value) => {
      if (!value) return false;
      const phoneNumber = parsePhoneNumberFromString(value);
      return phoneNumber ? phoneNumber.isValid() : false;
    })
    .required("Contact number is Required"),
});

const SignUpPage = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      contactNo: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setSubmitting(true);
        await register(
          values.name,
          values.email,
          values.password,
          values.contactNo
        );
        toast.success("User created Successfully");
        setSubmitting(false);
        navigate("/");
      } catch (error) {
        console.log("error", error);
        setSubmitting(false);
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
              Welcome!
            </h1>
            <p className="text-[#686868]">
              Enter your details to start your account.
            </p>
          </div>
          {/* Form Start */}
          <form
            className="w-full flex flex-col gap-[2rem]"
            onSubmit={handleSubmit}
          >
            <div className="w-full flex flex-col gap-[0.75rem]">
              <div className="w-full flex flex-col items-start gap-[1.12rem]">
                {/* Name field */}
                <div className="w-full flex flex-col gap-[0.25rem]">
                  <label className="text-[#191919]" htmlFor="email">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    value={values.name}
                    className="w-full h-[2.625rem] p-[0.62rem] flex items-center border border-[#E2E8F0] rounded-[0.25rem]"
                  />
                  {errors.name && touched.name && (
                    <div className="text-red-500">{errors.name}</div>
                  )}
                </div>
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
                <div className="w-full flex flex-col gap-[0.25rem]">
                  <label className="text-[#191919]" htmlFor="password">
                    Contact No.
                  </label>
                  <input
                    type="text"
                    id="contact_no"
                    name="contactNo"
                    onChange={handleChange}
                    value={values.contactNo}
                    className="w-full h-[2.625rem] p-[0.62rem] flex items-center border border-[#E2E8F0] rounded-[0.25rem]"
                  />
                  {errors.contactNo && touched.contactNo && (
                    <div className="text-red-500">{errors.contactNo}</div>
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
                  to={"/login"}
                  className="w-full flex items-center justify-start lg:justify-end"
                >
                  <p className="text-[#031B59] font-semibold">
                    Already a user? to Login
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
              <button
                className="text-white"
                type="submit"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? "Submitting...!" : "Sign Up"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
