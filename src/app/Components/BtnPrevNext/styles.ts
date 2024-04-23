import localFont from "next/font/local";
import styled, { css } from "styled-components";
const geo_regular = localFont({
  src: "../../assets/Geo-Regular.ttf",
});
interface BtnProps {
  nextPage: string;
  prevPage: string;

  type: "next" | "prev";
}
export const GroupButtons = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 5px;
  font-family: ${geo_regular.style.fontFamily};

  :active {
    background-color: #147082;
    color: #ababab;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    background-color: #1da0ba;
    color: #f5f5f5;
    padding: 10px;
    border-radius: 10px;
  }
`;

export const Button = styled.div<BtnProps>`
  ${({ nextPage, prevPage, type }) => css`
    display: flex;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
    background-color: ${type === "prev"
      ? prevPage === null
        ? "gray"
        : "#1da0ba"
      : nextPage === null
      ? "gray"
      : "#1da0ba"};
    color: #f5f5f5;
  `}
`;
