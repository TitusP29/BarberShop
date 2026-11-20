
import React, { useEffect } from "react";

import gal1 from "../assets/images/gal1.jpg";
import gal2 from "../assets/images/gal2.jpg";
import gal3 from "../assets/images/gal3.jpg";
import gal4 from "../assets/images/gal4.jpg";
import gal5 from "../assets/images/gal5.jpg";
import gal6 from "../assets/images/gal6.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const Gallary = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      once: true,
    });
  }, []);

  const galleryImages = [
    gal1, gal2, gal3, gal4, gal5, gal6,
  ];

  return (
    <>
      <section className="w-full flex flex-col md:px-20 px-6 py-20 pb-40 justify-center items-center gap-10 bg-gray-900">
        <h1 className="text-3xl md:text-5xl text-white font-bold text-center">
          Experience the Best Haircut & Shaving Services
        </h1>
      </section>

      <div className="w-full flex justify-center items-center px-6 py-10">
        <div className="lg:w-[80%] w-full grid md:grid-cols-3 grid-cols-1 justify-items-center items-center gap-8">
          {galleryImages.map((image, index) => (
            <img
              key={index}
              data-aos="zoom-out"
              data-aos-delay={index * 100}
              src={image}
              alt={`Barbershop gallery ${index + 1}`}
              className="rounded-xl w-full max-w-[400px] h-[300px] object-cover shadow-lg"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallary;
