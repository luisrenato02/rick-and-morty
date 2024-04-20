"use client";
import { useQuery } from "@tanstack/react-query";
import { useCharacters } from "../hooks/useCharacters";
import { useState } from "react";
import { CardCharacter } from "../Components/CardCharacter";
import { Character } from "../interfaces/character";
import * as S from "./styles";

export default function Characters() {
  const [page, setPage] = useState(`https://rickandmortyapi.com/api/character`);
  const { getCharacters, nextPage, prevPage } = useCharacters(page);

  const { data } = useQuery({
    queryKey: [page],
    queryFn: () => getCharacters(),
  });

  return (
    <S.Wrapper>
      <S.GroupCards>
        {data &&
          data.results.map((character: Character) => (
            <S.Box key={character.id}>
              <CardCharacter character={character} />
            </S.Box>
          ))}
      </S.GroupCards>
      <S.GroupButtons>
        <S.Button onClick={() => nextPage && setPage(nextPage)}>Next</S.Button>
        <S.Button onClick={() => prevPage && setPage(prevPage)}>Prev</S.Button>
      </S.GroupButtons>
    </S.Wrapper>
  );
}
