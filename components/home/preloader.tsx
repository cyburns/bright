"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const fakeNumbers = Array.from({ length: 10 }, (_, i) => i);

interface PreloaderProps {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Preloader = ({ setIsLoading }: PreloaderProps) => {
  const counter1Ref = useRef<HTMLDivElement | null>(null);
  const counter2Ref = useRef<HTMLDivElement | null>(null);
  const counter3Ref = useRef<HTMLDivElement | null>(null);
  const loadingScreenRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const initCounters = (counterRef: React.RefObject<HTMLDivElement>) => {
      const counter = counterRef.current;
      if (!counter) return;

      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 10; j++) {
          const num = document.createElement("div");
          num.classList.add("num");
          num.textContent = String(j);
          counter.appendChild(num);
        }
      }

      const finalNum = document.createElement("div");
      finalNum.classList.add("num");
      finalNum.textContent = "0";
      counter.appendChild(finalNum);
    };

    initCounters(counter3Ref);

    const animate = (
      counterRef: React.RefObject<HTMLDivElement>,
      duration: number,
      delay = 0
    ) => {
      const counter = counterRef.current;

      if (!counter) return;

      const numHeight =
        counter.querySelector<HTMLDivElement>(".num")?.clientHeight || 0;
      const totalDist =
        (counter.querySelectorAll(".num").length - 1) * numHeight;

      gsap.to(counter, {
        y: -totalDist,
        duration,
        delay,
        ease: "power2.inOut",
      });
    };

    animate(counter3Ref, 3);
    animate(counter2Ref, 4);
    animate(counter1Ref, 1, 2.9);

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
      onComplete: () => {
        setIsLoading(false);
      },
    });
  }, [setIsLoading]);

  return (
    <div
      ref={loadingScreenRef}
      className="loading-screen z-[9999] overflow-hidden flex"
    >
      <div className="loader">
        <div className="loader-1 bar" />
        <div className="loader-2 bar" />
      </div>

      <div className="counter">
        <div ref={counter1Ref} className="counter-1 digit">
          <div className="num">0</div>
          <div className="num num1offset1">1</div>
        </div>
        <div ref={counter2Ref} className="counter-2 digit">
          <div className="num">0</div>
          <div className="num num1offset2">1</div>
          {fakeNumbers.slice(2).map((num) => (
            <div key={`num-1-${num}`} className="num">
              {num}
            </div>
          ))}
          <div className="num">0</div>
        </div>
        <div ref={counter3Ref} className="counter-3 digit">
          {fakeNumbers.map((num) => (
            <div key={`num-2-${num}`} className="num">
              {num}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preloader;
