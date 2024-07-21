import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { FIREBASE_STORE } from "@/FirebaseConfig";
import { UserType } from "@/lib/types";

const useGetUserById = (userId: string | undefined) => {
  const [isUserLoading, setIsLoading] = useState(true);
  const [userProfile, setUserProfile] = useState<UserType | null>(null);
  const database = FIREBASE_STORE;

  useEffect(() => {
    if (!userId) return;

    const getUserProfile = async () => {
      setIsLoading(true);

      try {
        const userRef = await getDoc(doc(database, "users", userId));

        if (userRef.exists()) {
          //@ts-ignore
          setUserProfile(userRef.data());
        }
      } catch (error) {
        console.log("Error getting user profile", error);
      } finally {
        setIsLoading(false);
      }
    };

    getUserProfile();
  }, [setUserProfile, userId]);

  return { isUserLoading, userProfile, setUserProfile };
};

export default useGetUserById;
