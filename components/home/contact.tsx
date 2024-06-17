import React from "react";
import Image from "next/image";
import BRIGHT_TEXT_LOGO_WHITE from "@/public/images/BRIGHT_TEXT_LOGO_WHITE.png";

const Contact = () => {
  const data = [
    {
      labels: [
        "BRIGHT BLOG",
        "WORKS",
        "COMPANY",
        "CULTURE",
        "RESEARCH",
        "CONTACT",
      ],
    },
    {
      labels: ["AUDIA", "REACTYPE", "PRESS"],
    },
    {
      labels: ["LINKEDIN", "GITHUB", "INSTAGRAM"],
    },
    {
      labels: ["© 2024 BRIGHT STUDIO", "NEW YORK, NEW YORK"],
    },
  ];

  return (
    <div className="relative w-screen h-[80vh]">
      <video
        src="/videos/subway.mp4"
        autoPlay
        muted
        loop
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      ></video>

      <div className="absolute top-0 left-0 w-full h-full flex items-end pb-4 z-10">
        <Image
          src={BRIGHT_TEXT_LOGO_WHITE}
          alt="Bright Text Logo"
          layout="intrinsic"
          className="w-1/2 aspect-auto absolute -left-[30%] top-20 z-10"
        />

        <Image
          src={BRIGHT_TEXT_LOGO_WHITE}
          alt="Bright Text Logo"
          layout="intrinsic"
          className="w-1/2 aspect-auto absolute -right-[20%] top-20"
        />
      </div>

      <div className="relative z-20 flex flex-row items-center  h-full px-2 sm:px-10 mt-16">
        {data.map((item, index) => (
          <ul key={index} className="w-1/2 ">
            {item.labels.map((label, labelIndex) => (
              <li
                key={labelIndex}
                className="text-white overflow-hidden group relative h-[25px]"
              >
                <p className="text-white text-sm sm:text-[1rem] font-thin transition-transform duration-300 group-hover:-translate-y-[100%] mix-blend-difference">
                  {label}
                </p>

                <p className="text-white text-sm sm:text-[1rem] font-thin transition-transform duration-300 translate-y-[100%] group-hover:translate-y-[-100%]  mix-blend-difference">
                  {label}
                </p>
              </li>
            ))}
          </ul>
        ))}
      </div>

      <div className="bg-red-500 relative z-20 flex items-center  h-full px-2 sm:px-10 mt-16">
        <button className="text-5xl text-white">BOOK A CALL</button>
      </div>
    </div>
  );
};

export default Contact;
