"use client";
import Image from "next/image";
import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiMenu } from "react-icons/hi";

import { scrollToSection } from "@/lib/constants";

const Navbar = () => {
  return (
    <nav className="flex sticky top-0 z-50 py-4 px-6 bg-white  items-center  w-full justify-between">
      <Image
        src="/logo.png"
        alt="logo"
        width={100}
        height={100}
        className=" w-[80px] 2xl:w-[100px] "
      />
      <div className=" hidden lg:flex items-center gap-7">
        <button
          onClick={() => scrollToSection("home")}
          className=" text-primary text-sm 2xl:text-base font-semibold inline-flex items-center gap-0.5"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("what-is-hospice")}
          className=" text-slate-700 text-sm 2xl:text-base  inline-flex items-center gap-0.5"
        >
          What is Hospice
        </button>
        <button
          onClick={() => scrollToSection("about-us")}
          className=" text-slate-700 text-sm 2xl:text-base  inline-flex items-center gap-0.5"
        >
          About Us
        </button>
        <button
          onClick={() => scrollToSection("service")}
          className=" text-slate-700 text-sm 2xl:text-base  inline-flex items-center gap-0.5"
        >
          Services
        </button>
        <button
          onClick={() => scrollToSection("team")}
          className=" text-slate-700 text-sm 2xl:text-base  inline-flex items-center gap-0.5"
        >
          Our Team
        </button>
        <button
          onClick={() => scrollToSection("direction")}
          className=" text-slate-700 text-sm 2xl:text-base  inline-flex items-center gap-0.5"
        >
          Get Direction
        </button>
      </div>
      <Sheet>
        <SheetTrigger className=" block  lg:hidden">
          <HiMenu className=" text-2xl" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <div className=" flex flex-col items-center gap-7">
              <Image
                src="/logo.png"
                alt="logo"
                width={100}
                height={100}
                className=" w-[80px] 2xl:w-[100px] "
              />
              <button
                onClick={() => scrollToSection("home")}
                className=" text-primary text-sm 2xl:text-base font-semibold inline-flex items-center gap-0.5"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("what-is-hospice")}
                className=" text-slate-700 text-sm 2xl:text-base  inline-flex items-center gap-0.5"
              >
                What is Hospice
              </button>
              <button
                onClick={() => scrollToSection("about-us")}
                className=" text-slate-700 text-sm 2xl:text-base  inline-flex items-center gap-0.5"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("service")}
                className=" text-slate-700 text-sm 2xl:text-base  inline-flex items-center gap-0.5"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className=" text-slate-700 text-sm 2xl:text-base  inline-flex items-center gap-0.5"
              >
                Our Team
              </button>
              <button
                onClick={() => scrollToSection("direction")}
                className=" text-slate-700 text-sm 2xl:text-base  inline-flex items-center gap-0.5"
              >
                Get Direction
              </button>
              <button className=" bg-primary p-2.5 2xl:p-3 px-3.5 2xl:px-4 text-white text-sm 2xl:text-base font-semibold inline-flex items-center gap-4">
                Contact Us
                <MdArrowRightAlt className=" text-white 2xl:text-3xl text-xl" />
              </button>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <button className=" bg-primary p-2.5 2xl:p-3 px-3.5 2xl:px-4 text-white text-sm 2xl:text-base font-semibold hidden lg:inline-flex items-center gap-4">
        Contace Us
        <MdArrowRightAlt className=" text-white 2xl:text-3xl text-xl" />
      </button>
    </nav>
  );
};

export default Navbar;
