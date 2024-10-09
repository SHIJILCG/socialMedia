import { useContext } from "react";
import { SetContext } from "../pages/UserPostPage";

type ShowUsersButtonPropsType = {
  setShowUsers: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ShowUsersButton = ({ setShowUsers }: ShowUsersButtonPropsType) => {
  const setcontext = useContext(SetContext)
  const handlebuttonclick=()=>{
    setShowUsers((Prev: boolean) => !Prev)
    setcontext.setshowNewUserContainer(false)
  }
  return (
    <div onClick={handlebuttonclick}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/72/72728.png"
        alt=""
        className="h-[50px] absolute top-[20px] left-[20px]"
      />
    </div>
  );
};
