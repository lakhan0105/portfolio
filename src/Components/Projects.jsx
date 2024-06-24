import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Blog web app",
    description: "A brief description of Project One.",
    imageUrl: "src/assets/Screenshot 2024-06-23 at 7.31.04 PM.png",
    tech: ["react", "tailwindcss", "appwrite", "css", "html"],
    demoLink: "https://projectone.demo",
    codeLink: "https://github.com/username/projectone",
  },
  {
    title: "Project One",
    description: "A brief description of Project One.",
    imageUrl: "src/assets/Screenshot 2024-06-23 at 7.31.04 PM.png",
    tech: ["react", "tailwindcss", "appwrite", "css", "html"],
    demoLink: "https://projectone.demo",
    codeLink: "https://github.com/username/projectone",
  },
  // Add more projects here
];

function Projects() {
  return (
    <div className="section-center mt-16 text-[#b0c4de] relative">
      <h2 className="capitalize text-3xl font-semibold text-center mb-0">
        Projects
      </h2>

      <div className="w-full mx-auto flex flex-col justify-center">
        {projects.map((project) => {
          const { title, description, imageUrl, demoLink, codeLink, tech } =
            project;
          return (
            <motion.article
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-[90%] h-[500px] mx-auto b-[#007bffa1] flex items-center gap-5 even:flex-row-reverse mb-16"
            >
              {/* IMAGE */}
              <div
                className={`w-[60%] grid place-items-center self-center b-[#007bffa1] relative')]`}
              >
                <img
                  src={imageUrl}
                  alt="not found"
                  className="w-[100%] h-[100%] rounded object-cover]"
                />
              </div>

              {/* INFO */}
              <div className="w-[40%] h-full mt-32  b-[#003352] rounded">
                <h2 className="text-3xl font-semibold tex-[#fff] mb-2">
                  {title}
                </h2>
                <p className="text-sm mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestiae ipsa voluptate, excepturi enim obcaecati minima?
                  Aperiam adipisci accusantium repudiandae dolorum.
                </p>

                {/* TECH STACKS */}
                <div className="flex flex-wrap gap-2 max-w-[60%] relative">
                  {tech?.map((item) => {
                    return (
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="border px-2 text-sm capitalize rounded"
                      >
                        {item}
                      </motion.div>
                    );
                  })}
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
