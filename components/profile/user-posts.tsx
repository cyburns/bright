import React from "react";
import Post from "@/components/post/post";
import { PostType } from "@/lib/types";

interface UserPostsProps {
  usersPosts: PostType[];
}

const UserPosts = ({ usersPosts }: UserPostsProps) => {
  return (
    <div>
      {usersPosts.map((post: PostType, index: number) => (
        <Post post={post} isSinglePost={false} key={index} />
      ))}
      <div className="h-32 w-full" />
    </div>
  );
};

export default UserPosts;
