import React, { useState } from "react";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import cn from "classnames";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useLocation, useParams } from "react-router";
import apiService from "@/api/axios";
import { apiEndpoints } from "@/api/apiEndPoint";
import useAuth from "@/auth/useAuth";
import { toast } from "react-toastify";
import parsePhoneNumberFromString from "libphonenumber-js";

const TemplateForm = ({ className, onClose, setPreview, isPreview }) => {
  const { user } = useAuth();
  const cardId = useParams();
  const formik = useFormik({
    initialValues: {
      name: "abc@example.com",
      designation: "abcc",
      company: "xyzz",
      about: "xyzz",
      phone: "xyzz",
      email: "xyzz",
      weblink: "xyzz",
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
      weblink: Yup.string().required("Web link is required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setPreview(values);
        if (isPreview) {
          handleConfirm();
        }
      } catch (error) {
        setSubmitting(false);
      }
    },
  });

  const handleConfirm = async () => {
    const { values, setSubmitting } = formik;
    try {
      setSubmitting(true);
      const response = await apiService.post(apiEndpoints.createTemplate, {
        data: {
          user_id: user.id,
          template_id: +cardId[1],
          name: values.name,
          email: values.email,
          company: values.company,
          designation: values.designation,
          phone: values.phone,
          weblinks: values.weblink,
          about_me: values.about,
        },
      });
      setSubmitting(false);
      toast.success("Data added successfully");
      onClose();
    } catch (error) {
      setSubmitting(false);
    }
  };
  return (
    <FormikProvider value={formik.values}>
      <div className={`flex w-full h-full ${className}`}>
        <Form
          className={`flex flex-col gap-8 w-full py-4`}
          onSubmit={formik.handleSubmit}
        >
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

          <div className="flex flex-col gap-2">
            <Label htmlFor="weblink">Web Links</Label>
            <Input id="weblink" {...formik.getFieldProps("weblink")} />
            {formik.touched.weblink && formik.errors.weblink ? (
              <div className="text-red-500">{formik.errors.weblink}</div>
            ) : null}
          </div>

          <div className="flex justify-center">
            <Button type="submit">
              {formik.isSubmitting
                ? "Saving..."
                : isPreview
                ? "Save"
                : "Preview"}
            </Button>
          </div>
        </Form>
      </div>
    </FormikProvider>
  );
};

export default TemplateForm;
