import React from "react";
import About from "./About";

const Video = () => {
  return (
    <div className="relative w-full h-[30rem] overflow-hidden">
      <video
        src="/videos/subway.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      ></video>
    </div>
  );
};

export default Video;
