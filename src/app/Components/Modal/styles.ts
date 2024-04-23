import styled, { css } from "styled-components";
export interface ModalProps {
  open: boolean;
}

export const Modal = styled.div<ModalProps>`
  ${({ open }) => css`
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 500px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    animation: fadeIn 0.5s forwards;
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `}
`;
export const Background = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  backdrop-filter: blur(10px);
  background-color: rgb(0, 0, 0, 0.5);
  z-index: 9;
  animation: fadeIn 0.5s forwards;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;