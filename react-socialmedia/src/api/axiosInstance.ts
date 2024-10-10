import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://gorest.co.in/public/v2",
    headers: {
      Authorization: "Bearer 3108bc713e9b6e9023d3e8f1f33a0f986f19acb2af8c9fc9a618f9307968d329",
    },
  });