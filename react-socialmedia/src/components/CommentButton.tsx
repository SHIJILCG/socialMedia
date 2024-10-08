import React from "react";
type CommentButtonPropsType = {
  setShowComments: React.Dispatch<React.SetStateAction<boolean>>;
};
export const CommentButton = ({
  setShowComments: setShowComments,
}: CommentButtonPropsType) => {
  return (
    <div
      className="h-[35px] w-[35px] active:scale-95"
      onClick={() => setShowComments((Prev) => !Prev)}
    >
      <img
        src="https://cdn.iconscout.com/icon/free/png-512/free-comment-logo-icon-download-in-svg-png-gif-file-formats--instagram-brand-filled-line-pack-logos-icons-2724645.png?f=webp&w=256"
        alt=""
      />
    </div>
  );
};
