import { useMutation, useQueryClient } from "react-query";
import { PostDetailsType } from "../../Type/type";
import axios from "axios";
import { QUERY_KEYS } from "../queryKeys";
import { axiosInstance } from "../axiosInstance";

export const useSetPosts = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (newPost: PostDetailsType) =>
      axiosInstance.post(`/users/${newPost.user_id}/posts`, newPost),
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
