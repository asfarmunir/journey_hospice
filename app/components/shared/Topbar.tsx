"use client";
import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { scrollToSection } from "@/lib/constants";

const Topbar = () => {
  return (
    <div className=" w-full bg-primary py-4 px-5 hidden md:flex items-center justify-between">
      <div className="flex items-center gap-6">
        <p className=" text-xs 2xl:text-sm font-thin text-white">
          We understand that each patient is unique
        </p>
        <button
          onClick={() => scrollToSection("what-is-hospice")}
          className=" text-white text-sm 2xl:text-lg font-semibold inline-flex items-center gap-0.5"
        >
          Learn More
          <MdArrowRightAlt className=" text-white 2xl:text-3xl text-xl" />
        </button>
      </div>
      <div className="flex items-center gap-8 pr-12">
        <div className=" text-white  font-semibold inline-flex items-center gap-1">
          <FiPhone className=" text-white  2xl:text-xl" />
          <p className=" font-thin text-xs 2xl:text-base ">818-558-4300</p>
        </div>
        <button
          onClick={() => scrollToSection("direction")}
          className=" text-white  font-semibold inline-flex items-center gap-1"
        >
          <SlLocationPin className=" text-white  2xl:text-xl" />
          <p className=" font-thin text-xs 2xl:text-base ">Find Location</p>
        </button>
      </div>
    </div>
  );
};

export default Topbar;
