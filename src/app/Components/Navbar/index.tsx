import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/logo.svg";
import hamburguer from "@/../public/hamburguer.svg";
import * as S from "./styles";
import { useState } from "react";
import { Modal } from "../Modal";

export const Navbar = () => {
  var wm = window.matchMedia("(max-width: 768px)");
  const [openModal, setOpenModal] = useState(false);
  return (
    <S.Navbar>
      <Link href="/">
        <Image width={60} height={60} src={logo} alt={"home"} />
      </Link>
      {wm.matches ? (
        <S.Hamburg onClick={() => setOpenModal(true)}>
          <Image width={30} height={30} src={hamburguer} alt={"home"} />
        </S.Hamburg>
      ) : (
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
      )}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <S.WrapperModal>
          <Link href="/" onClick={() => setOpenModal(false)}>
            <p>Home</p>
          </Link>
          <Link href="/characters" onClick={() => setOpenModal(false)}>
            <p>Characters</p>
          </Link>
          <Link href="/episodes" onClick={() => setOpenModal(false)}>
            <p>Episodes</p>
          </Link>
          <Link href="/locations" onClick={() => setOpenModal(false)}>
            <p>Locations</p>
          </Link>
        </S.WrapperModal>
      </Modal>
    </S.Navbar>
  );
};
