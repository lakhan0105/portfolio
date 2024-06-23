import React, { useEffect, useState } from "react";
import "devicon/devicon.min.css";
import { motion } from "framer-motion";
import { MdKeyboardArrowDown } from "react-icons/md";

const skillsData = [
  { icon: "html5" },
  { icon: "css3" },
  { icon: "javascript" },
  { icon: "react" },
  { icon: "tailwindcss" },
  { icon: "git" },
];

function Skills() {
  const [showArrow, setShowArrow] = useState(true);

  function handleScroll() {
    if (window.scrollY > 20) {
      setShowArrow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showArrow]);

  return (
    <div className="section-center mt-2 w-full text-[#b0c4de] relative">
      {showArrow && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 10 }}
          className="hidden md:block text-slate-300 text-5xl w-full"
        >
          <MdKeyboardArrowDown className="mx-auto" />
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        id="skills"
        className="capitalize text-3xl font-semibold text-center mb-8"
      >
        technical skills
      </motion.h2>

      <div className="w-full grid grid-cols-3 place-items-center gap-4 md:max-w-[80%] md:mx-auto md:flex md:justify-evenly flex-wrap md:gap-6">
        {skillsData.map((item) => {
          const { icon } = item;
          return (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-24 p-3 bg-gradient-to-b from-[#1e2a388b] to-[#25354788] rounded md:bg-none md:w-auto md:px-5 md:py-2 text-center inline-block mb-2 md:hover:bg-[#003352] md:hover:border-[#00e0ff] md:hover:shadow-md hover:shadow-[rgba(0, 0, 0, 0.5)]"
            >
              <i
                class={`devicon-${icon}-plain colored text-5xl md:text-7xl`}
              ></i>
              <p className="text-center text-sm mt-1 capitalize">{icon}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
