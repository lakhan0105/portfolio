import React from "react";
import SectionHeading from "./SectionHeading";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";

import blogAppImg from "../assets/project-imgs/blog-app.webp";
import eventBookingAppImg from "../assets/project-imgs/event-booking-app.webp";
import msfitnessImg from "../assets/project-imgs/ms-fitness.webp";
import { SiAppwrite } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "MS Fitness ",
    description:
      "A gym management app with an admin dashboard for tracking 500+ users memberships, search functionality, and secure, admin-only access.",
    imageUrl: msfitnessImg,
    tech: [
      <FaReact />,
      <RiTailwindCssFill />,
      <FaHtml5 />,
      <FaJs />,
      <SiAppwrite />,
    ],
    bulletPoints: [
      "admin dashboard with 500+ records",
      "membership tracking & search feature",
      "only authorized staff can access data",
    ],
    demoLink: "https://ms-fitness.netlify.app",
    codeLink: "https://github.com/lakhan0105/gym-website",
  },
  {
    title: "Blogs app",
    description:
      "Create and organize blog posts with an editor that supports image uploads, categorization, and secure user authentication.",
    imageUrl: blogAppImg,
    tech: [
      <FaReact />,
      <RiTailwindCssFill />,
      <FaHtml5 />,
      <FaJs />,
      <SiAppwrite />,
    ],
    bulletPoints: [
      "Integrated text editor with image upload",
      "Categorize posts for content management",
      "Secure user authentication",
    ],
    demoLink: "https://blog-scribe.netlify.app",
    codeLink: "https://github.com/lakhan0105/BlogScribe",
  },
  {
    title: "Products Renting app",
    description:
      "A streamlined platform for booking event essentials, allowing users to browse, check availability, and reserve items like sound systems, tents, and lighting.",
    imageUrl: eventBookingAppImg,
    tech: [
      <FaReact />,
      <RiTailwindCssFill />,
      <FaHtml5 />,
      <FaJs />,
      <SiAppwrite />,
    ],
    bulletPoints: [],
    demoLink: "https://renting-for-events.netlify.app/",
    codeLink: "https://github.com/lakhan0105/eventPlanner",
  },
  // Add more projects here
];

function Projects() {
  return (
    <section className="section-center mt-10">
      <div>
        <SectionHeading
          sectionName={"Recent projects"}
          sectionId={"projects"}
        ></SectionHeading>

        {/* cards container */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-12 md:gap-8 mb-20 content-center	px-10">
          {projects.map((item, index) => {
            const {
              title,
              imageUrl,
              bulletPoints,
              description,
              tech,
              demoLink,
              codeLink,
            } = item;
            return (
              <article
                key={index}
                className="rounded-lg overflow-hidden w-full md:max-w-[350px] bg-[#27272A] backdrop-blur-xl"
              >
                {/* TOP (image container) */}
                <div className="w-full h-[200px]">
                  <img
                    src={imageUrl}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* BOTTOM */}
                <div className="pt-5 pb-6 px-3 text-white/80">
                  <h2 className="text-2xl mb-2.5 font-semibold tracking-wide">
                    {title}
                  </h2>

                  <p className="text tracking-wide text-zinc-400 leading-relaxed">
                    {description}
                  </p>

                  {/* tech stack */}
                  <ul className="flex mt-4 mb-7 items-center justify-start gap-4 text-zinc-400 pl-0.5 text-sm">
                    {tech.map((item, index) => {
                      return (
                        <li key={index} className="hover:text-zinc-300">
                          {item}
                        </li>
                      );
                    })}
                  </ul>

                  {/* buttons container */}
                  <div className="text-zinc-200 flex items-center gap-4">
                    <a href={demoLink} alt="project link not found">
                      <button className="ring-1 bg-blue-600 hover:bg-blue-600/90 px-3 py-1.5 rounded text-sm flex gap-1.5 ">
                        <span className="pt-0.5">
                          <FaExternalLinkAlt />
                        </span>
                        view
                      </button>
                    </a>

                    <a href={codeLink} alt="code link not found">
                      <button className="flex gap-1.5 rounded ring-1 ring-zinc-400/50 hover:ring-zinc-400/60 text-zinc-300 hover:text-zinc-200 py-1 px-3">
                        <span className="pt-1">
                          <FaGithub />
                        </span>{" "}
                        code
                      </button>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
