import React, { forwardRef } from "react";
import Link from "next/link";
import gsap from "gsap";

const Navbar = forwardRef<HTMLLIElement>((props, ref) => {
  return (
    <nav className="absolute top-5 left-[1rem] z-30 mt-2 sm:mt-0">
      <ul className="flex flex-col md:flex-row gap-5 md:gap-32 font-light text-sm md:text-xl text-white mix-blend-difference">
        <li className="text-black dark:text-white mix-blend-difference">
          New York, New York <br />
          USA
        </li>
        <li className="text-black dark:text-white mix-blend-difference">
          Design <br />& Development
        </li>

        <li
          ref={ref}
          className="text-black mix-blend-difference cursor-pointer z-40"
        >
          <Link href="/blog">
            BRIGHT <br /> BLOG
          </Link>
        </li>
      </ul>
    </nav>
  );
});

export default Navbar;
