import React from "react";
import { useFormik } from "formik";
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

const TemplateForm = ({ className, onClose }) => {
  const { user } = useAuth();
  // const {}
  console.log("user", user);
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
      phone: Yup.string().required("Phone is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      weblink: Yup.string().url("Invalid URL").required("Web link is required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      console.log("Form values:", values);
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
        console.log("response", response);
        setSubmitting(false);
        toast.success("data added successfully")
        onClose()
        
      } catch (error) {
        setSubmitting(false);
      }

      // Handle form submission
    },
  });

  return (
    <form
      className={cn("grid items-start gap-4", className)}
      onSubmit={formik.handleSubmit}
    >
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" {...formik.getFieldProps("name")} />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500">{formik.errors.name}</div>
        ) : null}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="designation">Designation</Label>
        <Input id="designation" {...formik.getFieldProps("designation")} />
        {formik.touched.designation && formik.errors.designation ? (
          <div className="text-red-500">{formik.errors.designation}</div>
        ) : null}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="company">Company</Label>
        <Input id="company" {...formik.getFieldProps("company")} />
        {formik.touched.company && formik.errors.company ? (
          <div className="text-red-500">{formik.errors.company}</div>
        ) : null}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="about">About Me</Label>
        <Input id="about" {...formik.getFieldProps("about")} />
        {formik.touched.about && formik.errors.about ? (
          <div className="text-red-500">{formik.errors.about}</div>
        ) : null}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" {...formik.getFieldProps("phone")} />
        {formik.touched.phone && formik.errors.phone ? (
          <div className="text-red-500">{formik.errors.phone}</div>
        ) : null}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" {...formik.getFieldProps("email")} />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="weblink">Web Links</Label>
        <Input id="weblink" {...formik.getFieldProps("weblink")} />
        {formik.touched.weblink && formik.errors.weblink ? (
          <div className="text-red-500">{formik.errors.weblink}</div>
        ) : null}
      </div>

      <Button type="submit">
        {formik.isSubmitting ? "Saving..." : "Save changes"}
      </Button>
    </form>
  );
};

export default TemplateForm;
