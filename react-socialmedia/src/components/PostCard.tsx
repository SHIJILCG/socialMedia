import { PostDetailsType } from "../Type/type";
import PostHeaderUserProfile from "./PostHeaderUserProfile";
type PostCardPoropsType = {
  post: PostDetailsType;
};
export default function PostCard({ post }: PostCardPoropsType) {
  return (
    <div className="w-[100vw] flex flex-col items-center">
      <div className="flexn flex-col w-[600px] p-[10px] border-2 shadow-2xl m-[20px] active:scale-95">
        <PostHeaderUserProfile currentPostUser={post.user_id} />
        <div className="flex">
          <div className="h-[100%]">
            <div className="p-[10px] text-[30px] font-bold text-start">{post.title}</div>
            <div className="text-start p-[20px] text-inherit">{post.body}</div>
          </div>
          <div className="">
            <img
              src="https://cdn.pixabay.com/photo/2019/03/22/18/26/abstract-4073887_1280.jpg"
              alt=""
              className="h-[100%] rounded-bl-[90px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}