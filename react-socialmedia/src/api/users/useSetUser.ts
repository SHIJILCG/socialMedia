import { useMutation, useQueryClient } from "react-query";
import { UserDetailsType } from "../../Type/type";
import { QUERY_KEYS } from "../queryKeys";
import { axiosInstance } from "../axiosInstance";

export const useSetUser = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (newUser: UserDetailsType) => axiosInstance.post(`/users`, newUser),
    {
      onError(error) {
        console.log("Error occured", error);
      },
      onSuccess: () => {
        console.log("New User successfuly posted");
        queryClient.invalidateQueries(QUERY_KEYS.GET_ALL_USERS);
      },
    }
  );
};
