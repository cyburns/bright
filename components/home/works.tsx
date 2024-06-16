"use client";

import React, { useState } from "react";
import { useSectionInView } from "@/lib/hooks";

const featuredWorks = [
  {
    metaOne: "AUDIA",
    title: "SHARE MUSIC",
    metaTwo: "MOBILE",
    src: "getaudia.com.png",
    color: "#4cded8",
  },
  {
    metaOne: "REACTYPE",
    title: "NO-CODE BUILDER",
  metaTwo: "WEB",
    src: "reactype.dev.png",
    color: "#8C8C8C",
  },
  {
    metaOne: "PORTFOLIO",
    title: "VOCTORY MODE",
    metaTwo: "SHOWCASE",
    src: "port.com.png",
    color: "#992db4",
  },

  {
    metaOne: "PRESS SPORTS",
    title: "GET RECRUITED",
    metaTwo: "MOBILE",
    src: "press.com.png",
    color: "#EFE8D3",
  },
];

const Works = () => {
  const [activeSection, setActiveSection] = useState(1);
  const [activeWork, setActiveWork] = useState<null | number>(null);

  const { ref } = useSectionInView("Works");

  return (
    <div ref={ref} id="works" className="mb-[50rem] w-full">
      <div className="flex flex-row justify-center">
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
        {featuredWorks.map((work, index) => (
          <li
            key={index}
            onMouseEnter={() => setActiveWork(index)}
            onMouseLeave={() => setActiveWork(null)}
            className={`w-full h-full relative flex items-center justify-between group my-1 overflow-hidden transition duration-300 ${
              activeWork !== null && activeWork !== index ? "opacity-40" : null
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
    </div>
  );
};

export default Works;
