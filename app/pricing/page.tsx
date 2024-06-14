import React from "react";
import About from "@/components/home/about";
import BrightHeaderText from "@/components/ui/bright-header-text";
import Payment from "@/components/home/payment";

const page = () => {
  return (
    <div className="flex flex-col items-center px-4 pt-32 mb-32">
      <BrightHeaderText />
      <Payment />
    </div>
  );
};

export default page;
