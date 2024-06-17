"use client";

import React, { useState } from "react";
import { useSectionInView } from "@/lib/hooks";
import Modal from "./Modal";
import { motion, AnimatePresence } from "framer-motion";

const featuredWorks = [
  {
    metaOne: "AUDIA",
    title: "SHARE MUSIC",
    metaTwo: "MOBILE",
    src: "getaudia.com.png",
  },
  {
    metaOne: "REACTYPE",
    title: "NO-CODE BUILDER",
    metaTwo: "WEB",
    src: "reactype.dev.png",
  },
  {
    metaOne: "PORTFOLIO",
    title: "VOCTORY MODE",
    metaTwo: "SHOWCASE",
    src: "port.com.png",
  },
  {
    metaOne: "PRESS SPORTS",
    title: "GET RECRUITED",
    metaTwo: "MOBILE",
    src: "officestudio.png",
  },
];

const selectedWorkds = [
  {
    metaOne: "CODESHARE",
    title: "GEEK OUT",
    metaTwo: "WEB",
    src: "Codeshare-port-pic.png",
  },
  {
    metaOne: "PORTFOLIO",
    title: "PINK AND GREEN",
    metaTwo: "WEB",
    src: "cpd.com2.png",
  },
  {
    metaOne: "SEATR",
    title: "LOVE OF FOOD",
    metaTwo: "MOBILE",
    src: "seatr.png",
  },

  {
    metaOne: "OFFICE STUDIO",
    title: "DESIGN STUDIO",
    metaTwo: "WEB",
    src: "officestudio.png",
  },
];

const Works = () => {
  const [activeSection, setActiveSection] = useState(1);
  const [activeWork, setActiveWork] = useState<null | number>(null);
  const [modal, setModal] = useState({ active: false, index: 0 });

  const { ref } = useSectionInView("Works");

  const works = activeSection === 0 ? selectedWorkds : featuredWorks;

  return (
    <div ref={ref} id="works" className="mb-[50rem] w-full">
      <div className="flex flex-row justify-center mb-5">
        <button
          onClick={() => setActiveSection(0)}
          className={`${
            activeSection === 0 ? null : "text-opacity-40"
          } font-medium mb-8 text-xl uppercase leading-[1] text-center text-black dark:text-white hover:text-opacity-60 transition`}
        >
          LATEST WORKS
        </button>
        <p className="mx-7">/</p>
        <button
          onClick={() => setActiveSection(1)}
          className={`${
            activeSection === 1 ? null : "text-opacity-40"
          } font-medium mb-8 text-xl uppercase leading-[1] text-center text-black dark:text-white hover:text-opacity-6 transition`}
        >
          FEATURED WORKS
        </button>
      </div>

      <ul className="w-full relative h-[70px]">
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
            className={`w-full h-full relative flex items-center justify-between group my-1 overflow-hidden transition duration-300 ${
              activeWork !== null && activeWork !== index && "opacity-40"
            }`}
          >
            <p className={`text-xs font-thin`}>{work.metaOne}</p>
            <div className="relative w-full h-[70px] overflow-hidden">
              <h1
                className={`text-base absolute inset-0 flex items-center justify-center h-[70px] text-[4.8vw] text-center transition-transform duration-300 group-hover:-translate-y-[100%]`}
              >
                {work.title}
              </h1>
              <h1
                className={`text-base absolute inset-0 flex items-center justify-center h-[70px] text-[4.8vw] text-center transition-transform duration-300 translate-y-[100%] group-hover:translate-y-0`}
              >
                {work.title}
              </h1>
            </div>
            <p className={`text-xs font-thin`}>{work.metaTwo}</p>
          </li>
        ))}
      </ul>

      <Modal modal={modal} projects={works} />
    </div>
  );
};

export default Works;
