import { useQuery } from "react-query";
import { QUERY_KEYS } from "../queryKeys";
import axios from "axios";

export const useGetPostComments = (postId: number) => {
  return useQuery(
    [QUERY_KEYS.GET_ALL_POST_COMMENTS, postId],
    async () => {
      const response = await axios.get(
        `https://gorest.co.in/public/v2/posts/${postId}/comments`,
        {
          headers: {
            Authorization:
              "Bearer 6b204f150fab8a67c4999209fc8a26bd41c529119ba85157f6884f2a52870926",
          },
        }
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
