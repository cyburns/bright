"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Modal({ modal, projects }: any) {
  const modalContainer = useRef(null);
  const secondModalContainer = useRef(null);

  useEffect(() => {
    const moveContainreX = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });

    const moveContainerY = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    const moveContainerXTwo = gsap.quickTo(
      secondModalContainer.current,
      "left",
      {
        duration: 0.5,
        ease: "power3",
      }
    );

    const moveContainerYTwo = gsap.quickTo(
      secondModalContainer.current,
      "top",
      {
        duration: 0.5,
        ease: "power3",
      }
    );

    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e as MouseEvent;

      moveContainreX(clientX + 400);
      moveContainerY(clientY);
      moveContainerXTwo(clientX + 430);
      moveContainerYTwo(clientY + 30);
    });
  });

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={modal.active ? "enter" : "closed"}
        className="h-[300px] w-[350px] fixed top-1/2 left-1/2 bg-transparent pointer-events-none overflow-hidden z-3"
      >
        <div
          style={{ top: modal.index * -100 + "%" }}
          className="h-full w-full relative transition-top duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
        >
          {projects.map((project: any, index: number) => (
            <div
              className="h-full w-full flex items-center justify-center bg-transparent pointer-events-none  filter grayscale"
              key={`modal_${index}`}
            >
              <Image
                src={`/images/${project.src}`}
                width={300}
                height={0}
                alt="image  filter grayscale"
              />
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        ref={secondModalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={modal.active ? "enter" : "closed"}
        className="h-[300px] w-[350px] fixed top-1/2 left-1/2 bg-transparent pointer-events-none overflow-hidden z-3"
      >
        <div
          style={{ top: modal.index * -100 + "%" }}
          className="h-full w-full relative transition-top duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
        >
          {projects.map((project: any, index: number) => (
            <div
              className="h-full w-full flex items-center justify-center bg-transparent pointer-events-none"
              key={`modal_${index}`}
            >
              <Image
                src={`/images/${project.src}`}
                width={300}
                height={0}
                alt="image"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
