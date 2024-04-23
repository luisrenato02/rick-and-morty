import { Character } from "@/app/interfaces/character";
import Image from "next/image";
import * as S from "./styles";
import location from "@/../public/location.png";
import nasc from "@/../public/nasc.png";
import male from "@/../public/male.png";
import female from "@/../public/female.png";

interface CardCharacterProps {
  character: Character;
}
export const CardCharacter = (character: CardCharacterProps) => {
  return (
    <S.Card>
      <Image
        src={character.character.image}
        alt={character.character.name}
        width={230}
        height={230}
      />
      <S.Infos>
        <h4> {character.character.name && character.character.name}</h4>
        <p>
          Specie: {character.character.species && character.character.species}
        </p>
        <S.DivGroup>
          <S.Status
            status={character.character.status && character.character.status}
          />
          <p>{character.character.status && character.character.status}</p>
        </S.DivGroup>

        <S.DivGroup>
          <S.StyledImage
            src={location}
            alt={"location"}
            width={25}
            height={25}
          />
          <p>
            {character.character.location.name &&
              character.character.location.name}
          </p>
        </S.DivGroup>
        <S.DivGroup>
          <S.StyledImage src={nasc} alt={"birth"} width={25} height={25} />
          <p>
            {character.character.origin.name && character.character.origin.name}
          </p>
        </S.DivGroup>

        <S.DivGroup>
          <S.StyledImage
            src={character.character.gender === "Male" ? male : female}
            alt={"birth"}
            width={25}
            height={25}
          />
          <p>{character.character.gender && character.character.gender}</p>
        </S.DivGroup>
      </S.Infos>
    </S.Card>
  );
};
