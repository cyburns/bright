import React, { forwardRef, useEffect } from "react";
import gsap from "gsap";

const Navbar = forwardRef<HTMLLIElement>((props, ref) => {
  useEffect(() => {
    const listItems = document.querySelectorAll("li");
    const animations = new Map();

    listItems.forEach((li) => {
      li.addEventListener("mouseenter", () => {
        const animation = gsap.to(li.querySelector(".indicator"), {
          opacity: 1,
          duration: 0.1,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
        animations.set(li, animation);
      });

      li.addEventListener("mouseleave", () => {
        const animation = animations.get(li);
        if (animation) {
          animation.kill();
          animations.delete(li);
          gsap.to(li.querySelector(".indicator"), {
            opacity: 0,
            duration: 0.2,
          });
        }
      });
    });
  }, []);

  return (
    <nav className="pt-[20px] fixed left-0 top-0 w-full z-[9999] h-[62px] mix-blend-difference text-white box-border text-[12px]">
      <div className="w-full px-[25px] mx-auto flex flex-row justify-between">
        <div className="flex flex-wrap w-[37.5%]">
          <ul className="z-[999999]" ref={ref as any}>
            <li className="relative">
              <span className="indicator absolute left-[-10px] top-[50%] translate-y-[-50%] w-[5px] h-[5px] bg-white rounded-full opacity-0"></span>
              <a href="/">
                BRIGHT- <br /> STUDIO
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden sm:flex flex-wrap w-[12.5%] uppercase">
          <ul className="z-[999999]">
            <li className="relative">
              <span className="indicator absolute left-[-10px] top-[50%] translate-y-[-50%] w-[5px] h-[5px] bg-white rounded-full opacity-0"></span>
              <a href="">INDEX</a>
            </li>
            <li className="relative">
              <span className="indicator absolute left-[-10px] top-[50%] translate-y-[-50%] w-[5px] h-[5px] bg-white rounded-full opacity-0"></span>
              <a href="">
                STUDIO<sup>tm</sup>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap w-[12.5%] uppercase">
          <ul className="z-[999999]">
            <li className="relative">
              <span className="indicator absolute left-[-10px] top-[50%] translate-y-[-50%] w-[5px] h-[5px] bg-white rounded-full opacity-0"></span>
              <a href="">blog[tt]</a>
            </li>
            <li className="relative">
              <span className="indicator absolute left-[-10px] top-[50%] translate-y-[-50%] w-[5px] h-[5px] bg-white rounded-full opacity-0"></span>
              <a href="">shop</a>
            </li>
          </ul>
        </div>
        <div className="hidden sm:flex flex-wrap w-[25%] uppercase">
          <ul className="z-[999999]">
            <li className="relative">
              <span className="indicator absolute left-[-10px] top-[50%] translate-y-[-50%] w-[5px] h-[5px] bg-white rounded-full opacity-0"></span>
              <a href="">brightdev.dev@gmail.com</a>
            </li>
            <li className="relative">
              <span className="indicator absolute left-[-10px] top-[50%] translate-y-[-50%] w-[5px] h-[5px] bg-white rounded-full opacity-0"></span>
              <a href="">+1 413 854 3541</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-end md:justify-start flex-wrap w-[25%] sm:w-[12.5%] uppercase">
          <ul className="z-[999999]">
            <li className="relative">
              <span className="indicator absolute left-[-10px] top-[50%] translate-y-[-50%] w-[5px] h-[5px] bg-white rounded-full opacity-0"></span>
              <a href="">LinkedIn</a>
            </li>
            <li className="relative">
              <span className="indicator absolute left-[-10px] top-[50%] translate-y-[-50%] w-[5px] h-[5px] bg-white rounded-full opacity-0"></span>
              <a href="">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
});

export default Navbar;
