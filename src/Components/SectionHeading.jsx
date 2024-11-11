import { motion } from "framer-motion";
import React from "react";

function SectionHeading({ sectionName, sectionId }) {
  return (
    <h2 className=" text-cyan-200 text-4xl font-semibold text-center mb-10 tracking-wide">
      {sectionName}
    </h2>
  );
}

export default SectionHeading;
