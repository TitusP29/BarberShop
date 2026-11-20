import React from "react";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>
      <section className="bg-slate-200 w-full md:px-20 px-6 md:py-20 py-12 flex flex-col justify-center items-center gap-6 border-[10px] border-themeyellow">
        {/* Logo */}
        <h1 className="text-black font-bold text-4xl md:text-5xl">
          Barber<span className="italic text-themeyellow">Shop</span>
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-center font-semibold text-slate-600 max-w-2xl">
          We provide the best barber services in town. We are dedicated to
          providing exceptional grooming experiences for our clients.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-4 mt-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="bg-[#a39446] p-4 rounded-full cursor-pointer hover:bg-black hover:scale-110 transition-all duration-300"
          >
            <FaFacebook className="w-6 h-6 fill-white" />
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            className="bg-[#a39446] p-4 rounded-full cursor-pointer hover:bg-black hover:scale-110 transition-all duration-300"
          >
            <FaYoutube className="w-6 h-6 fill-white" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="bg-[#a39446] p-4 rounded-full cursor-pointer hover:bg-black hover:scale-110 transition-all duration-300"
          >
            <FaInstagram className="w-6 h-6 fill-white" />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="bg-[#a39446] p-4 rounded-full cursor-pointer hover:bg-black hover:scale-110 transition-all duration-300"
          >
            <FaTwitter className="w-6 h-6 fill-white" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-slate-600 text-center mt-6">
          © {new Date().getFullYear()} BarberShop. All Rights Reserved. Made by Titus Kubayi.
        </p>
      </section>

      {/* Back To Top */}
      <div
        data-aos="slide-right"
        data-aos-delay="200"
        className="bg-themeyellow p-4 rounded-full hover:bg-black cursor-pointer fixed lg:bottom-12 bottom-6 right-6 z-40 transition-all duration-300"
      >
        <Link
          to="home"
          spy={true}
          offset={-100}
          smooth={true}
          aria-label="Back to top"
        >
          <FaArrowUp className="w-6 h-6 fill-white" />
        </Link>
      </div>
    </>
  );
};

export default Footer;
