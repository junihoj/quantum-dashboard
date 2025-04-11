import axios from "axios";
import { apiUrl } from "@/constants";
import { TApiService } from "@/types";
import { error } from "console";

const globalAxios = axios.create({
  baseURL: apiUrl,
});

// globalAxios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     console.error("API request error:", error);
//     return Promise.reject(error);
//   }
// );

globalAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);
const defaultHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const apiService: TApiService = ({
  url,
  method = "get",
  data,
  headers = defaultHeaders,
  otherConfig = {},
}) => {
  return globalAxios({
    url,
    method,
    data,
    headers,
    ...otherConfig,
  });
};
