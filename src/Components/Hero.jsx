import React from "react";
import { ReactTyped } from "react-typed";
import { IoLocationOutline } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";

// import heroImg
import heroImg from "../assets/lakhan3.png";

function Hero() {
  return (
    <section id="home" className="section-center">
      <div className="px-5 md:px-0 flex justify-center gap-16 items-start mt-[170px] mb-[140px]">
        {/* left */}
        <div className="text-white/90 mt-2">
          <h2 className="text-4xl md:text-5xl font-semibold">Hello, I'm</h2>
          <h3 className="text-5xl mt-2 font-bold">
            a <span className="text-cyan-500">Front End Developer</span>
          </h3>
          <p className="max-w-[550px] mt-3.5 text-slate-400 tracking-wider">
            I specialize in building responsive and interactive web applications
            using modern front-end technologies like ReactJS, JavaScript, HTML,
            and CSS. My focus is on delivering seamless user experiences that
            combine performance and aesthetics.
          </p>
          <p className="mt-4 text-slate-400">
            Currently open to front-end opportunities 🚀
          </p>

          {/* buttons container */}
          <div>
            <button className="rounded p-2 px-4 mt-4 bg-blue-600 hover:bg-blue-600/95 flex gap-1.5">
              <span className="text-xl pt-0.2">
                <IoDocumentText />
              </span>
              <span className="font-semibold">Resume</span>
            </button>
          </div>
        </div>

        {/* right */}
        <div className="hidden lg:block w-[350px]">
          <img src={heroImg} alt="hero img not found" className="shadow-xl" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
