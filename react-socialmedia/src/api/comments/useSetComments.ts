import { useMutation, useQueryClient } from "react-query";
import { CommentsDetailsType, PostDetailsType } from "../../Type/type";
import axios from "axios";
import { QUERY_KEYS } from "../queryKeys";

export const useSetComments = (PostDetails: PostDetailsType) => {
  const queryClient = useQueryClient();
  return useMutation(
    (NewPost: CommentsDetailsType) =>
      axios.post(
        `https://gorest.co.in/public/v2/posts/${PostDetails.id}/comments`,
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
        console.log("Comment successfuly posted");
        queryClient.invalidateQueries([
          QUERY_KEYS.GET_ALL_POSTS,
          PostDetails.id,
        ]);
      },
    }
  );
};
