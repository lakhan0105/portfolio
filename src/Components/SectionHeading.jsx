import { motion } from "framer-motion";
import React from "react";

function SectionHeading({ sectionName, sectionId }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id={sectionId}
      className="capitalize text-cyan-200 text-3xl font-semibold text-center mb-8"
    >
      {sectionName}
    </motion.h2>
  );
}

export default SectionHeading;
