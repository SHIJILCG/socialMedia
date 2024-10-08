type BackButtonPorpsType = {
  setShowComments: (value: boolean) => void;
};
export const BackButton = ({
  setShowComments: setShowComments,
}: BackButtonPorpsType) => {
  return (
    <button
      className="text-[20px] rotate-180 p-[10px] "
      onClick={() => setShowComments(false)}
    >
      ➜
    </button>
  );
};
