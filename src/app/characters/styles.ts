import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 5rem;
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
export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 50px;
  background-color: #1da0ba;
`;
export const GroupButtons = styled.div`
  display: flex;
  justify-content: space-around;
`;
