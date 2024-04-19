"use client";
import * as S from "./styles";
import logo from "../../../../public/RMHome.png";
import Link from "next/link";
export const Home = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.StyledImage src={logo} alt="Rick and Morty" />
        <h1>Rick and Morty Curious</h1>
        <h3>Click here to view</h3>
        <S.Group>
          <Link href={"characters"}>
            <S.Button>Characters</S.Button>
          </Link>
          <Link href={"episodes"}>
            <S.Button>Episodes</S.Button>
          </Link>
          <Link href={"locations"}>
            <S.Button>Locations</S.Button>
          </Link>
        </S.Group>
      </S.Container>
    </S.Wrapper>
  );
};
