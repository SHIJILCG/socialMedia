import { useMutation, useQueryClient } from "react-query";
import { CommentsDetailsType} from "../../Type/type";
import { QUERY_KEYS } from "../queryKeys";
import { axiosInstance } from "../axiosInstance";

export const useSetComments = (PostDetails: number) => {
  const queryClient = useQueryClient();

  return useMutation(
    (newComment: CommentsDetailsType) =>
      axiosInstance.post(`/posts/${PostDetails}/comments`, newComment),
    {
      onError(error) {
        console.log("Error occured", error);
      },
      onSuccess: () => {
        console.log("Comment successfuly posted");
        queryClient.invalidateQueries([QUERY_KEYS.GET_ALL_POSTS, PostDetails]);
      },
    }
  );
};
