"use client";
import React, { useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_fullname: "",
    user_email: "",
    user_contact: "",
    message: "",
    source: "",
  });

  const [errors, setErrors] = useState({
    user_fullname: "",
    user_email: "",
    user_contact: "",
    message: "",
    source: "",
  });

  const validate = () => {
    const newErrors = {
      user_fullname: "",
      user_email: "",
      user_contact: "",
      message: "",
      source: "",
    };

    let isValid = true;

    if (!formData.user_fullname) {
      newErrors.user_fullname = "Full Name is required.";
      isValid = false;
    }
    if (!formData.user_email) {
      newErrors.user_email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      newErrors.user_email = "Email address is invalid.";
      isValid = false;
    }
    if (!formData.user_contact) {
      newErrors.user_contact = "Phone Number is required.";
      isValid = false;
    }
    if (!formData.message) {
      newErrors.message = "Message is required.";
      isValid = false;
    }
    if (!formData.source) {
      newErrors.source = "This field is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      toast.loading("Sending message...");

      const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
      const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
      const userId = process.env.NEXT_PUBLIC_USER_ID;

      const templateParams = {
        ...formData,
      };
      //   console.log("Form submitted successfully:", templateParams);

      emailjs.send(serviceId!, templateId!, templateParams, userId).then(
        function (response) {
          toast.dismiss();
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message sent successfully");
          setFormData({
            user_fullname: "",
            user_email: "",
            user_contact: "",
            message: "",
            source: "",
          });
        },
        function (error) {
          console.log("FAILED...", error);
          toast.dismiss();
          toast.error(" Something went wrong, please try again later");
        }
      );
    }
  };

  return (
    <div className="flex flex-col p-7 px-8 bg-[#F1F9FF] w-full md:w-[40%]">
      <h2 className="text-2xl 2xl:text-3xl mb-6 font-semibold text-primary-50">
        Contact Us
      </h2>
      <form className="flex flex-col w-full gap-3.5" onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full border-2 text-sm capitalize bg-transparent border-slate-300 p-3 placeholder:text-primary-50 text-primary-50"
          placeholder="Full Name"
          name="user_fullname"
          value={formData.user_fullname}
          onChange={handleChange}
          required
        />
        {errors.user_fullname && (
          <p className="text-red-500 text-xs">{errors.user_fullname}</p>
        )}
        <input
          type="text"
          className="w-full border-2 text-sm bg-transparent border-slate-300 p-3 placeholder:text-primary-50 text-primary-50"
          placeholder="Your Email"
          name="user_email"
          value={formData.user_email}
          onChange={handleChange}
          required
        />
        {errors.user_email && (
          <p className="text-red-500 text-xs">{errors.user_email}</p>
        )}
        <input
          type="text"
          className="w-full border-2 text-sm bg-transparent border-slate-300 p-3 placeholder:text-primary-50 text-primary-50"
          placeholder="Phone Number"
          name="user_contact"
          value={formData.user_contact}
          onChange={handleChange}
          required
        />
        {errors.user_contact && (
          <p className="text-red-500 text-xs">{errors.user_contact}</p>
        )}
        <input
          type="text"
          className="w-full border-2 text-sm bg-transparent border-slate-300 p-3 placeholder:text-primary-50 text-primary-50"
          placeholder="How did you hear about us?"
          name="source"
          value={formData.source}
          onChange={handleChange}
          required
        />
        {errors.source && (
          <p className="text-red-500 text-xs">{errors.source}</p>
        )}
        <input
          type="text"
          className="w-full border-2 text-sm placeholder:text-primary-50 bg-transparent border-slate-300 p-3 text-primary-50"
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        {errors.message && (
          <p className="text-red-500 text-xs">{errors.message}</p>
        )}
        <button
          type="submit"
          className="bg-primary p-2.5 2xl:p-3 px-3.5 2xl:px-4 text-white text-sm 2xl:text-base font-semibold w-fit inline-flex my-4 items-center gap-4"
        >
          Contact Us
          <MdArrowRightAlt className="text-white 2xl:text-3xl text-xl" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
