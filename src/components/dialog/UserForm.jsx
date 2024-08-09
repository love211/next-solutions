import React, { useState } from "react";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useLocation, useParams } from "react-router";
import apiService from "@/api/axios";
import { apiEndpoints } from "@/api/apiEndPoint";
import useAuth from "@/auth/useAuth";
import { toast } from "react-toastify";
import parsePhoneNumberFromString from "libphonenumber-js";
import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";

const TemplateForm = ({ className, onClose, setPreview, isPreview }) => {
  const { user } = useAuth();
  const cardId = useParams();
  const location = useLocation();
  const { userDetails } = useSelector((state) => state.template);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [preview, setPreviewImage] = useState(null);
  let isEdit = userDetails && Object.keys(userDetails).length > 0;
  const formik = useFormik({
    initialValues: {
      name: userDetails.name ?? "",
      designation: userDetails.designation ?? "",
      company: userDetails.company ?? "",
      about: userDetails.about ?? "",
      phone: userDetails?.phone
        ? `+${userDetails.countryCode}${userDetails.phone}`
        : "",
      email: userDetails.email ?? "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      designation: Yup.string().required("Designation is required"),
      company: Yup.string().required("Company is required"),
      about: Yup.string().required("About Me is required"),
      phone: Yup.string()
        .test(
          "is-valid-phone",
          "Invalid phone number, enter correct country code",
          (value) => {
            if (!value) return false;
            const phoneNumber = parsePhoneNumberFromString(value);
            return phoneNumber ? phoneNumber.isValid() : false;
          }
        )
        .required("Contact number is Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setSubmitting(true);
        const parsedNumber = parsePhoneNumberFromString(values.phone);
        if (isEdit) {
          const response = await apiService.patch(apiEndpoints.personalInfo, {
            name: values.name,
            designation: values.designation,
            company: values.company,
            about_me: values.about,
            country_code: parsedNumber.countryCallingCode,
            phone: parsedNumber.nationalNumber,
            user_id: user.id,
            template_id: location?.state?.data,
            email: values.email,
          });
          setSubmitting(false);
          toast.success("Data updated successfully");
        } else {
          const response = await apiService.post(apiEndpoints.personalInfo, {
            name: values.name,
            designation: values.designation,
            company: values.company,
            about_me: values.about,
            country_code: parsedNumber.countryCallingCode,
            phone: parsedNumber.nationalNumber,
            user_id: user.id,
            template_id: location?.state?.data,
            email: values.email,
          });
          setSubmitting(false);
          toast.success("Data added successfully");
        }
        // onClose();
      } catch (error) {
        console.log("error", error);
        setSubmitting(false);
      }
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePhoto(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const getButtonTitle = () => {
    if (isEdit) {
      return formik.isSubmitting ? "Editing..." : "Edit";
    }
    return formik.isSubmitting ? "Saving..." : "Save";
  };
  return (
    <FormikProvider value={formik.values}>
      <div className={(cn("flex w-full h-full"), className)}>
        <Form
          className={`flex flex-col gap-8 w-full py-4`}
          onSubmit={formik.handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="profilePhoto">Profile Photo</Label>
            <input
              type="file"
              id="profilePhoto"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <div className="flex items-center justify-center mt-2">
              <label htmlFor="profilePhoto" className="cursor-pointer">
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  {preview ? (
                    <img
                      src={preview}
                      alt="Profile Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-400">Upload</span>
                  )}
                </div>
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" {...formik.getFieldProps("name")} />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500">{formik.errors.name}</div>
            ) : null}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="designation">Designation</Label>
            <Input id="designation" {...formik.getFieldProps("designation")} />
            {formik.touched.designation && formik.errors.designation ? (
              <div className="text-red-500">{formik.errors.designation}</div>
            ) : null}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="company">Company</Label>
            <Input id="company" {...formik.getFieldProps("company")} />
            {formik.touched.company && formik.errors.company ? (
              <div className="text-red-500">{formik.errors.company}</div>
            ) : null}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="about">About Me</Label>
            <Input id="about" {...formik.getFieldProps("about")} />
            {formik.touched.about && formik.errors.about ? (
              <div className="text-red-500">{formik.errors.about}</div>
            ) : null}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" {...formik.getFieldProps("phone")} />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="text-red-500">{formik.errors.phone}</div>
            ) : null}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" {...formik.getFieldProps("email")} />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="flex justify-center">
            <Button type="submit">{getButtonTitle()}</Button>
          </div>
        </Form>
      </div>
    </FormikProvider>
  );
};

export default TemplateForm;
