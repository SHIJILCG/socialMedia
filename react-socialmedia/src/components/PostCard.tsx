import { useState } from "react";
import { PostDetailsType } from "../Type/type";
import PostHeaderUserProfile from "./PostHeaderUserProfile";
import { CommentSection } from "./CommentSection";
import { BackButton } from "./BackButton";
import { InputComment } from "./InputComment";
import { CommentButton } from "./CommentButton";
type PostCardPoropsType = {
  post: PostDetailsType;
};
export default function PostCard({ post }: PostCardPoropsType) {
  const [showComments, setShowComments] = useState(false);
  return (
    <div className="w-[100vw] flex flex-col items-center">
      <div className="flexn flex-col w-[50%]  p-[24px] border-2 shadow-2xl m-[20px] relative">
        <PostHeaderUserProfile currentPostUser={post.user_id} />
        <div className="flex">
          <div className="h-[100%]">
            <div className="p-[10px] text-[30px] font-bold text-start">
              {post.title}
            </div>
            <div className="text-start p-[20px] text-inherit">{post.body}</div>
            <CommentButton setShowComments={setShowComments} />
          </div>
          <div className="">
            <img
              src="https://cdn.pixabay.com/photo/2019/03/22/18/26/abstract-4073887_1280.jpg"
              alt=""
              className="h-[100%] rounded-bl-[90px]"
            />
          </div>
        </div>
        {showComments && (
          <div className=" bg-[#dadada] absolute bottom-0 w-[100%] left-0 rounded-t-xl text-start overflow-scroll">
            <BackButton setShowComments={setShowComments} />
            <div className="w-[100%] h-[100%] p-[10px] flex flex-col items-center gap-[10px]">
              <CommentSection postId={post.id} />
            </div>
            <InputComment postDetails={post} />
          </div>
        )}
      </div>
    </div>
  );
}
