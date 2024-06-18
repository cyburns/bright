import React from "react";
import About from "@/components/home/About";
import BrightHeaderText from "@/components/ui/bright-header-text";
import Works from "@/components/home/Works";

const page = () => {
  return (
    <div className="flex flex-col items-center px-4 pt-32 mb-32">
      <BrightHeaderText />
      <Works />
    </div>
  );
};

export default page;
