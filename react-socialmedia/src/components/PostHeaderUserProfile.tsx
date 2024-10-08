import { useGetUsers } from "../api/users/useGetUsers";
import { UserDetailsType } from "../Type/type";
type PostHeaderUserProfilePropsType = {
  currentPostUser: number;
};
export default function PostHeaderUserProfile({
  currentPostUser,
}: PostHeaderUserProfilePropsType) {
  const { data: users } = useGetUsers();
  const user: UserDetailsType | undefined = users?.find(
    (user: UserDetailsType) => user.id === currentPostUser
  );

  if (!user) {
    return (
      <div className="flex gap-[10px]">
        <div className="w-[48px] h-[48px] rounded-[50%] border-2 border-black"></div>
        <div className="flex flex-col text-start">
          <span>no user name found</span>
          <span>no email id found</span>
        </div>
      </div>
    );
  }
  return (
    <div className="flex">
      <img
        src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
        alt=""
        className="w-[74px]"
      />
      <div className="flex flex-col text-start">
        <span className="font-bold">{user.name}</span>
        <span className="font-normal text-[#5c5c5c]">{user.email}</span>
      </div>
    </div>
  );
}
