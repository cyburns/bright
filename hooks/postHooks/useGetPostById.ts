import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { FIREBASE_STORE } from "@/FirebaseConfig";
import { PostType } from "@/lib/types";

const useGetPostById = (postId: string) => {
  const [isPostLoading, setIsPostLoading] = useState(true);
  const [onePost, setOnePost] = useState<PostType[] | null>(null);
  const database = FIREBASE_STORE;

  const getPost = async () => {
    setIsPostLoading(true);

    try {
      const userRef = await getDoc(doc(database, "posts", postId));

      if (userRef.exists()) {
        const postData = userRef.data() as PostType;
        postData.id = userRef.id;
        setOnePost([postData]);
      }
    } catch (error) {
      console.log("Error getting user profile", error);
    } finally {
      setIsPostLoading(false);
    }
  };

  useEffect(() => {
    getPost();
  }, [setOnePost, postId]);

  return { isPostLoading, onePost, setOnePost };
};

export default useGetPostById;
