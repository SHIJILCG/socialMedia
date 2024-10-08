import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { QUERY_KEYS } from "../queryKeys";

export default function useDeleteUser() {
  const queryClient = useQueryClient();
  return useMutation(
    (UserId: number) =>
      axios.delete(`https://gorest.co.in/public/v2/users/${UserId}`, {
        headers: {
          Authorization:
            "Bearer 6b204f150fab8a67c4999209fc8a26bd41c529119ba85157f6884f2a52870926",
        },
      }),
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
