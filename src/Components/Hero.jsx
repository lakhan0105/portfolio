import React from "react";
import { ReactTyped } from "react-typed";
import { IoLocationOutline } from "react-icons/io5";

// import heroImg
const heroImg = "src/assets/Website Maintenance - 640x478.png";

// primary color: text-slate-300
// secondary color: #b0c4de
// for my name el: #8bc34a

function Hero() {
  return (
    <section className="section-center mt-32 h-[65vh] md:h-[85vh] md:mt-0 md:mb-0 flex justify-between md:items-center">
      <div className="text-[#b0c4de]">
        <h2 className="text-xl md:text-2xl mb-0 md:mb-0.5">Hello,</h2>
        <h2 className="text-3xl md:text-5xl mb-2 md:mb-2">
          I am <span className="text-[#8bc34a] font-semibold">Lakhan</span>,
        </h2>

        {/* FOR SMALL SCREENS */}
        <div className="min-h-[100px] md:hidden">
          <ReactTyped
            strings={["I'm a Front End Developer"]}
            typeSpeed={40}
            className="md:hidden text-5xl font-bold w-full"
          />
        </div>

        {/* FOR LARGE SCREENS */}
        <div className="hidden md:inline-block">
          <ReactTyped
            strings={["I build websites", "Front End Developer"]}
            typeSpeed={40}
            className="text-6xl font-bold w-full hidden md:inline-block "
          />
        </div>

        <p className="hidden md:block max-w-[70%] mt-4">
          Welcome to my portfolio! I am delighted to have you here. I specialize
          in building responsive websites. Feel free to explore my work below.
          Thank you for visiting!
        </p>

        <p className="mt-4 md:mt-4 text-[#b0c4de] flex items-center gap-1">
          <span className="text-2xl md:text-xl">
            <IoLocationOutline />
          </span>
          <span className="text-md md:text-md">Bengaluru, India</span>
        </p>

        <div className="mt-5 md:mt-5">
          <button className="ring-1 ring-slate-400 text-slate-300 px-5 py-1 capitalize rounded-md text-xl">
            projects
          </button>
        </div>
      </div>
      <div className="hidden lg:block">
        <img src={heroImg} alt="hero img not found" />
      </div>
    </section>
  );
}

export default Hero;
