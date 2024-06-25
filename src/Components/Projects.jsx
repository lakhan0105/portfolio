import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import SectionHeading from "./SectionHeading";

import blogAppImg from "../assets/project-imgs/blog-app.webp";
import eventBookingAppImg from "../assets/project-imgs/event-booking-app.webp";

const projects = [
  {
    title: "Blogs app",
    description:
      "Write, save, and manage blog posts with an integrated text editor, featuring image uploads, categorization, and user authentication for personalized content management.",
    imageUrl: blogAppImg,
    tech: ["react", "tailwindcss", "appwrite", "css", "html", "js"],
    demoLink: "https://blog-scribe.netlify.app",
    codeLink: "https://github.com/lakhan0105/BlogScribe",
  },
  {
    title: "Event booking app",
    description:
      "Platform designed to simplify the process of booking products for various events. Users can browse, check availability, and book essential items like sound systems, tents, and lighting.",
    imageUrl: eventBookingAppImg,
    tech: ["react", "tailwindcss", "appwrite", "css", "html", "js"],
    demoLink: "https://projectone.demo",
    codeLink: "https://github.com/username/projectone",
  },
  // Add more projects here
];

function Projects() {
  return (
    <div className="section-center mt-16 text-[#b0c4de]">
      <div className="w-full mx-auto flex flex-col justify-center relative">
        <SectionHeading sectionName={"projects"} sectionId={"projects"} />

        {projects.map((project) => {
          const { title, description, imageUrl, demoLink, codeLink, tech } =
            project;
          return (
            <motion.article
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full mx-auto flex flex-col md:flex-row md:items-start md:gap-5 md:odd:flex-row-reverse mb-20 md:mb-28"
            >
              {/* IMAGE */}
              <div className="w-full md:w-[60%] grid place-items-center self-center relative">
                <img
                  src={imageUrl}
                  alt="not found"
                  className="w-full h-full rounded object-cover"
                />
              </div>

              {/* INFO */}
              <div className="w-full md:w-[40%] md:h-full mt-4 md:mt-0 rounded ">
                <h2 className="text-4xl font-semibold text-cyan-100 mb-2">
                  {title}
                </h2>
                <p className="text-sm mb-4">{description}</p>

                {/* TECH STACKS */}
                <div className="flex flex-wrap gap-2 max-w-[60%] relative mb-4">
                  {tech?.map((item) => {
                    return (
                      <motion.button
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="ring-1 ring-lime-50/[0.7] px-2 text-sm capitalize rounded mb-1 text-lime-200/[0.9] hover:ring-2 hove:ring-lime-50/[1] hover:text-lime-200/[1] "
                      >
                        {item}
                      </motion.button>
                    );
                  })}
                </div>

                {/* LINKS */}
                <div className="mt-4 flex flex- items-center gap-3">
                  <a
                    href={demoLink}
                    className="inline-block text-md ring-cyan-100 px-3 py-1 rounded hover:bg-[#0080ff] bg-[#007bfff5] text-white"
                  >
                    live demo
                  </a>

                  <a href={codeLink} className="flex items-center gap-1">
                    <span className="text-2xl text-white">
                      <FaGithub />
                    </span>
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
