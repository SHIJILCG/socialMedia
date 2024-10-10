import { useGetPostComments } from "../api/comments/useGetComments";
import { CommentsDetailsType} from "../Type/type";
type CommentSectionPropsType = {
  postId: number;
};
export const CommentSection = ({ postId }: CommentSectionPropsType) => {
  const { data: comments, isLoading } = useGetPostComments(postId);
  if (isLoading) {
    return <span>Data is Fetching</span>;
  }
  if (!comments || comments.length === 0) {
    return <span>No comments</span>;
  }
  console.log("rendring")
  return (
    <div className="w-[100%] gap-3 flex flex-col overflow-scroll max-h-[380px]">
      {comments.map((comment: CommentsDetailsType) => (
        <div
          key={comment.id}
          className="flex-col justify-between text-start w-[100%] gap-[20-px] border-2 border-[#06182011] shadow-md bg-[#06182011] p-[5px] relative"
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
    </div>
  );
};
