"use client";

import React, { useEffect } from "react";
import BlogHeader from "@/components/blog/header";
import Posts from "../../../components/blog/posts";

const page = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className="pb-56">
      <BlogHeader />
      <Posts />
    </div>
  );
};

export default page;
