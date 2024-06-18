"use client";

import React, { useRef, useState } from "react";
import Modal from "./modal";
import { motion, AnimatePresence, useInView } from "framer-motion";

const featuredWorks = [
  {
    metaOne: "AUDIA",
    title: "SHARE MUSIC",
    metaTwo: "[MOBILE]",
    src: "getaudia.com.png",
  },
  {
    metaOne: "REACTYPE",
    title: "NO-CODE BUILDER",
    metaTwo: "[WEB]",
    src: "reactype.dev.png",
  },
  {
    metaOne: "PORTFOLIO",
    title: "ViCTORY MODE",
    metaTwo: "[SHOWCASE]",
    src: "port.com.png",
  },
  {
    metaOne: "PRESS",
    title: "SPORTS",
    metaTwo: "[MOBILE]",
    src: "press.com.png",
  },
];

const selectedWorkds = [
  {
    metaOne: "SEATR",
    title: "FOOOOOD",
    metaTwo: "[MOBILE]",
    src: "seatr.png",
  },
  {
    metaOne: "CODESHARE",
    title: "SHARE YOUR CODE",
    metaTwo: "[WEB/MOBILE]",
    src: "Codeshare-port-pic.png",
  },
  {
    metaOne: "PORTFOLIO",
    title: "PINK + GREEN",
    metaTwo: "[WEB/DESIGN]",
    src: "cpd.com2.png",
  },

  {
    metaOne: "OFFICE",
    title: "STUDIO",
    metaTwo: "[WEB/DESIGN]",
    src: "officestudio.png",
  },
];

const Works = () => {
  const [activeSection, setActiveSection] = useState(1);
  const [activeWork, setActiveWork] = useState<null | number>(null);
  const [modal, setModal] = useState({ active: false, index: 0 });

  const workdsRef = useRef(null);
  const isInView = useInView(workdsRef);
  const works = activeSection === 0 ? selectedWorkds : featuredWorks;

  return (
    <div ref={workdsRef} id="works" className="mb-[25rem] w-full">
      <div className="flex flex-row justify-center mb-5">
        <button
          onClick={() => setActiveSection(0)}
          className={`${
            activeSection === 0 ? null : "text-opacity-40"
          } font-medium mb-8 text-xl uppercase leading-[1] text-center text-black dark:text-white hover:text-opacity-60 transition`}
        >
          ✦ LATEST WORKS
        </button>
        <p className="mx-7">/</p>
        <button
          onClick={() => setActiveSection(1)}
          className={`${
            activeSection === 1 ? null : "text-opacity-40"
          } font-medium mb-8 text-xl uppercase leading-[1] text-center text-black dark:text-white hover:text-opacity-6 transition`}
        >
          ✦ FEATURED WORKS
        </button>
      </div>

      <ul className="w-full relative h-[70px]">
        <AnimatePresence mode="wait">
          {works.map((work, index) => (
            <li
              key={index}
              onMouseEnter={() => {
                setModal({ active: true, index });
                setActiveWork(index);
              }}
              onMouseLeave={() => {
                setModal({ active: false, index });
                setActiveWork(null);
              }}
              className={`w-full h-full relative flex items-center group my-1 overflow-hidden transition duration-300 ${
                activeWork !== null && activeWork !== index && "opacity-40"
              }`}
            >
              <motion.div
                key={`${work.title}-${activeSection}-${index}`}
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                exit={{ y: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full flex items-center justify-center"
              >
                <p className={`text-xs font-thin min-w-sm`}>{work.metaOne}</p>
                <div className="relative w-full h-[70px] overflow-hidden">
                  <h1
                    className={`text-base absolute inset-0 flex items-center justify-center h-[70px] text-[2.1rem] md:text-[5rem] lg:text-[6rem] text-center transition-transform duration-300 group-hover:-translate-y-[100%]`}
                  >
                    {work.title}
                  </h1>
                  <h1
                    className={`text-base absolute inset-0 flex items-center justify-center h-[70px] text-[2.1rem] md:text-[5rem] lg:text-[6rem] text-center transition-transform duration-300 translate-y-[100%] group-hover:translate-y-0`}
                  >
                    {work.title}
                  </h1>
                </div>
                <p className={`text-xs font-thin min-w-sm`}>{work.metaTwo}</p>
              </motion.div>
            </li>
          ))}
        </AnimatePresence>
      </ul>

      <Modal modal={modal} projects={works} />
    </div>
  );
};

export default Works;
