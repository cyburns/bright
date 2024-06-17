import BlogHeader from "@/app/(blog)/blog/header";
import React from "react";
import Posts from "./posts";
import Header from "@/components/navbar/header";

const page = () => {
  return (
    <div className="pb-56">
      <BlogHeader />
      <Posts />
    </div>
  );
};

export default page;
