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
        <img
          className="w-[78px] h-[48px] rounded-[50%]  userImg"
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
        />
        <div className="flex flex-col text-start">
          <span>No Name</span>
          <span>No Email</span>
        </div>
      </div>
    );
  }
  return (
    <div className="flex w-[100%] flex-wrap">
      <img
        src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
        alt=""
        className="w-[74px] userImg"
      />
      <div className="flex flex-col text-start">
        <span className="font-bold">{user.name}</span>
        <span className="font-normal text-[#5c5c5c]">{user.email}</span>
      </div>
    </div>
  );
}
