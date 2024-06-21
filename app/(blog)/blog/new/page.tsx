"use client";

import React, { useEffect } from "react";
import CreatePost from "../../../../components/post/create-post";

const page = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className="flex justify-center items-center pb-56">
      <CreatePost />
    </div>
  );
};

export default page;
