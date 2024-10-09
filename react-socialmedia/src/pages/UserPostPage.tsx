import { createContext, useState } from "react";
import { CurrentUser } from "../api/currentUser";
import { useGetPosts } from "../api/posts/usergetPosts";
import { AddNewPost } from "../components/AddNewPost";
import { PostAddButton } from "../components/PostAddButton";
import PostCard from "../components/PostCard";
import { ShowUsersButton } from "../components/ShowUsersButton";
import { UserList } from "../components/UserList";
import { ContextType, PostDetailsType } from "../Type/type";
import { AddNewUser } from "../components/AddNewUser";
export const SetContext = createContext<ContextType>({} as ContextType);

export const UserPostPage = () => {
  console.log("userHome page")
  const { data: Posts } = useGetPosts();
  const [showNewPostContainer, setshowNewPostContainer] = useState(false);
  const [showNewUserContainer, setshowNewUserContainer] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  if (!Posts) {
    return <div>No Data Found</div>;
  }
  return (
    <SetContext.Provider
      value={{ setshowNewPostContainer, setshowNewUserContainer }}
    >
      <div
        className={`relative overflow-scroll ${
          showNewPostContainer ? "blur-2xl" : ""
        } `}
      >
        <ShowUsersButton setShowUsers={setShowUsers} />
        {showUsers && <UserList />}
        {showNewUserContainer && <AddNewUser />}
        {Posts.map((post: PostDetailsType) => (
          <PostCard key={post.id} post={post} />
        ))}
        <PostAddButton setNewPost={setshowNewPostContainer} />
      </div>
      {showNewPostContainer && <AddNewPost currentUser={CurrentUser} />}
    </SetContext.Provider>
  );
};
