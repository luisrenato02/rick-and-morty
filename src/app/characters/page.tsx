"use client";
import { useQuery } from "@tanstack/react-query";
import { useCharacters } from "../hooks/useCharacters";
import { useState } from "react";
import { CardCharacter } from "../Components/CardCharacter";
import { Character } from "../interfaces/character";
import * as S from "./styles";
import LoadingScreen from "../Components/Loader";
import { BtnPrevNext } from "../Components/BtnPrevNext";
import { Title } from "../Components/Titles";
import { Navbar } from "../Components/Navbar";

export default function Characters() {
  const [page, setPage] = useState(`https://rickandmortyapi.com/api/character`);

  const { getCharacters, nextPage, prevPage } = useCharacters(page);

  const { data, isLoading } = useQuery({
    queryKey: [page],
    queryFn: () => getCharacters(),
  });
  const pageNumber = (url: string) => {
    var indiceIgual = url.indexOf("=");
    if (indiceIgual !== -1) {
      return url.substring(indiceIgual + 1);
    } else {
      return "";
    }
  };
  return isLoading ? (
    <LoadingScreen />
  ) : (
    <>
      <Navbar />
      <S.Wrapper>
        <Title
          title="Characters"
          page={pageNumber(page)}
          totalpage={String(data?.info?.pages) ?? "0"}
        />
        <S.GroupCards>
          {data &&
            data.results.map((character: Character) => (
              <S.Box key={character?.id}>
                <CardCharacter character={character} />
              </S.Box>
            ))}
        </S.GroupCards>
        <BtnPrevNext
          prevPage={prevPage}
          nextPage={nextPage}
          setPage={setPage}
          page={pageNumber(page)}
          totalPage={String(data?.info?.pages)}
        />
      </S.Wrapper>
    </>
  );
}
