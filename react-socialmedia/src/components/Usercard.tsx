import { UserDetailsType } from "../Type/type";
import { Navigate, useNavigate } from "react-router-dom";
type UsercardPropsType = {
  user: UserDetailsType;
};
export const Usercard = ({ user }: UsercardPropsType) => {
  const navigate = useNavigate();

  return (
    <div
      className="w-[155px]  flex flex-col  items-center gap-[9px] hover:shadow-lg p-[16px]"
    >
      <img
        src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
        alt=""
        className=" w-[74px] rounded-[50%] border-1"
      />
      <div className="flex flex-col gap-[4px]">
        <span className="text-[16px] font-bold leading-[24px]">
          {user.name}
        </span>
        <span className="text-[12px] font-normal text-[#949494] leading-[18px]">
          {user.gender}
        </span>
      </div>
    </div>
  );
};
