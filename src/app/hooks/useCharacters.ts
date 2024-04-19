import { useAxiosContext } from "./useAxios";

export const useCharacters = () => {
  const axios = useAxiosContext("character");

  const getCharacters = async () => {
    try {
      const response = await axios.get("/");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return { getCharacters };
};
