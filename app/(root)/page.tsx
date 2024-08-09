"use client";
import React from "react";
import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";
import Navbar from "../components/shared/Navbar";
import { service } from "@/lib/constants";
import { scrollToSection } from "@/lib/constants";

const page = () => {
  return (
    <main className=" w-full relative   2xl:py-6 ">
      <Navbar />
      <div
        id="home"
        className="flex md:h-[460px] px-6 2xl:px-8 2xl:h-[600px] flex-col md:flex-row overflow-hidden items-start justify-between mb-10 gap-4 2xl:gap-6"
      >
        <div className=" h-full relative w-full md:w-[75%] bg-primary overflow-hidden px-8 md:px-12 2xl:px-16 flex flex-col md:flex-row items-center justify-between  ">
          <Image
            src="/bg1.png"
            alt="bg"
            width={100}
            height={100}
            className=" absolute right-0   bottom-0 w-[270px] 2xl:w-[370px]  "
          />
          <div className="flex flex-col items-center md:items-start py-12 md:py-0 gap-4 2xl:gap-6">
            <Image
              src="/logo_white.png"
              alt="hero"
              width={100}
              height={100}
              className=" w-[70px] 2xl:w-[100px]  "
            />
            <h1 className="text-2xl  md:text-4xl 2xl:text-5xl text-center mb-3 md:mb-0 md:text-start text-[#20265B] font-bold max-w-lg leading-snug ">
              Journey Hospice Services, Inc 
              <br />
              Hand in Hand <br /> through the journey
            </h1>
            <button className=" bg-white p-2.5 2xl:p-3 px-3.5 2xl:px-4 text-primary-50 w-fit text-base 2xl:text-lg font-semibold inline-flex items-center gap-5">
              Learn More
              <MdArrowRightAlt className=" text-primary-50 2xl:text-3xl text-2xl" />
            </button>
          </div>
          <div className=" z-10 flex h-full flex-col justify-end">
            <Image
              src="/hero.png"
              alt="hero"
              priority
              width={600}
              height={600}
              className=" w-[250px] md:w-[300px]  2xl:w-[400px] "
            />
          </div>
        </div>
        <div className="flex  h-full flex-col items-center md:items-start gap-2.5 2xl:gap-6 w-full md:w-[25%] ">
          <div className="px-5 flex  flex-col items-center md:items-start  relative  w-full bg-primary">
            <Image
              src="/bg2.png"
              alt="bg"
              width={100}
              height={100}
              className=" w-[125px] left-0  bottom-0 absolute py-7 2xl:py-10  2xl:w-[175px] "
            />
            <Image
              src="/care.png"
              alt="hero"
              width={100}
              height={100}
              className=" w-[85px] py-7 2xl:py-10  2xl:w-[118px] "
            />
            <h2 className=" text-primary-50 font-bold mb-1 text-xl">
              24/7 Emergency Care
            </h2>
            <h2 className=" text-primary-50  text-lg pb-5 2xl:pb-8">
              818-558-4300{" "}
            </h2>
          </div>{" "}
          <div className="px-5 flex   flex-col items-center md:items-start relative h-full w-full bg-primary">
            <Image
              src="/bg3.png"
              alt="bg"
              width={100}
              height={100}
              className=" w-[135px] left-0  -bottom-10 absolute py-7 2xl:py-10  2xl:w-[185px] "
            />

            <Image
              src="/booking.png"
              alt="hero"
              width={100}
              height={100}
              className=" w-[85px] py-7 2xl:py-10  2xl:w-[118px] "
            />
            <h2 className=" text-primary-50 font-bold mb-1 text-xl">
              Book Your Appointment
            </h2>
            <h2 className=" text-primary-50  text-lg pb-5 2xl:pb-8">
              818-558-4300{" "}
            </h2>
          </div>{" "}
        </div>
      </div>
      <div
        id="what-is-hospice"
        className="flex flex-col  md:flex-row items-start justify-between my-16 px-4 md:px-12 2xl:px-16 2xl:my-20 gap-5 md:gap-10"
      >
        <div className="flex flex-col w-full md:w-[60%]">
          <h2 className="text-3xl text-center md:text-start font-bold mb-4 text-primary-50">
            What is Hospice ?
          </h2>
          <p className=" text-lg text-primary-50 max-w-lg text-center leading-loose md:text-start">
            Hospice is tailored to provide special care to a person quality of
            life and dignity as they near the end of their life. We focus on
            quality of life, as determined by the patient. Our care focuses on
            the patient and their loved ones addressing needs on every level:
            physical, emotional, psychological, and spiritual. Journey Hospice
            manages the pain and symptoms of serious illness, and addresses the
            side-effects of treatment, including the mental and emotional stress
            it creates.
          </p>
        </div>
        <div className="flex flex-col p-7 px-8 bg-[#F1F9FF] w-full md:w-[40%]">
          <h2 className=" text-2xl 2xl:text-3xl mb-6 font-semibold text-primary-50">
            Contact Us
          </h2>
          <form className="flex flex-col w-full gap-3.5">
            <input
              type="text"
              className=" w-full border-2 text-sm bg-transparent border-slate-300 p-3 placeholder:text-primary-50 text-primary-50 "
              placeholder="Full Name"
              name=""
              required
              id=""
            />
            <input
              type="text"
              className=" w-full border-2 text-sm bg-transparent border-slate-300 p-3 placeholder:text-primary-50 text-primary-50 "
              placeholder="Your Email"
              name=""
              required
              id=""
            />
            <input
              type="text"
              className=" w-full border-2 text-sm bg-transparent border-slate-300 p-3 placeholder:text-primary-50 text-primary-50 "
              placeholder="Phone Number"
              name=""
              required
              id=""
            />
            <input
              type="text"
              className=" w-full border-2 text-sm bg-transparent border-slate-300 p-3 placeholder:text-primary-50 text-primary-50 "
              placeholder="How did you hear about us?"
              name=""
              required
              id=""
            />
            <input
              type="text"
              className=" w-full border-2 text-sm placeholder:text-primary-50 bg-transparent border-slate-300 p-3 text-primary-50 "
              placeholder="About us?"
              name=""
              required
              id=""
            />
            <button
              type="submit"
              className=" bg-primary p-2.5 2xl:p-3 px-3.5 2xl:px-4 text-white text-sm 2xl:text-base font-semibold  w-fit inline-flex my-4 items-center gap-4"
            >
              Contace Us
              <MdArrowRightAlt className=" text-white 2xl:text-3xl text-xl" />
            </button>
          </form>
        </div>
      </div>
      <div
        id="about-us"
        className="flex flex-col   items-start  my-16 px-4 md:px-12 2xl:px-16 2xl:my-20 gap-5"
      >
        <p className="text-lg font-light text-white bg-primary px-4 py-2">
          Our services
        </p>
        <h2 className="text-3xl font-bold text-primary-50 mb-5">
          Begin Your Health Journey With Us
        </h2>
        <div className="w-full  grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Image
              src="/service1.png"
              alt="service"
              width={100}
              height={100}
              className=" w-full  mb-3 "
            />

            <h3 className=" text-xl 2xl:text-2xl font-semibold text-primary-50">
              Consultation
            </h3>
            <p className=" text-xs 2xl:text-base leading-normal tracking-wide text-primary-50">
              Our compassionate journey begins with a thorough care
              consultation. This initial step focuses on managing symptoms and
              enhancing the quality of life for our patients, laying the
              foundation for personalized care plans.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src="/service2.png"
              alt="service"
              width={100}
              height={100}
              className=" w-full  mb-3 "
            />

            <h3 className=" text-xl 2xl:text-2xl font-semibold text-primary-50">
              Care Plans
            </h3>
            <p className=" text-xs 2xl:text-base leading-normal tracking-wide text-primary-50">
              Recognizing the uniqueness of each patient, we craft
              individualized care plans. These plans address not only the
              physical aspects of care but also the emotional and spiritual
              well-being of our patients.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src="/service1.png"
              alt="service"
              width={100}
              height={100}
              className=" w-full  mb-3 "
            />

            <h3 className=" text-xl 2xl:text-2xl font-semibold text-primary-50">
              Pain Management
            </h3>
            <p className=" text-xs 2xl:text-base leading-normal tracking-wide text-primary-50">
              Ensuring pain-free days is paramount in our approach. Our pain
              management strategies are carefully tailored to provide effective
              relief, contributing to a peaceful and comfortable experience for
              our patients.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src="/service3.png"
              alt="service"
              width={100}
              height={100}
              className=" w-full  mb-3 "
            />

            <h3 className=" text-xl 2xl:text-2xl font-semibold text-primary-50">
              24/7 Nursing Care
            </h3>
            <p className=" text-xs 2xl:text-base leading-normal tracking-wide text-primary-50">
              Recognizing that caregiving is a round-the-clock responsibility,
              our skilled nursing team is available 24/7. This ensures that our
              patients receive the necessary medical attention and assistance
              whenever required.
            </p>
          </div>
        </div>
      </div>
      <div id="service" className=" w-full relative">
        <div className="flex flex-col w-full  md:w-[65%] 2xl:w-[72%]   items-start bg-primary py-16  my-16 px-4 md:px-28 2xl:px-56 2xl:my-20 gap-5">
          <p className="  text-blue-800 bg-white px-4 py-2">About Us</p>
          <h2 className="text-3xl font-bold text-white  ">
            Here For You Always
          </h2>
          <p className=" text-white text-xs tracking-wide leading-loose maxw">
            Journey hospice Services is a family-owned hospice center in Los
            Angeles that offers quality end of life care. We now serve Burbank,
            Pasadena, Los Angeles, and the surrounding communities. Meeting the
            psychosocial needs of our patients is our priority. We provide
            comfortable care 24/7 to our patients.
          </p>
          <ul className="flex flex-col list-none gap-3">
            <li className=" flex text-white font-semibold text-sm gap-2 items-center ">
              <Image
                src="/tick.png"
                alt="check"
                width={30}
                height={30}
                className=" w-[20px]  "
              />
              <p>24/7 Telehealth</p>
            </li>
            <li className=" flex text-white font-semibold text-sm gap-2 items-center ">
              <Image
                src="/tick.png"
                alt="check"
                width={30}
                height={30}
                className=" w-[20px]  "
              />
              <p>24/7 Pharmacy Availability</p>
            </li>
            <li className=" flex text-white font-semibold text-sm gap-2 items-center ">
              <Image
                src="/tick.png"
                alt="check"
                width={30}
                height={30}
                className=" w-[20px]  "
              />
              <p>Durable Medical Equipments</p>
            </li>
            <li className=" flex text-white font-semibold text-sm gap-2 items-center ">
              <Image
                src="/tick.png"
                alt="check"
                width={30}
                height={30}
                className=" w-[20px]  "
              />
              <p>Medication Symptoms Managment</p>
            </li>
            <li className=" flex text-white font-semibold text-sm gap-2 items-center ">
              <Image
                src="/tick.png"
                alt="check"
                width={30}
                height={30}
                className=" w-[20px]  "
              />
              <p>Other Medical Supplies</p>
            </li>
          </ul>
        </div>
        <Image
          src="/main.png"
          alt="bg"
          width={400}
          height={400}
          className=" hidden md:block absolute right-0 bottom-0 lg:w-[500px] "
        />
      </div>

      <div
        id="team"
        className="flex flex-col   items-start  my-16 px-4 md:px-12 2xl:px-16 2xl:my-20 gap-5"
      >
        <h2 className=" text-3xl  font-bold text-primary-50 text-center md:text-start mb-5 ">
          The Skilled Professionals Making A <br /> Difference At Journey
          Hospice Services
        </h2>
        {service.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-6 justify-between "
          >
            <div className=" w-32 h-32 bg-[#F1F9FF] p-7">
              <Image
                src={item.image}
                alt="team"
                width={100}
                height={100}
                className=" w-full object-cover     object-center   "
              />
            </div>
            <div className=" flex  flex-col ">
              <h2 className=" text-xl 2xl:text-2xl text-primary-50 font-bold mb-2">
                {item.title}
              </h2>
              <p className=" text-primary-50 tracking-wide max-w-5xl 2xl:max-w-7xl  ">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div id="direction" className=" w-full">
        <Image
          src="/map2.png"
          alt="bg"
          width={100}
          height={100}
          className=" w-full "
        />
      </div>
      <footer className=" w-full bg-primary flex-wrap py-20 pb-32 px-4 md:px-12 2xl:px-16 2xl:py-24 lg:gap-5 flex justify-start gap-8 lg:justify-evenly ">
        <div className="flex flex-col gap-2">
          <h2 className=" text-lg font-bold text-white mb-3">Contact Us</h2>
          <p className=" text-white font-light">
            <span className=" mr-2">Address:{"  "}</span>
            500 E Olive Ave Suite: 710 <br /> Burbank CA 91501
          </p>
          <p className=" text-white font-light">
            <span className=" mr-2">Phone:</span>
            818-558-4300
          </p>
          <p className=" text-white font-light">
            <span className=" mr-2"> Email:{"  "}</span>
            Info@journeyhospiceservices.com
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className=" text-lg font-bold text-white mb-3">Services</h2>
          <p className=" text-white font-light">Consultaion</p>
          <p className=" text-white font-light">Care Plans</p>
          <p className=" text-white font-light">Pain Management </p>
          <p className=" text-white font-light">24/7 Nursing Care</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className=" text-lg font-bold text-white mb-3">Our Practices</h2>
          <button
            onClick={() => scrollToSection("about-us")}
            className="text-white text-start font-light"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("what-is-hospice")}
            className="text-white text-start font-light"
          >
            Contact Us
          </button>
          <button
            onClick={() => scrollToSection("direction")}
            className="text-white text-start font-light"
          >
            Find A Location
          </button>
        </div>
      </footer>
    </main>
  );
};

export default page;
