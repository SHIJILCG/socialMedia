import { UserDetailsType } from "../Type/type";
import { AddNewPostBackButton } from "./AddNewPostBackButton";
import { useState } from "react";
import { useSetPosts } from "../api/posts/useSetPosts";
type AddNewPostProsType = {
  currentUser: UserDetailsType;
};
export const AddNewPost = ({ currentUser }: AddNewPostProsType) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const mutation = useSetPosts(currentUser);
  const handleShareClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({
      id: 99999,
      user_id: currentUser.id,
      title: title,
      body: body,
    });
    setTitle("");
    setBody("");
  };
  return (
    <div className="fixed top-[200px] left-[50%] translate-x-[-50%] w-[700px] h-[350px] bg-[#dfdfdf] shadow-2xl p-[20px] flex flex-col justify-between">
      <div className="flex justify-between">
        <AddNewPostBackButton />
        <h2 className="underline font-bold">New Post</h2>
        <div></div>
      </div>
      <form action="" onSubmit={(e) => handleShareClick} className="flex-1">
        <div className="flex-col flex p-[30px] h-[100%] justify-between">
          <div className="flex p-[10px]">
            <span className="text-[20px]">Title:</span>
            <input
              type="text"
              value={title}
              placeholder="Write a title...."
              className="w-[100%] focus:outline-none focus:border-none text-[20px]  bg-transparent"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex p-[10px]">
            <span className="text-[20px]">Body:</span>
            <textarea
              value={body}
              name=""
              placeholder="Write a body...."
              id=""
              className="w-[100%] focus:outline-none focus:border-none text-[20px]  bg-transparent"
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
          <input
            type="submit"
            value="Share"
            className="font-bold border-2 bg-slate-600 text-white py-[10px] active:scale-95"
          />
        </div>
      </form>
    </div>
  );
};
