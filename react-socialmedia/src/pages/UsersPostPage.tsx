import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetPosts } from "../api/posts/usergetPosts";
import { AddNewPost } from "../components/AddNewPost";
import { BigBluebutton } from "../components/BigBluebutton";
import { CommentContainer } from "../components/CommentContainer";
import PostCard from "../components/PostCard";
import { PostDetailsType } from "../Type/type";

export const UsersPostPage = () => {
  const { data: Posts } = useGetPosts();
  const [PostId, setPostId] = useState<number>(0);
  const [showComments, setshowComments] = useState(false);
  const [showNewPost, setshowNewPost] = useState(false);
  const navigate = useNavigate();
  const { userId } = useParams();
  if (!userId || typeof +userId !== "number") {
    return null;
  }
  if (!Posts || Posts.length === 0) {
    return <div>No Data</div>;
  }
  return (
    <div
      className={`bg-[#e1f2fd] relative flex flex-col p-[100px] justify-center  
        ${showComments ? "pointer-events-none" : ""}
        ${showNewPost ? "pointer-events-none" : ""}`}
    >
      <button
        className="absolute top-10 bg-blue-400 text-white px-[25px] py-[5px] rounded-md  active:scale-95"
        onClick={() => navigate(-1)}
      >
        ⟸
      </button>
      <BigBluebutton
        text="Add new Post"
        css="fixed right-14 bottom-16 z-10"
        setshowNewPost={setshowNewPost}
      />
      <span className="text-[30px] font-bold">Posts</span>
      <div className="justify-center flex flex-wrap w-[100%] relative">
        {Posts.map((post: PostDetailsType) => (
          <PostCard
            key={post.id}
            post={post}
            setcommentDetails={setPostId}
            setshowComments={setshowComments}
            currentUserId={+userId}
          />
        ))}
      </div>
      {showComments && (
        <CommentContainer postId={PostId} setshowComments={setshowComments} />
      )}
      {showNewPost && (
        <AddNewPost currentUserId={+userId} setshowNewPost={setshowNewPost} />
      )}
    </div>
  );
};
