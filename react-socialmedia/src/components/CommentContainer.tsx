import { CommentSection } from "./CommentSection";
import { InputComment } from "./InputComment";
import { BackButtonCommon } from "./BackButtonCommon";
type CommentContainerPropsType = {
  postId: number;
  setshowComments: React.Dispatch<React.SetStateAction<boolean>>;
};
export const CommentContainer = ({
  postId,
  setshowComments,
}: CommentContainerPropsType) => {
  return (
    <div className="flex flex-col pointer-events-auto fixed top-[50%] p-[20px] border-2 left-[50%] bg-[#9eb4c9] w-[40%] translate-y-[-50%] z-10 justify-end translate-x-[-50%] max-h-[500px] min-h-[400px] overflow-y-scroll">
      <div className="w-[100%] flex items-start fixed top-1 left-1">
        <BackButtonCommon setShowComments={setshowComments} />
      </div>
      <div className="w-[100%] h-[100%] p-[10px] mb-[30px] mt-[15px]">
        <CommentSection postId={postId} />
      </div>
      <InputComment postDetails={postId} />
    </div>
  );
};
