"use client";

import React, { useEffect, useState } from "react";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import InfiniteWords from "@/components/home/infinite";
import Works from "@/components/home/works";
import Services from "@/components/home/Services";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();

    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  return (
    <main className="flex flex-col items-center px-5 overflow-hidden">
      <Hero />
      <About />
      <Services />
      <InfiniteWords />
      <Works />
      <Contact />
    </main>
  );
}
