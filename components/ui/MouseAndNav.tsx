"use client";

import React, { useRef } from "react";
import Mouse from "@/components/ui/Mouse";
import Navbar from "@/components/home/navbar";

const MouseAndNav = () => {
  const stickyEl = useRef(null);

  return (
    <>
      <Mouse stickyEl={stickyEl} />
      <Navbar ref={stickyEl} />
    </>
  );
};

export default MouseAndNav;
