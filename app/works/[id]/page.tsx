"use client";

import React, { useEffect } from "react";
import WorkPage from "@/components/works/work-page";

interface PageProps {
  params: {
    id: string;
  };
}

const page = ({ params }: PageProps) => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className="flex flex-col items-center px-5 overflow-hidden">
      <WorkPage id={params.id} />
    </div>
  );
};

export default page;
