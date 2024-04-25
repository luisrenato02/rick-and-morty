"use client";
import * as S from "./styles";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useEpisodes } from "../hooks/useEpisodes";
import LoadingScreen from "../Components/Loader";
import { Title } from "../Components/Titles";
import { BtnPrevNext } from "../Components/BtnPrevNext";
import { Navbar } from "../Components/Navbar";

export default function Episodes() {
  const [page, setPage] = useState(`https://rickandmortyapi.com/api/episode`);
  const { getEpisodes, prevPage, nextPage } = useEpisodes(page);
  const { data, isLoading } = useQuery({
    queryKey: [page],
    queryFn: () => getEpisodes(),
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
          title="Episodes"
          page={pageNumber(page)}
          totalpage={String(data.info.pages)}
        />
        <S.GroupCards>
          {data &&
            data.results.map((episode: any) => (
              <S.Card key={episode.id}>
                <h3>{episode.id}</h3>
                <p>{episode.name}</p>
                <p>{episode.episode}</p>
                <p>{episode.air_date}</p>
              </S.Card>
            ))}
        </S.GroupCards>
        <BtnPrevNext
          prevPage={prevPage}
          nextPage={nextPage}
          setPage={setPage}
          page={pageNumber(page)}
          totalPage={String(data.info.pages)}
        />
      </S.Wrapper>
    </>
  );
}
