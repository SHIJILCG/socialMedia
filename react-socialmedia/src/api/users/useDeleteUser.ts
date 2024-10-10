import { useMutation, useQueryClient } from "react-query";
import { QUERY_KEYS } from "../queryKeys";
import { axiosInstance } from "../axiosInstance";

export default function useDeleteUser() {
  const queryClient = useQueryClient();
  return useMutation(
    (UserId: number) =>
      axiosInstance.delete(`/users/${UserId}`),
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
