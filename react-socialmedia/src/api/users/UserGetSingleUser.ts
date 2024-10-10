import { useQuery } from "react-query";
import { QUERY_KEYS } from "../queryKeys";
import { axiosInstance } from "../axiosInstance";

export const useGetSingleUsers = (userId: number) => {
  return useQuery(
    [QUERY_KEYS.GET_A_USER, userId],
    async () => {
      const response = await axiosInstance.get(`/users/${userId}`);
      return response.data;
    },
    {
      onError: () => {
        console.log("Error while fetching the user");
      },
      onSuccess: () => {
        console.log("Successfully fetched the user");
      },
    }
  );
};
