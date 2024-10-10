import { PostDetailsType } from "../Type/type";
import { DeleteButtonCommon } from "./DeleteButtonCommon";
import PostHeaderUserProfile from "./PostHeaderUserProfile";
type PostCardPoropsType = {
  post: PostDetailsType;
  setcommentDetails: React.Dispatch<React.SetStateAction<number>>;
  setshowComments: React.Dispatch<React.SetStateAction<boolean>>;
  currentUserId: number;
};
export default function PostCard({
  post,
  setcommentDetails,
  setshowComments,
  currentUserId,
}: PostCardPoropsType) {
  const handleCommentButtonClik = (PostId: number) => {
    setcommentDetails(PostId);
    setshowComments(true);
  };
  return (
    <div className=" flex flex-col items-center max-w-[600px] bg-white border-2 m-[20px] p-[20px] hover:scale-105 hover:bg-[#f3f3f3] relative rounded-3xl">
      <div className="w-[100%] m-[20px] flex ">
        <PostHeaderUserProfile currentPostUser={post.user_id} />
        {post.user_id === currentUserId && <DeleteButtonCommon Post={post}/>}  {/* here we can delete unwanted post by removing the check */}
      </div>
      <div className="flex w-[100%]">
        <div className="h-[100%] w-[100%]">
          <div className="text-[30px] font-bold text-start break-all">
            {post.title}
          </div>
          <div className="text-start p-[20px] text-inherit flex break-all">
            {post.body}
          </div>
          <div className="flex w-[100%]">
            <button
              className="w-[40px]"
              onClick={() => handleCommentButtonClik(post.id)}
            >
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/free-comment-logo-icon-download-in-svg-png-gif-file-formats--instagram-brand-filled-line-pack-logos-icons-2724645.png?f=webp&w=256"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
