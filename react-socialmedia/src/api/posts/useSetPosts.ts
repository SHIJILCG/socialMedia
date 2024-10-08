import { useMutation, useQueryClient } from "react-query";
import { PostDetailsType, UserDetailsType } from "../../Type/type";
import axios from "axios";
import { QUERY_KEYS } from "../queryKeys";

export const useSetPosts = (currentUser: UserDetailsType) => {
  const queryClient = useQueryClient();
  return useMutation(
    (NewPost: PostDetailsType) =>
      axios.post(
        `https://gorest.co.in/public/v2/users/${currentUser.id}/posts`,
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
        queryClient.invalidateQueries([
          QUERY_KEYS.GET_ALL_USER_POSTS,
          currentUser.id,
        ]);
      },
    }
  );
};
