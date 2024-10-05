import { useQuery } from "react-query";
import { QUERY_KEYS } from "../queryKeys";
import axios from "axios";

export const useGetComments = () => {
  return useQuery(QUERY_KEYS.GET_ALL_USERS, async () => {
    const response = await axios.get("https://gorest.co.in/public/v2/comments");
    return response.data;
  });
};
