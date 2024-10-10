import { useQuery } from "react-query";
import { QUERY_KEYS } from "../queryKeys";
import axios from "axios";
import { axiosInstance } from "../axiosInstance";

export const useGetPosts = () => {
  return useQuery(
    [QUERY_KEYS.GET_ALL_POSTS],
    async () => {
      const response = await axiosInstance.get("/posts");
      return response.data;
    },
    {
      onError: () => {
        console.log("Error while fetching data");
      },
      onSuccess: () => {
        console.log("Posts succesfuly fetched");
      },
    }
  );
};
