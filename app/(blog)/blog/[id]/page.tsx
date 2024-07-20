"use client";

import React, { useEffect } from "react";
import OnePost from "../../../../components/post/one-post";

interface PageProps {
  id: string;
}

const page = ({ params }: { params: PageProps }) => {
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
