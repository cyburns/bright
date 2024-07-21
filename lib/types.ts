export interface PostProps {
  post: {
    id: string;
    postTitle: string;
    postContent: string;
    createdAt: {
      seconds: number;
      nanoseconds: number;
    };
    username: string;
    userProfilePicture: string;
    isCreatorVerified: boolean;
    comments: string[];
    likes: string[];
  };
  isSinglePost: boolean;
}

export type PostType = {
  id: string;
  postTitle: string;
  postContent: string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
  username: string;
  userProfilePicture: string;
  isCreatorVerified: boolean;
  comments: string[];
  likes: string[];
};

export type UserType = {
  username: string;
  profilePicture: string;
  bio: string;
  email: string;
  userId: string;
  isVerified: boolean;
  fullName: string;
  posts: string[];
};
