import BlogHeader from "@/components/blog/header";
import React from "react";
import Posts from "../../../components/blog/posts";

const page = () => {
  return (
    <div className="pb-56">
      <BlogHeader />
      <Posts />
    </div>
  );
};

export default page;
