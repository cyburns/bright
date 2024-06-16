import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-5 left-[1rem] z-50">
      <ul className="flex flex-row gap-32 font-light text-xl after:mix-blend-difference">
        <li className="text-black dark:text-white mix-blend-difference">
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