import { useQuery } from "react-query";
import { QUERY_KEYS } from "../queryKeys";
import axios from "axios";

export const useGetUsers = () => {
  return useQuery(
    [QUERY_KEYS.GET_ALL_USERS],
    async () => {
      const response = await axios.get("https://gorest.co.in/public/v2/users", {
        headers: {
          Authorization:
            "Bearer 6b204f150fab8a67c4999209fc8a26bd41c529119ba85157f6884f2a52870926",
        },
      });
      return response.data;
    },
    {
      onError: () => {
        console.log("Error while fetching");
      },
      onSuccess: () => {
        console.log("Succesfuly fetched all users");
      },
    }
  );
};
