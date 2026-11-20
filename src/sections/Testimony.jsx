
import React, { useEffect } from "react";
import client1 from "../assets/images/client1.png";
import client2 from "../assets/images/client2.png";
import client3 from "../assets/images/client3.png";

import { BiSolidQuoteAltLeft } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";

const clients = [
  {
    image: client1,
    title: "Philani Mthembu",
    para: "I have been a client of this barbershop for over 5 years and I can confidently say that they are the best in the business. The staff is friendly and professional, and they always make sure that I leave looking my best. I highly recommend this barbershop to anyone looking for a great haircut or shave.",
  },
  {
    image: client2,
    title: "Sipho Nkosi",
    para: "I have been coming to this barbershop for years and I am always impressed with the quality of service. The barbers are skilled and attentive, and they take the time to understand what you want. Highly recommended!",
  },
  {
    image: client3,
    title: "Thabo Madimetja",
    para: "Best barbershop in town! The atmosphere is great and the staff is very welcoming. I always leave feeling refreshed and confident.",
  },
];

const Testimony = () => {
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
    id="testimonial"
    className="w-full min-h-screen md:px-20 px-6 py-20 flex flex-col justify-center items-center gap-10 bg-[#F4B400]"
  >
    <h1 className="text-4xl md:text-6xl text-white font-bold text-center">
      Testimonials
    </h1>

    <p className="text-lg md:text-xl text-white font-semibold text-center max-w-3xl leading-relaxed">
      These are testimonials from happy clients who have visited
      our barbershop. The best in town!
    </p>

      <div
        id="clients"
        className="w-full grid grid-cols-1 md:grid-cols-3 justify-center items-stretch gap-8"
      >
        {clients.map((item, index) => (
          <div
            data-aos="slide-up"
            data-aos-delay={index * 200}
            id={`client-${index}`}
            key={index}
            className="w-full bg-white p-8 md:p-10 flex flex-col justify-between items-center gap-6 rounded-3xl shadow-lg"
          >
            <div className="flex justify-between items-center gap-4 w-full">
              <div className="flex items-center gap-4 relative">
                <BiSolidQuoteAltLeft className="size-16 text-[#1caf7e] absolute -top-4 -left-2 opacity-20" />

                <h2 className="text-xl md:text-2xl text-black font-bold">
                  {item.title}
                </h2>
              </div>

              <img
                src={item.image}
                alt={item.title}
                className="w-[80px] h-[80px] rounded-full object-cover transform hover:scale-110 transition duration-300 cursor-pointer"
              />
            </div>

            <div className="w-full">
              <p className="text-left text-base text-gray-600 font-medium leading-relaxed">
                {item.para}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimony;
