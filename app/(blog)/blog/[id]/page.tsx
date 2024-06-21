"use client";

import React, { useEffect } from "react";
import OnePost from "../../../../components/post/one-post";

const page = ({ params }: any) => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className="flex justify-center items-center">
      <OnePost params={params} />
    </div>
  );
};

export default page;
