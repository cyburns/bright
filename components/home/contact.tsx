import React from "react";
import Image from "next/image";
import BRIGHT_TEXT_LOGO_WHITE from "@/public/images/BRIGHT_TEXT_LOGO_WHITE.png";
import Link from "next/link";

const data = [
  {
    labels: [
      { name: "BLOG", url: "/blog" },
      { name: "WORKS" },
      { name: "COMPANY" },
      { name: "CULTURE" },
      { name: "RESEARCH" },
      { name: "CONTACT" },
    ],
  },
  {
    labels: [
      { name: "AUDIA", url: "https://www.getaudia.com/" },
      { name: "REACTYPE", url: "https://www.reactype.dev/" },
      { name: "PRESS", url: "https://presssportsapp.com/" },
    ],
  },
  {
    labels: [
      { name: "LINKEDIN", url: "https://www.linkedin.com/in/cyburns/" },
      { name: "GITHUB", url: "https://github.com/cyburns" },
      { name: "INSTAGRAM", url: "https://www.instagram.com/cyrusburns/" },
    ],
  },
  {
    labels: [{ name: "© 2024 BRIGHT STUDIO" }, { name: "NEW YORK, NEW YORK" }],
  },
];

const Contact = () => {
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

      <div className="relative z-20 flex flex-row items-center  h-full px-2 sm:px-10 mt-32 mix-blend-difference text-white text-sm sm:text-xl md:text-2zxl lg:text-4xl">
        {data.map((item: any, index: number) => (
          <ul key={index} className="w-1/2">
            {item.labels.map((label: any, labelIndex: number) => (
              <>
                {!label.url ? (
                  <li
                    key={labelIndex}
                    className="overflow-hidden group relative h-[35px]"
                  >
                    <p>{label.name}</p>
                  </li>
                ) : (
                  <Link href={label.url} key={labelIndex}>
                    <li
                      key={labelIndex}
                      className="overflow-hidden group relative h-[35px]"
                    >
                      <p className="font-thin transition-transform duration-300 group-hover:-translate-y-[100%] mix-blend-difference">
                        {label.name}
                      </p>

                      <p className="font-thin transition-transform duration-300 translate-y-[100%] group-hover:translate-y-[-100%]  mix-blend-difference">
                        {label.name}
                      </p>
                    </li>
                  </Link>
                )}
              </>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Contact;
