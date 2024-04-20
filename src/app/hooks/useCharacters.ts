import { useState } from "react";
import { useAxiosContext } from "./useAxios";

export const useCharacters = (page: string) => {
  const axios = useAxiosContext("character");
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");

  const getCharacters = async () => {
    try {
      const response = await axios.get(page);
      setPrevPage(response.data.info.prev);
      setNextPage(response.data.info.next);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return { getCharacters, nextPage, prevPage };
};
