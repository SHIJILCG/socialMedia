import { useGetUsers } from "../api/users/useGetUsers";
import { Usercard } from "../components/Usercard";
import { UserDetailsType } from "../Type/type";
export default function HomeUserListPage() {
  const { data: Users, isError, isLoading } = useGetUsers();
  if (isLoading) return <div>Data is Loading.....</div>;
  if (isError) return <div>Error Occured While Fetching Data</div>;
  return (
    <div className="flex h-[100vh] card">
      <div className="flex  flex-wrap justify-center align-middle w-[80%] max-w-[700px] m-auto gap-[16px]">
        {Users.map((user: UserDetailsType) => (
          <Usercard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
