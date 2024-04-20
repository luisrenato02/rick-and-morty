import localFont from "next/font/local";
import styled from "styled-components";
const geo_regular = localFont({
  src: "../../assets/Geo-Regular.ttf",
});

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
`;
