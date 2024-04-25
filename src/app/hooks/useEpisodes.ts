import { useState } from "react";
import { useAxiosContext } from "./useAxios";
import { Character } from "../interfaces/character";

export const useEpisodes = (page: string) => {
  const axios = useAxiosContext("episode");
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");
  const [characters, setCharacters] = useState<any[]>([]);

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
  const getCharactersImg = async (episodes: string[]) => {
    episodes.map(async (episode) => {
      try {
        const response = await axios.get(episode);
        setCharacters((prev: any) => [...prev, response.data]);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    });
    setCharacters([]);
    return characters;
  };

  return { getEpisodes, getCharactersImg, nextPage, prevPage, characters };
};
