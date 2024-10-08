import { useState } from "react";
import { PostDetailsType } from "../Type/type";
import { CurrentUser } from "../api/currentUser";
import { useSetComments } from "../api/comments/useSetComments";
type InputCommentPropsType = {
  postDetails: PostDetailsType;
};
export const InputComment = ({
  postDetails: postDetails,
}: InputCommentPropsType) => {
  const [comment, setComment] = useState<string>("");
  const mutation = useSetComments(postDetails);

  const handlePostClik = () => {
    if (!comment) {
      return;
    }
    mutation.mutate({
      id: CurrentUser.id,
      post_id: postDetails.id,
      name: CurrentUser.name,
      email: CurrentUser.email,
      body: comment,
    });
    setComment("");
  };
  return (
    <div className="mx-[10px] mb-[10px] flex border-t-2">
      <input
        type="text"
        className="w-[100%] h-[30px] bg-transparent active: active:border-none outline-none"
        placeholder="Add Comment...."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button className="font-bold" onClick={handlePostClik}>
        Post
      </button>
    </div>
  );
};
