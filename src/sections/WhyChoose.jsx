
import React, { useEffect } from "react";
import whyimg from "../assets/images/whychoose.jpg";
import { FaAngleDoubleRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChoose = () => {
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
    <section
      id="about"
      className="w-full px-10 md:px-20 py-10 md:py-20 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${whyimg})` }}
    >
      {/* Working Hours */}
      <div
        data-aos="zoom-in"
        className="flex flex-col justify-center items-center gap-10 bg-white p-10 rounded-xl md:w-[40%] w-full"
      >
        <h1 className="text-themeyellow text-4xl font-bold">
          WORKING HOURS
        </h1>

        <div className="flex flex-col justify-center items-center gap-4">
          {[
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ].map((day) => (
            <p key={day} className="text-xl text-black font-medium">
              {day}: 9:00 AM - 6:00 PM
            </p>
          ))}
        </div>

        <button className="px-10 py-4 rounded-xl border-2 border-black text-black font-semibold text-lg hover:bg-black hover:text-white mt-6 transition-all">
          BOOK ONLINE
        </button>
      </div>

      {/* Why Choose Us */}
      <div
        data-aos="slide-up"
        data-aos-delay="200"
        className="md:w-[40%] w-full flex flex-col justify-center items-start gap-6 h-fit"
      >
        <h1 className="text-4xl md:text-6xl text-white font-bold text-center md:text-left">
          WHY CHOOSE US?
        </h1>

        <p className="text-xl text-white font-medium md:text-start text-center">
          We are committed to providing the best barbering experience with
          top-quality services and a welcoming atmosphere.
        </p>

        <div className="flex flex-col justify-center items-start gap-4">
          {[
            "Expert Barbers",
            "Premium Hair Products",
            "Affordable Prices",
            "Clean and Comfortable Environment",
            "Excellent Customer Service",
          ].map((item) => (
            <div
              key={item}
              className="flex justify-center items-center gap-3"
            >
              <FaAngleDoubleRight className="text-white text-2xl" />
              <h2 className="text-xl text-white font-semibold">{item}</h2>
            </div>
          ))}

          <button className="text-black px-10 py-4 bg-white hover:bg-themeyellow hover:text-black rounded-xl font-semibold transition-all mt-4">
            BOOK NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
