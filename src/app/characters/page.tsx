"use client";
import { useQuery } from "@tanstack/react-query";
import { useCharacters } from "../hooks/useCharacters";
import { useState } from "react";

export default function Characters() {
  const [page, setPage] = useState(`https://rickandmortyapi.com/api/character`);
  const { getCharacters, nextPage, prevPage } = useCharacters(page);

  const { data } = useQuery({
    queryKey: [page],
    queryFn: () => getCharacters(),
  });

  return (
    <>
      <button onClick={() => nextPage && setPage(nextPage)}>Next</button>
      <button onClick={() => prevPage && setPage(prevPage)}>Prev</button>
    </>
  );
}
