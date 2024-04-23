import * as S from "./styles";
export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}
export const Modal = ({ open, children, onClose }: ModalProps) => {
  return open ? (
    <>
      <S.Background onClick={() => onClose()}></S.Background>
      <S.Modal open={open}>{children}</S.Modal>
    </>
  ) : (
    <></>
  );
};
