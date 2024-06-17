import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute top-5 left-[1rem] z-50 mt-2 sm:mt-0">
      <ul className="flex flex-col sm:flex-row gap-5 sm:gap-32 font-light text-sm sm:text-xl after:mix-blend-difference">
        <li className="text-black dark:text-white mix-blend-difference blend">
          New York, New York <br /> USA
        </li>
        <li className="text-black dark:text-white mix-blend-difference">
          Design <br />& Development
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
