import { useQuery } from "react-query";
import { QUERY_KEYS } from "../queryKeys";
import axios from "axios";

export const useGetPosts = () => {
  return useQuery(QUERY_KEYS.GET_ALL_POSTS, async () => {
    const response = await axios.get("https://gorest.co.in/public/v2/posts");
    return response.data;
  });
};
