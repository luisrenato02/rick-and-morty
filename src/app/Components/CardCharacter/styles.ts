import localFont from "next/font/local";
import styled, { css } from "styled-components";
const geo_regular = localFont({
  src: "../../assets/Geo-Regular.ttf",
});
import Image from "next/image";
interface StatusProps {
  status: string;
}

export const Card = styled.div`
  height: 100%;
  box-shadow: rgba(29, 160, 186, 0.4) 0px 2px 4px,
    rgba(29, 160, 186, 0.3) 0px 7px 13px -3px,
    rgba(29, 160, 186, 0.2) 0px -3px 0px inset;

  display: flex;
  background-color: #1c1f2b;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  gap: 1rem;
  padding: 0.5rem;
  max-width: 250px;
`;
export const Infos = styled.div`
  gap: 0.5rem;
  display: flex;
  background-color: #1c1f2b;
  flex-direction: column;
  align-items: start;
  width: 100%;

  p {
    background-color: #1c1f2b;
    font-family: ${geo_regular.style.fontFamily};
    font-size: 20px;
    color: #f5f5f5;
    text-transform: uppercase;
  }
  h4 {
    font-size: 26px;
    background-color: #1c1f2b;
    font-family: ${geo_regular.style.fontFamily};
    color: #f5f5f5;
    text-transform: uppercase;
  }
`;
export const Status = styled.div<StatusProps>`
  ${({ status }) => css`
    margin-left: 5px;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: ${status === "Alive"
      ? "#12c412"
      : status === "Dead"
      ? "#ff0000"
      : "#808080"};
  `}
`;
export const DivGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  gap: 2rem;
  background-color: transparent;
  align-items: center;
`;

export const StyledImage = styled(Image)`
  width: 25px;
  height: 25px;
  background-color: transparent;
`;
