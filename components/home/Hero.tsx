"use client";

import Image from "next/image";
import React from "react";
import BRIGHT_TEXT_LOGO from "@/public/images/BRIGHT_TEXT_LOGO.png";
import BRIGHT_TEXT_LOGO_WHITE from "@/public/images/BRIGHT_TEXT_LOGO_WHITE.png";
import { useTheme } from "@/context/theme-context";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <div className="h-screen relative text-black dark:text-white">
      <div className="absolute w-full h-full">
        <h1 className="absolute right-1/4 top-1/4 transform translate-x-2/4 -translate-y-1/4 text-3xl">
          Blending Creativity and
          <br /> Technology to Elevate
          <br /> Your Brand
        </h1>
      </div>

      <div className="flex items-end h-full pb-4 relative">
        <Image
          src={theme === "light" ? BRIGHT_TEXT_LOGO : BRIGHT_TEXT_LOGO_WHITE}
          alt="Bright Text Logo"
          layout="intrinsic"
          className="w-3/4 aspect-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
