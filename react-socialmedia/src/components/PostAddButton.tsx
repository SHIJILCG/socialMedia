type PostAddButtonProsType = {
  setNewPost: React.Dispatch<React.SetStateAction<boolean>>;
};
export const PostAddButton = ({
  setNewPost: setNewPost,
}: PostAddButtonProsType) => {
  return (
    <div
      className="fixed top-[10px] right-[30px] flex flex-col items-center"
      onClick={() => setNewPost((Perv) => !Perv)}
    >
      <span>Add post</span>
      <img
        src="https://www.svgrepo.com/show/170952/add-button.svg"
        alt=""
        className="w-[45px] h-[45px]"
      />
    </div>
  );
};
