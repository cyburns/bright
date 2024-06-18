import WorkPage from "@/components/works/work-page";
import React from "react";

const page = ({ params }: any) => {
  return (
    <div className="flex flex-col items-center px-5 overflow-hidden">
      <WorkPage id={params.id} />
    </div>
  );
};

export default page;
