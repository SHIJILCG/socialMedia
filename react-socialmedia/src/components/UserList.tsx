import { useContext } from "react";
import { useGetUsers } from "../api/users/useGetUsers";
import { UserDetailsType } from "../Type/type";
import { SetContext } from "../pages/UserPostPage";
import useDeleteUser from "../api/users/useDeleteUser";

export const UserList = () => {
  const setcontext = useContext(SetContext);
  const mutation = useDeleteUser();
  const { data: users } = useGetUsers();
  if (!users || users.length === 0) {
    return <div>No User Found</div>;
  }
  const handledeletebutton = (user: UserDetailsType) => {
    mutation.mutate(user.id);
  };
  return (
    <div className="flex flex-col max-w-[350px] max-h-[600px] overflow-scroll absolute top-[70px] left-[30px]  bg-white shadow-2xl border-2 z-10">
      {users.map((user: UserDetailsType) => (
        <div
          key={user.id}
          className="flex m-[10px] p-[5px] bg-white border-b-2 border-[#dfdfdf] hover:bg-[#1111111e] active:scale-95 relative "
        >
          <button
            className="absolute text-black right-[10px]"
            onClick={() => handledeletebutton(user)}
          >
            🗑️
          </button>
          <div className="flex flex-col relative">
            <img
              src="https://as2.ftcdn.net/v2/jpg/01/26/61/13/1000_F_126611337_m8kcRtS5G7AhrFpOQ0Wufx4PgL6J4yxg.jpg"
              alt=""
              className="h-[25px] w-[30px] rounded-[50%]"
            />
            {user.status === "active" ? (
              <span className="bg-green-600  absolute w-[7px] h-[7px] rounded-full"></span>
            ) : (
              <span className="bg-red-600 absolute w-[7px] h-[7px] rounded-full"></span>
            )}
            <span className="text-[30px] w-[30px] h-[30px]">
              {user.gender === "male" ? "♂" : "♀"}
            </span>
          </div>
          <div className="flex flex-col text-start">
            <span className="font-bold text-[15px]">Name: {user.name}</span>
            <span className="font-normal text-[15px] text-[#757575]">
              Email: {user.email}
            </span>
          </div>
        </div>
      ))}
      <div
        className="font-bold"
        onClick={() => setcontext.setshowNewUserContainer((Prev) => !Prev)}
      >
        Add User...
      </div>
    </div>
  );
};
