import React from "react";
import { ReactTyped } from "react-typed";
import { IoLocationOutline } from "react-icons/io5";

// secondary color: #b0c4de
// primary color: text-slate-300
// for my name el: #8bc34a

function Hero() {
  return (
    <section className="section-center md:flex md:justify-between pt-16">
      <div className="text-[#b0c4de] md:px-2">
        <h2 className="text-xl md:text-2xl mb-0 md:mb-0.5">Hello,</h2>
        <h2 className="text-2xl md:text-4xl mb-2 md:mb-2">
          I am <span className="text-[#8bc34a] font-semibold">Lakhan</span>,
        </h2>

        {/* FOR SMALL SCREENS */}
        <div className="min-h-[90px] md:hidden  text-slat-300">
          <ReactTyped
            strings={["I'm a Front End Developer"]}
            typeSpeed={40}
            className="md:hidden text-4xl font-bold w-full"
          />
        </div>

        {/* FOR LARGE SCREENS */}
        <div className="hidden md:inline-block  text-slat-300">
          <ReactTyped
            strings={["I build responsive websites", "Front End Developer"]}
            typeSpeed={40}
            className="text-5xl font-bold w-full hidden md:inline-block "
          />
        </div>

        <p className="hidden md:block max-w-[50%] mt-4 px-1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          ad quos reprehenderit et voluptates nisi commodi distinctio blanditiis
          qui consectetur?
        </p>

        <p className="mt-4 md:mt-4 text-[#b0c4de] flex items-center gap-1">
          <span className="text-2xl md:text-xl">
            <IoLocationOutline />
          </span>
          <span className="text-md md:text-md">Bengaluru, India</span>
        </p>

        <div className="mt-5 md:mt-5 px-1">
          <button className="ring-1 ring-slate-400 text-slate-300 px-5 py-1 capitalize rounded-md text-xl">
            projects
          </button>
        </div>
      </div>
      <div className="hidden md:block">right</div>
    </section>
  );
}

export default Hero;
