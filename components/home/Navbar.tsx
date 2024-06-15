import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-5 left-[1rem]">
      <ul className="flex flex-row gap-32 font-light text-xl">
        <li>
          New York, New York <br /> USA
        </li>
        <li>
          Design <br />& Development
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
