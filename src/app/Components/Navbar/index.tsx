import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/logo.svg";
import * as S from "./styles";

export const Navbar = () => {
  return (
    <S.Navbar>
      <Link href="/">
        <Image width={60} height={60} src={logo} alt={"home"} />
      </Link>

      <S.Ul>
        <Link href="/characters">
          <li>Characters</li>
        </Link>
        <Link href="/episodes">
          <li>Episodes</li>
        </Link>
        <Link href="/locations">
          <li>Locations</li>
        </Link>
      </S.Ul>
    </S.Navbar>
  );
};
