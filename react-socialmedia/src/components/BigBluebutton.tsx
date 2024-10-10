type bigBluebuttonPropsType = {
  setisNewUser?: React.Dispatch<React.SetStateAction<boolean>>;
  setshowNewPost?: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
  css?:string
};
export const BigBluebutton = ({
  setisNewUser,
  setshowNewPost,
  text,
  css
}: bigBluebuttonPropsType) => {
  const handlBlueButtonClik = () => {
    if (setisNewUser) {
      setisNewUser((Prev: boolean) => !Prev);
    }
    if (setshowNewPost) {
      setshowNewPost((Prev: boolean) => !Prev);
    }
  };
  return (
    <button
      className={`font-bold bg-[#1494e9] text-white p-[20px] rounded-[5px] active:scale-95 ${css}`}
      onClick={handlBlueButtonClik}
    >
      {text}
    </button>
  );
};
