"use client";

import React, { useEffect, useState } from "react";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/home/Navbar";
import About from "@/components/home/About";
import Contact from "@/components/home/contact";
import Footer from "@/components/home/footer";
import InfiniteWords from "@/components/home/infinite";
import Payment from "@/components/home/payment";
import { Reviews } from "@/components/home/Reviews";
import Works from "@/components/home/works";
import Services from "@/components/home/Services";
import Video from "@/components/home/Video";

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
    <main className="flex flex-col items-center px-4 overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <InfiniteWords />
      <Works />
      <Footer />
    </main>
  );
}