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
import { Character, initialCharacter } from "../interfaces/character";
import { CardCharacter } from "../Components/CardCharacter";
import close from "@/../public/close.svg";
import { Location } from "../interfaces/location";
import Image from "next/image";

export default function Locations() {
  const [page, setPage] = useState(`https://rickandmortyapi.com/api/location`);
  const [openModal, setOpenModal] = useState(false);
  const [location, setLocation] = useState<Location>();
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
    queryKey: [location?.residents],
    queryFn: () => getCharactersImg(location?.residents || []),
  });

  const pageNumber = (url: string) => {
    var indiceIgual = url.indexOf("=");
    if (indiceIgual !== -1) {
      return url.substring(indiceIgual + 1);
    } else {
      return "";
    }
  };

  const openModalEpisode = (location: Location) => {
    setLocation(location);
    setOpenModal(true);
  };

  return isLoading && isLoadingImg ? (
    <LoadingScreen />
  ) : (
    <>
      <S.Wrapper>
        <Title
          title="Locations"
          page={pageNumber(page)}
          totalpage={String(data?.info?.pages) ?? 0}
        />
        <S.GroupCards>
          {data &&
            data.results.map((location: Location) => (
              <S.Card
                key={location.id}
                onClick={() => openModalEpisode(location)}
              >
                <h3>{location.id}</h3>
                <p>{location.name}</p>
                <p>{location.dimension}</p>
                <p>{location.type}</p>
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
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          card={"false"}
        >
          <S.ModalContent>
            <h1>{location?.name}</h1>
            <p>Dimension: {location?.dimension}</p>
            <p>Type: {location?.type}</p>
            {characters.length === 0 ? <p>No residents</p> : <p>Residents</p>}
            <S.GroupImgs>
              {characters.map((character: any) => (
                <Image
                  onClick={() => {
                    openModalChar
                      ? setOpenModalChar(false)
                      : setOpenModalChar(true),
                      setCharacterModal(character ?? {});
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
        <Modal
          open={openModalChar}
          onClose={() => setOpenModalChar(false)}
          card={"true"}
        >
          <CardCharacter character={characterModal} />
        </Modal>
      </S.Wrapper>
    </>
  );
}
