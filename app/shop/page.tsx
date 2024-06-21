"use client";

import React, { useEffect } from "react";
import Shop from "@/components/shop/shop";

const page = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return <Shop />;
};

export default page;
