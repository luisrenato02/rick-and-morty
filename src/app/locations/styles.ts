import localFont from "next/font/local";
import styled from "styled-components";
const geo_regular = localFont({
  src: "../assets/Geo-Regular.ttf",
});
export const Wrapper = styled.div`
  display: flex;
  margin-top: 83px;
  flex-direction: column;
  gap: 5rem;
  padding: 0rem 5rem 5rem 5rem;
`;
export const GroupCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 3rem;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid #1da0ba;
  color: #f5f5f5;
  font-family: ${geo_regular.style.fontFamily};
  font-size: 20px;
  @media (max-width: 700px) {
    width: 255px;
  }
`;
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  color: #f5f5f5;
  font-family: ${geo_regular.style.fontFamily};
  font-size: 20px;
`;

export const GroupImgs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 0.25rem;
  overflow-y: auto;
  max-height: 520px;
`;
