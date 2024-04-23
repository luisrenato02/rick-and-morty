import { useState } from "react";
import { useAxiosContext } from "./useAxios";

export const useEpisodes = (page: string) => {
  const axios = useAxiosContext("episode");
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");

  const getEpisodes = async () => {
    try {
      const response = await axios.get(page);
      setPrevPage(response.data.info.prev);
      setNextPage(response.data.info.next);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return { getEpisodes, nextPage, prevPage };
};
