import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetUsers } from "../api/users/useGetUsers";
import { Images } from "../img/imgObj";
import { UserDetailsType } from "../Type/type";
import { AddNewUser } from "./AddNewUser";
import { BigBluebutton } from "./BigBluebutton";
import { DeleteButtonCommon } from "./DeleteButtonCommon";
import { EditUserContainer } from "./EditUserContainer";

export const UserListTwo = () => {
  const { data: users, isLoading } = useGetUsers();
  const [isNewUser, setisNewUser] = useState<boolean>(false);
  const [isEditUser, setisEditUser] = useState<boolean>(false);
  const [editUser, seteditUser] = useState<UserDetailsType>(
    {} as UserDetailsType
  );
  const navigate = useNavigate();
  if (isLoading) {
    return (
      <div className="h-[100vh] w-[100vw] text-center text-[20px] font-bold ">
        Data is Fetching....
      </div>
    );
  }
  if (!users || users.length === 0) {
    return (
      <div className="h-[100vh] w-[100vw] text-center text-[20px] font-bold ">
        No User Found
      </div>
    );
  }
  const HandleEditUserDetails = (user: UserDetailsType) => {
    seteditUser(user);
    setisEditUser(true);
  };
  return (
    <div
      className={`flex flex-col w-[100vw] overflow-scroll justify-center text-left items-center  relative 
        ${isNewUser ? "MakeBlur" : ""}
        ${isEditUser ? "MakeBlur" : ""}`}
    >
      {isNewUser && <AddNewUser SetisNewUser={setisNewUser} />}
      {isEditUser && (
        <EditUserContainer
          UserDetails={editUser}
          setisEditUsre={setisEditUser}
        />
      )}
      <span className="text-[40px] font-bold w-[70%]">Users</span>
      <div className="w-[70%] flex justify-end">
        <BigBluebutton setisNewUser={setisNewUser} text="Add New User" />
      </div>
      {users.map((user: UserDetailsType, index: number) => (
        <div
          key={user.id}
          className="flex w-[70%] max-w-[55%] mt-[10px]  p-[10px] bg-transprent border-b-2 border-[#bdcee6] hover:bg-[#1111111e]  justify-between"
        >
          <div
            className=" flex w-[90%]"
            onClick={() => navigate(`PostPage/${user.id}`)}
          >
            <div className="flex flex-col justify-start relative">
              <img
                src={Images[index]}
                alt=""
                className="h-[30px] w-[30px] rounded-[40%]"
              />
              <span
                className={`absolute w-[9px] h-[9px] rounded-full ${user.status}`}
              ></span>

              <span className="text-[25px] w-[30px] h-[30px]">
                {user.gender === "male" ? "♂" : "♀"}
              </span>
            </div>
            <div className="flex text-start ml-[10px] gap-[10px] userdetails">
              <span className="font-bold text-[15px] break-words">
                {user.name}
              </span>
              <span className="font-normal text-[15px] text-[#757575] break-all">
                {user.email}
              </span>
            </div>
          </div>
          <div className="flex gap-[30px]">
            <button onClick={() => HandleEditUserDetails(user)}>👤</button>
            <DeleteButtonCommon user={user.id} />
          </div>
        </div>
      ))}
    </div>
  );
};
