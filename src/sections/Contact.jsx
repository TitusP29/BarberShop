
import React, { useEffect } from "react";
import contactimg from "../assets/images/contactimg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      once: true,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log({ name, email, message });

    alert("Your message has been submitted successfully!");

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="w-full h-fit grid grid-cols-1 lg:grid-cols-2 justify-center items-start"
    >
      {/* Contact Image */}
      <div
        data-aos="zoom-in"
        id="img-box"
        className="w-full bg-cover bg-center bg-no-repeat h-[400px] lg:h-[700px]"
        style={{ backgroundImage: `url(${contactimg})` }}
      ></div>

      {/* Contact Form */}
      <div
        id="form-box"
        className="bg-gray-900 p-8 md:p-16 flex flex-col justify-center items-center gap-12 w-full min-h-[700px]"
      >
        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-white text-4xl md:text-6xl font-bold text-center"
        >
          Contact Us
        </h1>

        <form
          onSubmit={handleSubmit}
          data-aos="zoom-out"
          data-aos-delay="400"
          id="form"
          className="w-full flex flex-col justify-center items-center gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            required
            className="w-full p-3 text-white font-semibold outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
            className="w-full p-3 text-white font-semibold outline-none"
          />

<textarea
  name="message"
  rows="5"
  placeholder="Enter your message here..."
  required
  className="w-full p-4 text-black bg-white border-2 border-gray-300 rounded-md font-medium text-base placeholder-gray-500 focus:outline-none focus:border-yellow-400 resize-y"
/>

<button
  type="submit"
  className="bg-themeyellow hover:bg-[#92843b] text-black cursor-pointer w-full font-bold text-lg p-4 rounded-md transition-all duration-300"
>
  SUBMIT MESSAGE
</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;