"use client";

import React, { useEffect } from "react";
import Profile from "@/components/profile/profile";

const Page = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className="flex items-center justify-center mt-24">
      <Profile />
    </div>
  );
};

export default Page;
