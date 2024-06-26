import React from "react";
import { ReactTyped } from "react-typed";
import { IoLocationOutline } from "react-icons/io5";

// import heroImg
import heroImg from "../assets/Website-Maintenance-640x478.webp";
import { Link } from "react-scroll";

// primary color: text-slate-300
// secondary color: #b0c4de
// for my name el: #8bc34a

function Hero() {
  return (
    <section
      id="home"
      className="section-center h-[72vh] md:h-[85vh] md:mt-0 md:mb-0 flex justify-between items-center md:items-center"
    >
      <div className="text-cyan-200">
        <h2 className="text-xl md:text-2xl mb-0 md:mb-0.5">Hello,</h2>
        <h2 className="text-3xl md:text-5xl mb-2 md:mb-2">
          I am{" "}
          <span className="text-4xl md:text-5xl text-lime-400 font-semibold">
            Lakhan
          </span>
          ,
        </h2>

        {/* FOR SMALL SCREENS */}
        <div className="min-h-[100px] md:hidden">
          <ReactTyped
            strings={["A Front End Developer"]}
            typeSpeed={40}
            className="md:hidden text-5xl font-bold w-full"
          />
        </div>

        {/* FOR LARGE SCREENS */}
        <div className="hidden md:inline-block">
          <ReactTyped
            strings={["I build web apps", "Front End Developer"]}
            typeSpeed={40}
            className="text-6xl font-bold w-full hidden md:inline-block "
          />
        </div>

        <p className="hidde md:block max-w-[90%] md:max-w-[70%] mt-3 text-cyan-300 leading-6">
          Welcome {""}
          <span className="hidden md:inline-block"> to my portfolio</span>! I am
          delighted to have you here. I specialize in building responsive
          websites. Feel free to explore my work below.
          <span className="hidden md:inline-block">
            Thank you for visiting!
          </span>
        </p>

        <p className="mt-4 md:mt-4 text-cyan-300 flex items-center gap-1">
          <span className="text-2xl md:text-xl">
            <IoLocationOutline />
          </span>
          <span className="text-md md:text-md">Bengaluru, India</span>
        </p>

        <div className="mt-6 md:mt-5">
          <Link
            to="projects"
            className="cursor-pointer ring-1 ring-cyan-300 hover:ring-cyan-200 text-cyan-300 hover:text-cyan-200 px-5 py-1 capitalize rounded-md text-xl"
          >
            projects
          </Link>
        </div>
      </div>
      <div className="hidden lg:block">
        <img src={heroImg} alt="hero img not found" />
      </div>
    </section>
  );
}

export default Hero;
