import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { UserDetailsType } from "../../Type/type";
import { QUERY_KEYS } from "../queryKeys";

export const useSetUser = (NewUser: UserDetailsType) => {
  const queryClient = useQueryClient();
  return useMutation(
    (NewPost: UserDetailsType) =>
      axios.post(
        `https://gorest.co.in/public/v2/users/${NewPost.id}`,
        NewPost,
        {
          headers: {
            Authorization:
              "Bearer 6b204f150fab8a67c4999209fc8a26bd41c529119ba85157f6884f2a52870926",
          },
        }
      ),
    {
      onError(error) {
        console.log("Error occured", error);
      },
      onSuccess: () => {
        console.log("New Post successfuly posted");
        queryClient.invalidateQueries([QUERY_KEYS.GET_A_USER, NewUser.id]);
      },
    }
  );
};
