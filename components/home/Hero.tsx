"use client";

import Image from "next/image";
import React from "react";
import BRIGHT_TEXT_LOGO from "@/public/images/BRIGHT_TEXT_LOGO.png";
import BRIGHT_TEXT_LOGO_WHITE from "@/public/images/BRIGHT_TEXT_LOGO_WHITE.png";
import { useTheme } from "@/context/theme-context";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <div className="h-screen relative">
      <div className="flex items-end h-full pb-4">
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
