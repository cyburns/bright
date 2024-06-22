"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { works } from "@/lib/data";
import Link from "next/link";
import { IoCaretBack } from "react-icons/io5";
import { useTransform, useScroll, motion } from "framer-motion";

const WorkPage = ({ id }: any) => {
  const [scrolledPercent, setScrolledPercent] = useState("0");

  const totalPageHeight = document.documentElement.scrollHeight;
  const viewportHeight = window.innerHeight;
  const scrollableDistance = totalPageHeight - viewportHeight - 900;

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, scrollableDistance * 0.8]
  );

  const work =
    works.featuredWorks.find((work) => work.id === id) ||
    works.selectedWorkds.find((work) => work.id === id);

  if (!work) return null;

  const mainImgRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.to(mainImgRef.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
      },
      scale: 0.7,
    });

    ScrollTrigger.create({
      trigger: document.documentElement,
      scrub: true,
      start: 0,
      end: "bottom top",
      onUpdate: (self: any) => {
        console.log(self.progress);

        const scrollProgress = self.progress * 100;
        setScrolledPercent(scrollProgress.toFixed(0));
      },
    });
  }, [work]);

  return (
    <div ref={container} className="mt-32 sm:mt-48 mb-48">
      <div className="flex w-full items-center justify-between">
        <button className="border-white text-white hover:text-black mix-blend-difference border-[1px] px-4 py-2 flex flex-row mb-10 hover:bg-white transition duration-300">
          <Link href="/" className="flex flex-row items-center justify-between">
            <IoCaretBack />
            BACK
          </Link>
        </button>

        <h1 className="text-white mix-blend-difference text-[18vw] sm:text-[8vw] z-30">
          {work?.metaOne}
        </h1>

        <button></button>
      </div>

      <div className="-mt-12 sm:-mt-24">
        <Image
          ref={mainImgRef}
          src={`/images/${work.photoPathName}/${work.imgs[0]}`}
          width={3000}
          height={0}
          className="object-cover w-screen"
          alt={work.metaOne}
          placeholder="blur"
          blurDataURL={`/images/${work.photoPathName}/${work.imgs[0]}`}
        />
      </div>

      <motion.div
        style={{ y }}
        className="text-white mix-blend-difference text-[20vw] sm:text-[8vw] flex flex-row justify-between z-[99999999]"
      >
        <p>{scrolledPercent}</p>
        <p>/100</p>
      </motion.div>

      <div className="mt-24 flex flex-col sm:flex-row justify-between">
        <h2 className="text-white mix-blend-difference text-5xl sm:w-1/3 z-30">
          {work?.header}
        </h2>
        <div className="sm:w-1/2 mt-10 sm:mt-0">
          <h3 className="text-white mix-blend-difference text-xl font-thin z-30">
            {work?.subheader}
          </h3>
          <h4 className="text-white mix-blend-difference text-sm font-thin z-30 mt-10">
            {work?.thirdHeading}
          </h4>
        </div>
      </div>

      <div className="sm:max-w-[50%] flex flex-col justify-center items-center mx-auto ">
        {work.imgs.slice(1).map((img, index) => (
          <Image
            key={index}
            src={`/images/${work.photoPathName}/${img}`}
            width={4000}
            height={0}
            className="object-cover w-screen mt-24 sm:mt-48"
            alt={work.metaOne}
          />
        ))}
      </div>
      <div className="end-move" />
    </div>
  );
};

export default WorkPage;
