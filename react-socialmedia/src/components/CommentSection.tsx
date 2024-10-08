import { useGetPostComments } from "../api/comments/useGetComments";
import { CommentsDetailsType } from "../Type/type";
type CommentSectionPropsType = {
  postId: number;
};
export const CommentSection = ({ postId }: CommentSectionPropsType) => {
  const { data: comments } = useGetPostComments(postId);
  if (!comments || comments.length === 0) {
    return <span>No comments</span>;
  }
  return (
    <>
      {comments.map((comment: CommentsDetailsType) => (
        <div
          key={comment.id}
          className="flex-col justify-between w-[100%] gap-[20-px] shadow-md bg-[#0001] p-[5px]"
        >
          <div key={comment.id} className="p-[10px]">
            {comment.body}
          </div>
          <div className="flex align-middle gap-[10px]">
            <span>
              <img
                src="https://as2.ftcdn.net/v2/jpg/01/26/61/13/1000_F_126611337_m8kcRtS5G7AhrFpOQ0Wufx4PgL6J4yxg.jpg"
                alt=""
                className="w-[35px] h-[35px] rounded-[50%]"
              />{" "}
            </span>
            <span>{comment.name}</span>
          </div>
        </div>
      ))}
    </>
  );
};
