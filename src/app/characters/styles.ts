import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
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

export const Box = styled.div`
  :hover {
    cursor: pointer;
    box-shadow: 0 0 0 0;
  }
`;
