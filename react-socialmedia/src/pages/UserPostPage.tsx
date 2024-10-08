import { createContext, useState } from "react";
import { CurrentUser } from "../api/currentUser";
import { useGetPosts } from "../api/posts/usergetPosts";
import { AddNewPost } from "../components/AddNewPost";
import { PostAddButton } from "../components/PostAddButton";
import PostCard from "../components/PostCard";
import { ShowUsersButton } from "../components/ShowUsersButton";
import { UserList } from "../components/UserList";
import { ContextType, PostDetailsType } from "../Type/type";
export const SetContext = createContext<ContextType>({} as ContextType);

export const UserPostPage = () => {
  const { data: Posts } = useGetPosts();
  const [showNewPostContainer, setshowNewPostContainer] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  if (!Posts) {
    return <div>No Data Found</div>;
  }

  return (
    <>
      <div
        className={`relative overflow-scroll ${
          showNewPostContainer ? "blur-2xl" : ""
        }`}
      >
        <ShowUsersButton setShowUsers={setShowUsers} />
        {showUsers && <UserList />}
        {Posts.map((post: PostDetailsType) => (
          <PostCard key={post.id} post={post} />
        ))}
        <PostAddButton setNewPost={setshowNewPostContainer} />
      </div>
      {showNewPostContainer && <AddNewPost currentUser={CurrentUser} />}
    </>
  );
};
