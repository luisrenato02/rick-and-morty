"use client";
import * as S from "./styles";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useEpisodes } from "../hooks/useEpisodes";
import LoadingScreen from "../Components/Loader";
import { Title } from "../Components/Titles";
import { BtnPrevNext } from "../Components/BtnPrevNext";
import { Navbar } from "../Components/Navbar";
import { Modal } from "../Components/Modal";
import { Episode } from "../interfaces/episodes";
import Image from "next/image";
import { Character, initialCharacter } from "../interfaces/character";
import { CardCharacter } from "../Components/CardCharacter";
import close from "@/../public/close.svg";

export default function Episodes() {
  const [page, setPage] = useState(`https://rickandmortyapi.com/api/episode`);
  const [openModal, setOpenModal] = useState(false);
  const [episode, setEpisode] = useState<Episode>();
  const [openModalChar, setOpenModalChar] = useState(false);
  const [characterModal, setCharacterModal] =
    useState<Character>(initialCharacter);
  const { getEpisodes, prevpage, nextpage, getCharactersImg, characters } =
    useEpisodes(page);
  const { data, isLoading } = useQuery({
    queryKey: [page],
    queryFn: () => getEpisodes(),
  });

  const { isLoading: isLoadingImg } = useQuery({
    queryKey: [episode?.characters],
    queryFn: () => getCharactersImg(episode?.characters || []),
  });

  const pageNumber = (url: string) => {
    var indiceIgual = url.indexOf("=");
    if (indiceIgual !== -1) {
      return url.substring(indiceIgual + 1);
    } else {
      return "";
    }
  };

  const openModalEpisode = (episode: Episode) => {
    setEpisode(episode);
    setOpenModal(true);
  };

  return isLoading && isLoadingImg ? (
    <LoadingScreen />
  ) : (
    <>
      <Navbar />
      <S.Wrapper>
        <Title
          title="Episodes"
          page={pageNumber(page)}
          totalpage={String(data?.info?.pages) ?? 0}
        />
        <S.GroupCards>
          {data &&
            data.results.map((episode: any) => (
              <S.Card
                key={episode.id}
                onClick={() => openModalEpisode(episode)}
              >
                <h3>{episode.id}</h3>
                <p>{episode.name}</p>
                <p>{episode.episode}</p>
                <p>{episode.air_date}</p>
              </S.Card>
            ))}
        </S.GroupCards>
        <BtnPrevNext
          prevpage={prevpage}
          nextpage={nextpage}
          setPage={setPage}
          page={pageNumber(page)}
          totalPage={String(data?.info?.pages)}
        />
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <S.ModalContent>
            <h1>{episode?.name}</h1>
            <p>{episode?.episode}</p>
            <p>{episode?.air_date}</p>
            <S.GroupImgs>
              {characters.map((character: any) => (
                <Image
                  onClick={() => {
                    setOpenModalChar(true), setCharacterModal(character ?? {});
                  }}
                  key={character?.id}
                  src={character?.image}
                  alt={character?.name}
                  width={100}
                  height={100}
                />
              ))}
            </S.GroupImgs>
          </S.ModalContent>
        </Modal>
        <Modal open={openModalChar} onClose={() => setOpenModalChar(false)}>
          <CardCharacter character={characterModal} />
        </Modal>
      </S.Wrapper>
    </>
  );
}
