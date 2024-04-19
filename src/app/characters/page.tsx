"use client";
import { useQuery } from "@tanstack/react-query";
import { useCharacters } from "../hooks/useCharacters";

export default function Characters() {
  const { getCharacters } = useCharacters();

  const { data } = useQuery({
    queryKey: ["characters"],
    queryFn: () => getCharacters(),
  });

  console.log(data);

  return <>characters</>;
}
