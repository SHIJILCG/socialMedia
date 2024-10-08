import { useQuery } from "react-query";
import { QUERY_KEYS } from "../queryKeys";
import { axiosInstance } from "../axiosInstance";

export const useGetUsers = () => {
  return useQuery(
    [QUERY_KEYS.GET_ALL_USERS],
    async () => {
      const response = await axiosInstance.get("/users");
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
