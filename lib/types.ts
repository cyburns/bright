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