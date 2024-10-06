import React from "react";
type BackButtonPorpsTYpe = {
  setshowComments: (value: boolean) => void;
};
export const BackButton = ({ setshowComments }: BackButtonPorpsTYpe) => {
  return (
    <button
      className="text-[20px] rotate-180 p-[10px] "
      onClick={() => setshowComments(false)}
    >
      ➜
    </button>
  );
};
