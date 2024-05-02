"use client";
import Image from "next/image";
import Link from "next/link";
import github from "@/../public/github.svg";
import linkedin from "@/../public/linkedin.svg";
import youtube from "@/../public/youtube.svg";
import instagram from "@/../public/instagram.svg";
import * as S from "./styles";

export const Footer = () => {
  return (
    <S.Footer>
      By Luís Renato Toniati
      <S.Ul>
        <li>
          <Link target="_blank" href="https://github.com/luisrenato02">
            <Image width={40} height={40} src={github} alt={"github"} />
          </Link>
        </li>

        <li>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/luis-renato-toniati/"
          >
            <Image width={40} height={40} src={linkedin} alt={"linkedin"} />
          </Link>
        </li>

        <li>
          <Link
            target="_blank"
            href="https://www.youtube.com/channel/UCRIGOkjzdhKJqWR0T5YxZ3Q"
          >
            <Image width={40} height={40} src={youtube} alt={"youtube"} />
          </Link>
        </li>
        <li>
          <Link target="_blank" href="https://www.instagram.com/luistoniati02">
            <Image width={40} height={40} src={instagram} alt={"instagram"} />
          </Link>
        </li>
      </S.Ul>
    </S.Footer>
  );
};
