import axios from "axios";
import { useEffect, useState } from "react";
import { CommentsDetailsType, PostDetailsType } from "../Type/type";
import { useMutation } from "react-query";
import { CurrentUser } from "../api/currentUser";
type InputCommentPropsType = {
  PostDetails: PostDetailsType;
};
export const InputComment = ({ PostDetails }: InputCommentPropsType) => {
  const [comment, setcomment] = useState<string>("");
  const mutation = useMutation((newPost: CommentsDetailsType) =>
    axios.post(
      `https://gorest.co.in/public/v2/posts/${PostDetails.id}/comments`,
      newPost,
      {
        headers: {
          Authorization:
            "Bearer 6b204f150fab8a67c4999209fc8a26bd41c529119ba85157f6884f2a52870926",
        },
      }
    )
  );

  const handlePostClik = () => {
    if (!comment) {
      return;
    }
    mutation.mutate({
      id: PostDetails.id,
      post_id: CurrentUser.id,
      name: CurrentUser.name,
      email: CurrentUser.email,
      body: comment,
    });
    setcomment("");
  };
  console.log({
    id: PostDetails.id,
    post_id: CurrentUser.id,
    name: CurrentUser.name,
    email: CurrentUser.email,
    body: comment,
  });
  useEffect(() => {
    if (mutation.isLoading) {
      console.log("Submitting...");
    }

    if (mutation.isError) {
      console.log("error occured");
    }

    if (mutation.isSuccess) {
      console.log("successfuly posted");
    }
  }, [mutation.isLoading, mutation.isError, mutation.isSuccess]);
  return (
    <div className="mx-[10px] mb-[10px] flex border-t-2">
      <input
        type="text"
        className="w-[100%] h-[30px] bg-transparent active: active:border-none outline-none"
        placeholder="Add Comment...."
        value={comment}
        onChange={(e) => setcomment(e.target.value)}
      />
      <button className="font-bold" onClick={handlePostClik}>
        Post
      </button>
    </div>
  );
};
