import { useQuery } from "react-query";
import { QUERY_KEYS } from "../queryKeys";
import { axiosInstance } from "../axiosInstance";

export const useGetPostComments = (postId: number) => {
  return useQuery(
    [QUERY_KEYS.GET_ALL_POST_COMMENTS, postId],
    async () => {
      const response = await axiosInstance.get(`/posts/${postId}/comments`);
      return response.data;
    },
    {
      onError: () => {
        console.log("Error while fetching");
      },
      onSuccess: () => {
        console.log("Succesfuly fetched Post Comments");
      },
    }
  );
};
