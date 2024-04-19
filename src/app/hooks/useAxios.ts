import Axios, { AxiosInstance } from "axios";

export const useAxiosContext = (type: string): AxiosInstance => {
  const apiUrl = "https://rickandmortyapi.com/api";

  const axios = Axios.create({
    baseURL: apiUrl + "/" + type,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return axios;
};
