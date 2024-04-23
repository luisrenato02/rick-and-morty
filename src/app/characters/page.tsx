"use client";
import { useQuery } from "@tanstack/react-query";
import { useCharacters } from "../hooks/useCharacters";
import { useState } from "react";
import { CardCharacter } from "../Components/CardCharacter";
import { Character } from "../interfaces/character";
import * as S from "./styles";
import Image from "next/image";
import loading from "../../../public/loader.json";
import LoadingScreen from "../Components/Loader";

export default function Characters() {
  const [page, setPage] = useState(`https://rickandmortyapi.com/api/character`);
  const { getCharacters, nextPage, prevPage } = useCharacters(page);

  const { data, isLoading } = useQuery({
    queryKey: [page],
    queryFn: () => getCharacters(),
  });

  const pageNumber = (url: string) => {
    // Encontra a posição do caractere "=" na string
    var indiceIgual = url.indexOf("=");

    // Verifica se o caractere "=" foi encontrado na string
    if (indiceIgual !== -1) {
      // Retorna a substring começando após o caractere "="
      return url.substring(indiceIgual + 1);
    } else {
      // Retorna uma string vazia se o caractere "=" não for encontrado
      return "";
    }
  };

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <>
      <S.Wrapper>
        <S.Title>
          <h1>CHARACTERS</h1>
          <h1>
            PAGE {pageNumber(page)} FROM {data.info.pages}
          </h1>
        </S.Title>
        <S.GroupCards>
          {data &&
            data.results.map((character: Character) => (
              <S.Box key={character.id}>
                <CardCharacter character={character} />
              </S.Box>
            ))}
        </S.GroupCards>
        <S.GroupButtons>
          <S.Button onClick={() => prevPage && setPage(prevPage)}>
            Prev
          </S.Button>
          <S.Button onClick={() => nextPage && setPage(nextPage)}>
            Next
          </S.Button>
        </S.GroupButtons>
      </S.Wrapper>
    </>
  );
}
