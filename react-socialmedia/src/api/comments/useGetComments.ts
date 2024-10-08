import { useQuery } from "react-query";
import { QUERY_KEYS } from "../queryKeys";
import axios from "axios";

export const useGetPostComments = (postId: number) => {
  return useQuery(
    [QUERY_KEYS.GET_ALL_POST_COMMENTS, postId],
    async () => {
      const response = await axios.get(
        `https://gorest.co.in/public/v2/posts/${postId}/comments`
      );
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
