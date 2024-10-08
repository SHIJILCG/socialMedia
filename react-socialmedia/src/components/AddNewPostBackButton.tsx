import { useContext } from "react";
import { SetContext } from "../pages/UserPostPage";

export const AddNewPostBackButton = () => {
  const setNewContext = useContext(SetContext);
  return (
    <button onClick={() => setNewContext?.setshowNewPostContainer(false)}>
      <img
        src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/back-arrow-icon.png"
        alt=""
        className="w-[30px] active:scale-95"
      />
    </button>
  );
};
