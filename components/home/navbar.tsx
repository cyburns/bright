"use client";

import React, { forwardRef, useEffect, useState, LegacyRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "@/FirebaseConfig";
import useGetUserById from "@/hooks/userHooks/useGetUserById";

interface UserProfile {
  username: string;
}

const Navbar = forwardRef<HTMLLIElement>((props, ref) => {
  const [pathName, setPathName] = useState<string>("signup");
  const [profilePath, setProfilePath] = useState<"Profile" | "Signup">(
    "Profile"
  );

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

  const auth = getAuth();
  const currentUserId = auth.currentUser?.uid;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      FIREBASE_AUTH,
      (user: User | null) => {
        if (!user) {
          setPathName("signup");
          setProfilePath("Signup");
        }
      }
    );

    return () => unsubscribe();
  }, []);
  const { userProfile, isUserLoading } = useGetUserById(currentUserId) as {
    userProfile: UserProfile | null;
    isUserLoading: boolean;
  };

  useEffect(() => {
    if (isUserLoading || !userProfile) return;

    setPathName(`/${userProfile.username}`);
    setProfilePath("Profile");
  }, [userProfile, isUserLoading]);

  return (
    <nav className="pt-[20px] fixed left-0 top-0 w-full z-[9999] h-[62px] mix-blend-difference text-white box-border text-[12px]">
      <div className="w-full px-[25px] mx-auto flex flex-row justify-between">
        <div className="flex flex-wrap w-1/3 sm:w-[37.5%]">
          <ul className="z-[999999]" ref={ref as LegacyRef<HTMLUListElement>}>
            <li className="relative">
              <span className="indicator absolute left-[-10px] top-[50%] translate-y-[-50%] w-[5px] h-[5px] bg-white rounded-full opacity-0"></span>
              <Link href="/">
                BRIGHT- <br /> STUDIO
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden sm:flex flex-wrap w-[12.5%] uppercase">
          <ul className="z-[999999]">
            <li className="relative">
              <span className="indicator absolute left-[-10px] top-[50%] translate-y-[-50%] w-[5px] h-[5px] bg-white rounded-full opacity-0"></span>
              <Link href="/shop">shop templates</Link>
            </li>
            <li className="relative">
              <span className="indicator absolute left-[-10px] top-[50%] translate-y-[-50%] w-[5px] h-[5px] bg-white rounded-full opacity-0"></span>
              <Link href="/">
                STUDIO<sup>tm</sup>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap w-1/3 sm:w-[12.5%] uppercase">
          <ul className="z-[999999]">
            <li className="relative">
              <span className="indicator absolute left-[-10px] top-[50%] translate-y-[-50%] w-[5px] h-[5px] bg-white rounded-full opacity-0"></span>
              <Link href="/blog">blog [bb]</Link>
            </li>
            <li className="relative">
              <span className="indicator absolute left-[-10px] top-[50%] translate-y-[-50%] w-[5px] h-[5px] bg-white rounded-full opacity-0"></span>
              <Link href={pathName}>{profilePath}</Link>
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
              <a href="">+1 [413] 854-3541</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-end md:justify-start flex-wrap sm:w-1/3 lg:w-[25%] md:w-[12.5%] uppercase">
          <ul className="z-[999999]">
            <li className="relative">
              <span className="indicator absolute left-[-10px] top-[50%] translate-y-[-50%] w-[5px] h-[5px] bg-white rounded-full opacity-0"></span>
              <a href="https://www.linkedin.com/in/cyburns/">LinkedIn</a>
            </li>
            <li className="relative">
              <span className="indicator absolute left-[-10px] top-[50%] translate-y-[-50%] w-[5px] h-[5px] bg-white rounded-full opacity-0"></span>
              <a href="https://github.com/cyburns">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
});

export default Navbar;
