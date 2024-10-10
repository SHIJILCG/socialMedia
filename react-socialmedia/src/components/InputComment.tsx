import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSetComments } from "../api/comments/useSetComments";
import { useGetSingleUsers } from "../api/users/UserGetSingleUser";
type InputCommentPropsType = {
  postDetails: number;

};

export const InputComment = ({
  postDetails: postDetails

}: InputCommentPropsType) => {
  const [comment, setComment] = useState<string>("");
  const mutation = useSetComments(postDetails);
  const { userId } = useParams();
  let UserId = userId && typeof +userId === "number" ? +userId : 0;
  const { data: CurrentUser } = useGetSingleUsers(UserId);

  const handlePostClik = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!comment) {
      return;
    }
    const commentId = new Date().getSeconds();

    mutation.mutate({
      id: commentId,
      post_id: postDetails,
      name: CurrentUser.name,
      email: CurrentUser.email,
      body: comment,
    });
    setComment("")

  };
  return (
    <form
      onSubmit={(e) => handlePostClik(e)}
      className=" px-[10px] py-[10px] flex border-t-2 fixed bottom-0 bg-[#8396a8] w-[100%] left-0"
    >
      <input
        type="text"
        className="w-[100%] h-[30px] bg-transparent placeholder:text-black active: active:border-none outline-none"
        placeholder="Add Comment...."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <input type="submit" value="Post" className="font-bold" />
    </form>
  );
};
