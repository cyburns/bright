"use client";

import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import BRIGHT_TEXT_LOGO from "@/public/images/BRIGHT_TEXT_LOGO.png";
import BRIGHT_TEXT_LOGO_WHITE from "@/public/images/BRIGHT_TEXT_LOGO_WHITE.png";
import { useTheme } from "@/context/theme-context";
import { FlipWords } from "../ui/flip-words";
import { Cormorant_Garamond } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import R from "@/public/images/R-BRIGHT.png";
import I from "@/public/images/I-BRIGHT.png";
import B from "@/public/images/B-BRIGHT.png";
import G from "@/public/images/G-BRIGHT.png";
import H from "@/public/images/H-BRIGHT.png";
import T from "@/public/images/T-BRIGHT.png";
import { useMediaQuery } from "@mui/material";

const corm = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const words = ["Creativity", "Imagination", "Innovation"];

const Hero = () => {
  const { theme } = useTheme();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const end = window.innerHeight;
  const multiplier = isMobile ? 0.2 : 1;

  const BB = useRef(null);
  const RR = useRef(null);
  const II = useRef(null);
  const GG = useRef(null);
  const HH = useRef(null);
  const TT = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(BB.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end,
      },
      delay: 1.75,
      rotate: 40,
      x: 30,
      y: -50 * multiplier,
    });

    gsap.to(RR.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end,
      },
      delay: 0.75,
      rotate: -20,
      x: 60,
      y: -100 * multiplier,
    });

    gsap.to(II.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end,
      },
      delay: 0.5,
      rotate: -20,
      x: 75,
      y: -100 * multiplier,
    });

    gsap.to(GG.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end,
      },
      rotate: 360,
      x: 50,
      y: -500 * multiplier,
    });

    gsap.to(HH.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end,
      },
      rotate: 45,
      x: 50,
      y: -400 * multiplier,
    });

    gsap.to(TT.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end,
      },
      rotate: 85,
      x: 100,
      y: -100 * multiplier,
    });
  }, []);

  return (
    <div className="h-screen w-screen relative text-black dark:text-white">
      <div className="absolute w-full h-full z-20 min-w-max">
        <h1
          data-scroll
          data-scroll-speed="0.01"
          className={`absolute right-1/4 top-1/2 sm:top-1/4 transform translate-x-1/4  sm:translate-x-2/4 -translate-y-1/4 text-2xl sm:text-4xl font-light ${corm.className}`}
        >
          Blending
          <FlipWords words={words} /> <br />
          and Technology to Elevate
          <br /> Your Brand
        </h1>
      </div>

      <div className="flex flex-row absolute h-[5rem] sm:h-[18vw] gap-2 pb-4  bottom-0 left-5 bg-image">
        <Image
          ref={BB}
          src={B}
          alt="Bright Text Logo"
          className="w-3/4 aspect-auto"
        />
        <Image
          ref={RR}
          src={R}
          alt="Bright Text Logo"
          className="w-3/4 aspect-auto"
        />
        <Image
          ref={II}
          src={I}
          alt="Bright Text Logo"
          className="w-3/4 aspect-auto"
        />
        <Image
          ref={GG}
          src={G}
          alt="Bright Text Logo"
          className="w-3/4 aspect-auto"
        />
        <Image
          ref={HH}
          src={H}
          alt="Bright Text Logo"
          className="w-3/4 aspect-auto"
        />
        <Image
          ref={TT}
          src={T}
          alt="Bright Text Logo"
          className="w-3/4 aspect-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
