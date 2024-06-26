import { useState } from "react";
import { useAxiosContext } from "./useAxios";
import { Character } from "../interfaces/character";

export const useEpisodes = (page: string) => {
  const axios = useAxiosContext("episode");
  const [nextpage, setnextpage] = useState("");
  const [prevpage, setprevpage] = useState("");
  const [characters, setCharacters] = useState<any[]>([]);

  const getEpisodes = async () => {
    try {
      const response = await axios.get(page);
      setprevpage(response.data.info.prev);
      setnextpage(response.data.info.next);
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

  return { getEpisodes, getCharactersImg, nextpage, prevpage, characters };
};
