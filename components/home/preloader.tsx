"use client";

import React, { useEffect } from "react";
import gsap from "gsap";

const Preloader = () => {
  const loader = () => {
    const counter3 = document.querySelector(".counter-3");

    if (!counter3) return;

    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 10; j++) {
        const num = document.createElement("div");
        num.classList.add("num");
        num.textContent = String(j);
        counter3.appendChild(num);
      }
    }

    const finalNum = document.createElement("div");
    finalNum.classList.add("num");
    finalNum.textContent = "0";
    counter3.appendChild(finalNum);

    const animate = (counter: any, duration: number, delay = 0) => {
      const numHeight = counter.querySelector(".num").clientHeight;
      const totalDist =
        (counter.querySelectorAll(".num").length - 1) * numHeight;

      gsap.to(counter, {
        y: -totalDist,
        duration,
        delay,
        ease: "power2.inOut",
      });
    };

    animate(counter3, 3);
    animate(document.querySelector(".counter-2"), 4);
    animate(document.querySelector(".counter-1"), 1, 2);
  };

  const barAnimation = () => {
    gsap.to(".digit", {
      top: "-150px",
      stagger: {
        amount: 0.25,
      },
      delay: 4,
      duration: 0.75,
      ease: "power4.inOut",
    });

    gsap.fromTo(
      ".loader-1",
      { width: 0 },
      { width: 200, duration: 4, ease: "power2.inOut", delay: 0 }
    );

    gsap.fromTo(
      ".loader-2",
      { width: 0 },
      { width: 100, duration: 2, ease: "power2.inOut", delay: 1.4 }
    );

    gsap.to(".loader", {
      background: "none",
      delay: 4,
      duration: 0.1,
    });

    gsap.to(".loader-1", {
      rotate: 90,
      y: -50,
      duration: 0.4,
      delay: 4,
    });

    gsap.to(
      ".loader-2",
      //@ts-ignore
      {
        x: -75,
        y: 75,
        duration: 0.4,
      },
      "<"
    );

    gsap.to(".loader", {
      scale: 50,
      delay: 5,
      duration: 0.75,
      x: 2500,
      ease: "power2.inOut",
    });

    gsap.to(".loading-screen", {
      opacity: 0,
      delay: 6,
      duration: 1,
      display: "none",
    });
  };

  useEffect(() => {
    loader();
    barAnimation();
  }, []);

  return (
    <div className="loading-screen z-[9999] overflow-hidden">
      <div className="loader">
        <div className="loader-1 bar" />
        <div className="loader-2 bar" />
      </div>

      <div className="counter">
        <div className="counter-1 digit">
          <div className="num">0</div>
          <div className="num num1offset1">1</div>
        </div>
        <div className="counter-2 digit">
          <div className="num">0</div>
          <div className="num num1offset2">1</div>
          <div className="num">2</div>
          <div className="num">3</div>
          <div className="num">4</div>
          <div className="num">5</div>
          <div className="num">6</div>
          <div className="num">7</div>
          <div className="num">8</div>
          <div className="num">9</div>
          <div className="num">0</div>
        </div>
        <div className="counter-3 digit">
          <div className="num">0</div>
          <div className="num">1</div>
          <div className="num">2</div>
          <div className="num">3</div>
          <div className="num">4</div>
          <div className="num">5</div>
          <div className="num">6</div>
          <div className="num">7</div>
          <div className="num">8</div>
          <div className="num">9</div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
