
import React, { useEffect } from "react";

import heroimg from "../assets/images/hero.jpg";
import sissor from "../assets/images/sissor.png";
import menshair from "../assets/images/menshair.png";
import womenhair from "../assets/images/womenhair.png";
import trimmer from "../assets/images/trimmer.png";

import { FaLocationDot, FaHeadphones } from "react-icons/fa6";
import { MdOutlinePhoneAndroid, MdEmail } from "react-icons/md";

import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      once: true,
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="w-full md:px-[120px] px-10 py-10 flex flex-col md:flex-row justify-center items-center gap-20"
      >
        <div
          id="content-box"
          className="flex flex-col justify-center items-start gap-10"
        >
          <h1 data-aos="zoom-in" className="text-2xl text-black font-semibold">
            WELCOME TO
          </h1>

          <h1 data-aos="zoom-in" className="text-6xl text-black font-bold">
            PRIMO BARBERSHOP
          </h1>

          <div
            data-aos="slide-up"
            className="flex flex-col justify-center items-start gap-6"
          >
            <div className="flex justify-center items-center gap-3">
              <FaLocationDot className="text-black text-2xl" />
              <h2 className="text-xl text-gray-800 font-semibold">
                123 Jabulani Street, Atteridgeville, Pretoria
              </h2>
            </div>

            <div className="flex justify-center items-center gap-3">
              <MdOutlinePhoneAndroid className="text-2xl text-black" />
              <h2 className="text-xl text-gray-800 font-semibold">
                012 345 6789
              </h2>
            </div>

            <div className="flex justify-center items-center gap-3">
              <MdEmail className="text-2xl text-black" />
              <h2 className="text-xl text-gray-800 font-semibold">
                info@barbershop.com
              </h2>
            </div>

            <div className="flex justify-center items-center gap-3">
              <FaHeadphones className="text-2xl text-black" />
              <h2 className="text-xl text-gray-800 font-semibold">
                customer@gmail.com
              </h2>
            </div>
          </div>

          <button
            data-aos="zoom-in"
            className="px-10 py-4 rounded-xl border-2 border-black text-black font-semibold text-lg hover:bg-black hover:text-white transition-all"
          >
            Book Online
          </button>
        </div>

        <div data-aos="zoom-in" className="md:w-[50%] w-full">
          <img
            src={heroimg}
            alt="Professional barber cutting hair"
            className="rounded-xl w-full md:h-[700px] h-[500px] object-cover"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="grid grid-cols-1 md:grid-cols-4 justify-center items-start w-full md:px-[120px] px-10 py-10 gap-10">

        {[
          { image: sissor, title: "Regular Haircut" },
          { image: menshair, title: "Men's Haircut" },
          { image: trimmer, title: "Beard Trimming" },
          { image: womenhair, title: "Women's Haircut" },
        ].map((service, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 200}
            className="flex flex-col justify-center items-center gap-4"
          >
            <img
              src={service.image}
              alt={service.title}
              className="size-16 object-contain transform hover:scale-110 transition-transform duration-300 cursor-pointer"
            />

            <h2 className="text-2xl text-black font-semibold">
              {service.title}
            </h2>

            <button className="px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-themeyellow hover:text-black cursor-pointer transition-all">
              MORE
            </button>
          </div>
        ))}
      </section>
    </>
  );
};

export default Hero;
