import { Character } from "@/app/interfaces/character";
import Image from "next/image";
import * as S from "./styles";
import info from "../../../../public/info.png";

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
        <p>{character.character.name && character.character.name}</p>
        <p>{character.character.species && character.character.species}</p>
        <p>{character.character.status && character.character.status}</p>
        <p>
          {character.character.location.name &&
            character.character.location.name}
        </p>
        <p>
          {character.character.origin.name && character.character.origin.name}
        </p>
        <p>{character.character.gender && character.character.gender}</p>
      </S.Infos>
    </S.Card>
  );
};
