"use client";

import React, { useRef } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import Image from "next/image";
import SaaS from "@/public/images/templates/saas.png";
import Jeremy from "@/public/images/templates/jeremy-site.png";
import AudiaSite from "@/public/images/templates/audia-site.png";
import Architecture from "@/public/images/templates/arch.png";
import Fitness from "@/public/images/templates/fitness.png";

const Shop = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 500]);

  const imageClassName = "object-contain w-full";
  const pClass =
    "text-lg font-medium p-1 text-black transition duration-500 uppercase";

  return (
    <div ref={container} className="text-black mt-16 mb-[50rem] z-50 p-10">
      <h1 className="text-[14vw] sm:text-[16vw] font-black !leading-[0.9]">
        Next.js <br />
        Templates
      </h1>

      <motion.div
        style={{ y }}
        className="flex flex-col lg:flex-row space-y-10 justify-center lg:justify-between mt-24 lg:-mt-[1vw] z-50"
      >
        <div className="md:w-[80%] lg:w-[23%] lg:pt-64 flex flex-col group bg">
          <div className="bg-red-500 p-5">
            <Image
              src={Jeremy}
              alt="Jeremy Gill"
              placeholder="blur"
              className={imageClassName}
            />
          </div>
          <div className="flex flex-row justify-between">
            <p className={pClass}>personal / static</p>
            <p className={pClass}>$79</p>
          </div>
        </div>
        <div className="md:w-[80%] lg:w-[23%] flex flex-col group">
          <div className="bg-[#a5a5a5] p-5">
            <Image
              src={SaaS}
              alt="Jeremy Gill"
              placeholder="blur"
              className={imageClassName}
            />
          </div>
          <div className="flex flex-row justify-between">
            <p className={pClass}>saas / dark + light mode / with blog</p>
            <p className={pClass}>$79</p>
          </div>
        </div>
        <div className="md:w-[80%] lg:w-[23%] lg:pt-72 flex flex-col group">
          <div className="bg-blue-100 p-5">
            <Image
              src={AudiaSite}
              alt="Jeremy Gill"
              placeholder="blur"
              className={imageClassName}
            />
          </div>
          <div className="flex flex-row justify-between">
            <p className={pClass}>landing page / static</p>
            <p className={pClass}>$79</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ y }}
        className="flex flex-col lg:flex-row space-y-10 justify-center lg:justify-between mt-24 lg:-mt-[1vw] z-50"
      >
        <div className="md:w-[80%] lg:w-[23%] lg:pt-64 flex flex-col group bg">
          <div className="bg-green-900 p-5">
            <Image
              src={Architecture}
              alt="Jeremy Gill"
              placeholder="blur"
              className={imageClassName}
            />
          </div>
          <div className="flex flex-row justify-between">
            <p className={pClass}>architecture / static</p>
            <p className={pClass}>$249</p>
          </div>
        </div>
        <div className="md:w-[80%] lg:w-[23%] flex flex-col group">
          <div className="bg-[#a5a5a5] p-5">
            <Image
              src={Fitness}
              alt="Jeremy Gill"
              placeholder="blur"
              className={imageClassName}
            />
          </div>
          <div className="flex flex-row justify-between">
            <p className={pClass}>personal trainer / fitness</p>
            <p className={pClass}>$249</p>
          </div>
        </div>
        <div className="md:w-[80%] lg:w-[23%] lg:pt-72 flex flex-col group"></div>
      </motion.div>

      <motion.div style={{ y }}>
        <h1 className="text-[6vw] font-black text-center !leading-[0.9] mt-[20vh]">
          More coming soon...
        </h1>
      </motion.div>
    </div>
  );
};

export default Shop;
