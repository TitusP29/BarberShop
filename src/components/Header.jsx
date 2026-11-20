
import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { link: "Home", path: "hero" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
    { link: "Services", path: "services" },
    { link: "Testimonial", path: "testimonial" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <nav className="flex justify-between items-center gap-4 bg-black lg:px-10 px-4 py-5 sticky top-0 z-50 border-b-4 border-[#a39446]">

      {/* Logo */}
      <div id="logo">
        <h1 className="text-white font-bold text-3xl md:text-5xl">
          Barber<span className="italic text-themeyellow">Shop</span>
        </h1>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex justify-center items-center gap-3">
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-themeyellow hover:text-black transition-all duration-300"
            to={path}
            spy={true}
            offset={-100}
            smooth={true}
          >
            {link}
          </Link>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <button
        type="button"
        className="flex lg:hidden justify-center items-center"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? (
          <FaXmark className="text-white text-3xl cursor-pointer" />
        ) : (
          <FaBars className="text-white text-3xl cursor-pointer" />
        )}
      </button>

      {/* Mobile Navigation */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } w-full bg-slate-900 p-4 absolute top-full left-0 flex-col lg:hidden shadow-lg`}
      >
        <ul className="flex flex-col justify-center items-center gap-2 w-full">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-themeyellow hover:text-black w-full text-center transition-all duration-300"
              to={path}
              spy={true}
              offset={-80}
              smooth={true}
              onClick={closeMenu}
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>
      <button className='bg-themeyellow px-8 py-3 rounded-full hover:bg-white hover:text-black font-bold mt-3 hidden lg:flex transform hover:scale-110 transition transform duration-300 cursor-pointer'>Book Now</button>
    </nav>
  );
};

export default Header;
