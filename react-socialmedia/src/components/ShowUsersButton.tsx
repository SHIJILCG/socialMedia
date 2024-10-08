type ShowUsersButtonPropsType = {
  setShowUsers: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ShowUsersButton = ({ setShowUsers }: ShowUsersButtonPropsType) => {
  return (
    <div onClick={() => setShowUsers((Prev: boolean) => !Prev)}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/72/72728.png"
        alt=""
        className="h-[50px] absolute top-[20px] left-[20px]"
      />
    </div>
  );
};
