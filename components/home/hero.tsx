"use client";

import Image from "next/image";
import React, { useLayoutEffect, useRef, useEffect, useState } from "react";
import { FlipWords } from "../ui/flip-words";
import { Cormorant_Garamond } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import FullBrightText from "@/public/images/BRIGHT_TEXT_LOGO.png";

const corm = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const words = ["Creativity", "Imagination", "Innovation"];

const Hero = () => {
  const [isClient, setIsClient] = useState(false);
  const BRIGHT = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useLayoutEffect(() => {
    if (!isClient) return;

    gsap.registerPlugin(ScrollTrigger);

    const end = window.innerHeight;

    gsap.to(BRIGHT.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end,
      },
      x: "35%",
    });

    gsap.to(textRef.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end,
      },
      x: "50%",
    });
  }, [isClient]);

  return (
    <div className="h-screen w-screen relative text-black dark:text-white overflow-hidden">
      <div className="h-screen w-screen grid grid-cols-12">
        <div className="-z-10 overflow-hidden col-span-6 hidden sm:flex">
          <video
            autoPlay
            muted
            loop
            src="/videos/bg-movie-4.mp4"
            className="min-h-screen object-cover"
          />
        </div>
        <h1
          ref={textRef}
          className={`absolute top-[33%] sm:left-[33.33%] text-2xl sm:text-4xl font-light bg-white ${corm.className} h-[60vh] pt-16 pl-[25%]`}
        ></h1>
        <h1
          className={`absolute top-[30%] sm:left-[33.33%] text-2xl md:text-[4vw] lg:text-[2.5vw] !leading-[1] font-light  ${corm.className} h-[60vh] pt-16 pl-[25%]`}
        >
          Blending
          <FlipWords words={words} /> <br />
          and Technology to Elevate
          <br /> Your Brand
        </h1>

        <div
          ref={BRIGHT}
          className="flex absolute gap-2 pb-4 bottom-0 left-0 bg-image sm:ml-[16vw] bg-white pl-[1vw] pt-[0.5vw]"
        >
          <Image
            src={FullBrightText}
            alt="Bright Text Logo"
            className="w-[80%] sm:w-[94.2%] aspect-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
