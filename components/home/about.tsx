"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import Calendar from "@/components/home/calendar";
import { FlipWords } from "../ui/flip-words";
import { Cormorant_Garamond } from "next/font/google";

const corm = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function About() {
  const { ref } = useSectionInView("About");
  const words = ["affordable", "beautiful", "responsive", "modern"];

  return (
    <section
      ref={ref}
      className=" leading-8 scroll-mt-28 flex flex-col w-full sm:flex-row mt-32"
      id="about"
    >
      <div className="dark:border-white w-full">
        <h1 className="text-4xl font-medium mb-1 mt-7">WHO WE ARE</h1>
      </div>
      <div
        className={`${corm.className} max-w-[50vw] sm:mt-0 mt-12 text-[3vw] !leading-[1.1] font-medium`}
      >
        We are creatives who focus on creating quality work that offers powerful
        solutions, combining great designs with functionality.
      </div>
    </section>
  );
}
