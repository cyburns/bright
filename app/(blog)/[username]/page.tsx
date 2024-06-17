import React from "react";
import Profile from "@/app/(blog)/[username]/profile";
import Header from "@/components/navbar/header";

const Page = () => {
  return (
    <div className="flex items-center justify-center">
      <Header />
      <Profile />
    </div>
  );
};

export default Page;
