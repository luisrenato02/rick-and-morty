import { Character } from "@/app/interfaces/character";
import Image from "next/image";
import * as S from "./styles";
import location from "@/../public/location.png";
import nasc from "@/../public/nasc.png";
import male from "@/../public/male.png";
import female from "@/../public/female.png";
import { useState } from "react";

interface CardCharacterProps {
  character: Character;
}
export const CardCharacter = ({ character }: CardCharacterProps) => {
  const [openInfo, setOpenInfo] = useState(false);
  return (
    <S.Card onClick={() => setOpenInfo(!openInfo)}>
      <Image
        src={character.image}
        alt={character.name}
        width={230}
        height={230}
      />
      <S.Infos>
        <h4> {character.name && character.name}</h4>
        <p>Specie: {character.species && character.species}</p>
        <S.DivGroup>
          <S.Status status={character.status && character.status} />
          <p>{character.status && character.status}</p>
        </S.DivGroup>

        <S.DivGroup>
          <S.StyledImage
            src={location}
            alt={"location"}
            width={25}
            height={25}
          />
          <p>{character.location.name && character.location.name}</p>
        </S.DivGroup>
        <S.DivGroup>
          <S.StyledImage src={nasc} alt={"birth"} width={25} height={25} />
          <p>{character.origin.name && character.origin.name}</p>
        </S.DivGroup>

        <S.DivGroup>
          <S.StyledImage
            src={character.gender === "Male" ? male : female}
            alt={"birth"}
            width={25}
            height={25}
          />
          <p>{character.gender && character.gender}</p>
        </S.DivGroup>
        <S.MoreInfo>
          {openInfo &&
            character.episode.map((ep) => (
              <p key={character.id}>EP{ep.match(/\d+/g)}</p>
            ))}
        </S.MoreInfo>
      </S.Infos>
    </S.Card>
  );
};
<S.MoreInfo></S.MoreInfo>;
