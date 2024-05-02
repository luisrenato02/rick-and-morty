import { useState } from "react";
import { useAxiosContext } from "./useAxios";

export const useLocations = (page: string) => {
  const axios = useAxiosContext("location");
  const [nextpage, setnextpage] = useState("");
  const [prevpage, setprevpage] = useState("");
  const [characters, setCharacters] = useState<any[]>([]);

  const getLocations = async () => {
    try {
      const response = await axios.get(page);
      setprevpage(response.data.info.prev);
      setnextpage(response.data.info.next);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  const getCharactersImg = async (locations: string[]) => {
    locations.map(async (location) => {
      try {
        const response = await axios.get(location);
        setCharacters((prev: any) => [...prev, response.data]);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    });
    setCharacters([]);
    return characters;
  };

  return { getLocations, getCharactersImg, nextpage, prevpage, characters };
};
