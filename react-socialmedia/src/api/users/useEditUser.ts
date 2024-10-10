import { useMutation, useQueryClient } from "react-query";
import { QUERY_KEYS } from "../queryKeys";
import { UserDetailsType } from "../../Type/type";
import { axiosInstance } from "../axiosInstance";

export default function useEditUser() {
  const queryClient = useQueryClient();
  return useMutation(
    (user: UserDetailsType) => axiosInstance.put(`/users/${user.id}`, user),
    {
      onError(error) {
        console.log("Error occured", error);
      },
      onSuccess: () => {
        console.log("User is deleted");
        queryClient.invalidateQueries(QUERY_KEYS.GET_ALL_USERS);
      },
    }
  );
}
