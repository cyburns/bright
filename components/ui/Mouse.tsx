"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Mouse = ({ stickyEl }: any) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const MOUSE_DIM = isHovered ? 5 : 1.25;

  const hanldeMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const mouseMove = (e: MouseEvent) => {
    if (stickyEl.current) {
      const { top, left, width, height } =
        stickyEl.current.getBoundingClientRect();

      const center = { x: left + width / 2, y: top + height / 2 };

      if (isHovered) {
        setMousePosition({
          x: center.x - MOUSE_DIM * 10,
          y: center.y - MOUSE_DIM * 8.5,
        });
      } else {
        setMousePosition({
          x: e.clientX - MOUSE_DIM * 10,
          y: e.clientY - MOUSE_DIM * 10,
        });
      }
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    if (stickyEl.current) {
      stickyEl.current.addEventListener("mouseover", hanldeMouseOver);
      stickyEl.current.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      if (stickyEl.current) {
        stickyEl.current.removeEventListener("mouseover", hanldeMouseOver);
        stickyEl.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isHovered, stickyEl]);

  return (
    <motion.div
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        width: isHovered ? MOUSE_DIM * 50 : MOUSE_DIM * 16,
        height: MOUSE_DIM * 16,
        borderRadius: isHovered ? 0 : "50%",
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 400,
      }}
      className="fixed top-0 left-0 z-50 pointer-events-none bg-white dark:bg-white  mix-blend-difference"
    ></motion.div>
  );
};

export default Mouse;
