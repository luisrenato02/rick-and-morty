import styled, { css } from "styled-components";
export interface ModalProps {
  open: boolean;
}
export interface ModalCard {
  card: boolean;
}

export const Modal = styled.div<ModalProps>`
  ${({ open }) => css`
    background-size: cover;
    background-position: center;
    display: flex;
    border: 1px solid #1da0ba;
    justify-content: center;
    align-items: center;
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
export const Close = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  cursor: pointer;
  img {
    border-radius: 100%;
  }
  :active {
    background-color: #1da0ba;
  }
`;

export const ModalWrapper = styled.div<ModalCard>`
  ${({ card }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    color: #f5f5f5;
    font-size: 20px;
    @media (max-width: 700px) {
      width: ${card ? "100%" : "90vw"};
      height: ${card ? "100%" : "90vh"};
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
