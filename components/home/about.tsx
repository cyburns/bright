"use client";

import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";

const corm = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const phrase =
  "We are creatives who focus on quality work that offers powerful solutions, combining great designs with functionality.";

export const slideUp = {
  initial: {
    y: "100%",
  },
  open: (i: number) => ({
    y: "0%",
    transition: { duration: 0.5, delay: 0.02 * i },
  }),
  closed: {
    y: "100%",
    transition: { duration: 0.5 },
  },
};

export const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

export default function About() {
  const about = useRef(null);
  const isInView = useInView(about);

  return (
    <section
      ref={about}
      className="leading-8 scroll-mt-28 flex flex-col w-full sm:flex-row sm:mt-32 text-white mix-blend-difference"
      id="about"
    >
      <div className="w-full">
        <h1 className="text-xl sm:text-4xl font-extralight sm:font-medium mb-1 mt-7">
          ✦ WHO WE ARE
        </h1>
      </div>
      <div
        className={`${corm.className} mt-4 sm:mt-0  text-[10vw] sm:text-[3vw] !leading-[1.1] font-medium`}
      >
        <motion.span>
          {phrase.split(" ").map((word, index) => (
            <span
              key={index}
              className="relative overflow-hidden inline-flex mr-2 pb-1"
            >
              <motion.span
                variants={slideUp}
                custom={index}
                key={index}
                initial="initial"
                animate={isInView ? "open" : "closed"}
                className="inline-block"
              >
                {word}{" "}
              </motion.span>
            </span>
          ))}
        </motion.span>
      </div>
    </section>
  );
}
