"use client";

import React, { useEffect, useState } from "react";
import Hero from "@/components/home/hero";
import About from "@/components/home/about";
import Services from "@/components/home/services";
import InfiniteWords from "@/components/home/infinite";
import Works from "@/components/home/works";
import Contact from "@/components/home/contact";
import Preloader from "@/components/home/preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();

    setTimeout(() => {
      setIsLoading(true);
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  return (
    <main className="flex flex-col items-center px-5 overflow-hidden">
      {isLoading && <Preloader />}
      <Hero />
      <About />
      <Services />
      <InfiniteWords />
      <Works />
      <Contact />
    </main>
  );
}
