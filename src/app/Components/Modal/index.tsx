import * as S from "./styles";
import Image from "next/image";
import close from "@/../public/close.svg";
export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}
export const Modal = ({ open, children, onClose }: ModalProps) => {
  return open ? (
    <>
      <S.Background onClick={() => onClose()}></S.Background>
      <S.Modal open={open}>
        <S.ModalContentChar>
          <S.Close onClick={() => onClose()}>
            <Image src={close} alt={"close"} width={30} height={30} />
          </S.Close>
          {children}
        </S.ModalContentChar>
      </S.Modal>
    </>
  ) : (
    <></>
  );
};
