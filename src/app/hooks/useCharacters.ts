import { useState } from "react";
import { useAxiosContext } from "./useAxios";

export const useCharacters = (page: string) => {
  const axios = useAxiosContext("character");
  const [nextpage, setnextpage] = useState("");
  const [prevpage, setprevpage] = useState("");

  const getCharacters = async () => {
    try {
      const response = await axios.get(page);
      setprevpage(response.data.info.prev);
      setnextpage(response.data.info.next);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return { getCharacters, nextpage, prevpage };
};
