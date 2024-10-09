import { useGetUsers } from "../api/users/useGetUsers";
import { UserDetailsType } from "../Type/type";
import useDeleteUser from "../api/users/useDeleteUser";
import { Images } from "../img/imgObj";
export const UserListTwo = () => {
  console.log("userList components is rendering");

  const mutation = useDeleteUser();
  const { data: users, isLoading } = useGetUsers();

  if (isLoading) {
    return <div>Data is Fetching</div>;
  }
  if (!users || users.length === 0) {
    return <div>No User Found</div>;
  }
  const handledeletebutton = (user: UserDetailsType) => {
    mutation.mutate(user.id);
  };
  return (
    <div className="flex flex-col w-[100vw] overflow-scroll justify-center text-left items-center bg-[#e1f2fd] ">
      <span className="text-[40px] font-bold w-[70%]">Users</span>
      <div className="w-[70%] flex justify-end">
        <button className="font-bold bg-[#1494e9] text-white p-[10px] rounded-[5px]">
          Add New User
        </button>
      </div>
      {users.map((user: UserDetailsType, index: number) => (
        <div
          key={user.id}
          className="flex w-[70%] max-w-[55%] mt-[10px]  p-[10px] bg-transprent border-b-2 border-[#bdcee6] hover:bg-[#1111111e]  justify-between"
        >
          <div className=" flex">
            <div className="flex flex-col justify-start relative">
              <img
                src={Images[index]}
                alt=""
                className="h-[30px] w-[30px] rounded-[40%]"
              />
              {user.status === "active" ? (
                <span className="bg-green-600  absolute w-[9px] h-[9px] rounded-full"></span>
              ) : (
                <span className="bg-red-600 absolute w-[9px] h-[9px] rounded-full"></span>
              )}
              <span className="text-[25px] w-[30px] h-[30px]">
                {user.gender === "male" ? "♂" : "♀"}
              </span>
            </div>
            <div className="flex text-start ml-[10px] gap-[10px] userdetails">
              <span className="font-bold text-[15px]">{user.name}</span>
              <span className="font-normal text-[15px] text-[#757575]">
                {user.email}
              </span>
            </div>
          </div>
          <div className="flex gap-[30px]">
              <button className="" >👤</button>                      
             <button  className="" onClick={()=> handledeletebutton(user)}>🗑️</button>    
          </div>
        </div>
      ))}
    </div>
  );
};
