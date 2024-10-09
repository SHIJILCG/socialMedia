import { useMutation, useQueryClient } from "react-query";
import { PostDetailsType} from "../../Type/type";
import axios from "axios";
import { QUERY_KEYS } from "../queryKeys";

export const useSetPosts = () => {
  const queryClient = useQueryClient();
  return useMutation(
    [QUERY_KEYS.GET_ALL_POSTS],
    (newPost: PostDetailsType) =>
      axios.post(
        `https://gorest.co.in/public/v2/users/${newPost.user_id}/posts`,
        newPost,
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
        queryClient.invalidateQueries([QUERY_KEYS.GET_ALL_POSTS]);
      },
    }
  );
};
