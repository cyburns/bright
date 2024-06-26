"use client";

import SignUp from "@/components/signup/sign-up";
import { User, onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { FIREBASE_AUTH } from "@/FirebaseConfig";

const Page = () => {
  const [isUser, setIsUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      FIREBASE_AUTH,
      (user: User | null) => {
        setIsUser(user);
      }
    );

    return () => unsubscribe();
  }, []);

  return <SignUp />;
};

export default Page;
