import { useContext, useState } from "react";
import { useSetUser } from "../api/users/useSetUser";
import { gender, stat } from "../Type/type";
import { SetContext } from "../pages/UserPostPage";

export const AddNewUser = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Gender, setGender] = useState<"male" | "female">("male");
  const [Status, setStatus] = useState<"active" | "inactive">("active");
  const mutation = useSetUser();
  const setcontext = useContext(SetContext);
  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const date = new Date();
    const UserId =
      (date.getSeconds() + date.getHours() + date.getMinutes()) * 100;
    console.log(UserId);
    e.preventDefault();
    mutation.mutate({
      id: UserId,
      name: Name,
      email: Email,
      gender: Gender,
      status: Status,
    });
    setEmail("");
    setName("");
    setGender("male");
    setStatus("active");
  };
  return (
    <div className="absolute bg-[#cacaca] p-[10px] top-[680px] left-[60px] items-center">
      <div className="w-[100%] text-right px-[5px]">
        <button
          className="text-[30px] rotate-45"
          onClick={() => setcontext.setshowNewUserContainer((Perv) => !Perv)}
        >
          +
        </button>
      </div>
      <form
        action=""
        onSubmit={(e) => HandleSubmit(e)} ///////The Capital letter Porblem
        className="flex flex-col items-center"
      >
        <input
          type="text"
          placeholder="Enter Name..."
          value={Name}
          className="p-[10px] m-[5px] bg-transparent placeholder:text-black focus:outline-none border-b-2 border-[#3636366e] "
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Email..."
          value={Email}
          className="p-[10px] m-[5px] bg-transparent placeholder:text-black focus:outline-none border-b-2 border-[#3636366e] "
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex justify-around w-[100%]">
          <select
            name=""
            id=""
            value={Gender}
            required
            className="p-[10px] my-[5px] bg-transparent focus:outline-none border-2 border-[#3636366e]"
            onChange={(e) => setGender(e.target.value as gender)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <select
            name=""
            id=""
            value={Status}
            required
            className="p-[10px] my-[5px] bg-transparent focus:outline-none border-2 border-[#3636366e]"
            onChange={(e) => setStatus(e.target.value as stat)}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <input type="submit" className="bg-black text-white  p-[8px] w-[95%] active:scale-95 " />
      </form>
    </div>
  );
};
