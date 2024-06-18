"use client";

import React, { useEffect, useRef, useState } from "react";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import InfiniteWords from "@/components/home/infinite";
import Works from "@/components/home/works";
import Services from "@/components/home/Services";
import Mouse from "@/components/ui/Mouse";
import Navbar from "@/components/home/Navbar";

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

  const stickyEl = useRef(null);

  return (
    <main className="flex flex-col items-center px-5 overflow-hidden">
      <Mouse stickyEl={stickyEl} />
      <Navbar ref={stickyEl} />
      <Hero />
      <About />
      <Services />
      <InfiniteWords />
      <Works />
      <Contact />
    </main>
  );
}
