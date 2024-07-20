import React from "react";
import Image from "next/image";
import BRIGHT_TEXT_LOGO_WHITE from "@/public/images/BRIGHT_TEXT_LOGO_WHITE.png";
import Link from "next/link";
import { footerData } from "@/lib/data";

const Contact = () => {
  return (
    <div className="relative w-screen max-w-[100vw] h-[80vh] overflow-hidden ">
      <video
        src="/videos/subway.mp4"
        autoPlay
        muted
        loop
        className="w-full h-full object-cover absolute top-0 left-0 z-0 overflow-x-hidden"
      ></video>

      <div className="absolute top-0 left-0 w-full h-full flex items-end pb-4 z-10 overflow-x-hidden max-w-[100vw]">
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
        {footerData.map((item: any, index: number) => (
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
