import React from "react";
type BackButtonCommonPropType = {
  setShowComments?: React.Dispatch<React.SetStateAction<boolean>>;
  setShowNewPost?: React.Dispatch<React.SetStateAction<boolean>>;
  SetisNewUser?: React.Dispatch<React.SetStateAction<boolean>>;
  setisEditUsre?: React.Dispatch<React.SetStateAction<boolean>>;
};
export const BackButtonCommon = ({
  setShowComments,
  setShowNewPost,
  SetisNewUser,
  setisEditUsre,
}: BackButtonCommonPropType) => {
  const handlebackbuttonclicked = () => {
    if (setShowComments) {
      setShowComments(false);
    }
    if (setShowNewPost) {
      setShowNewPost(false);
    }
    if (SetisNewUser) {
      SetisNewUser(false);
    }
    if (setisEditUsre) {
      setisEditUsre(false);
    }
  };
  return (
    <div
      className=" active:scale-95 text-[20px] rotate-180 p-[10px] font-bold "
      onClick={handlebackbuttonclicked}
    >
      X
    </div>
  );
};
