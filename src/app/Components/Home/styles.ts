import styled from "styled-components";
import Image from "next/image";
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: #1da0ba;
    font-size: 3rem;
    text-shadow: 1px 1px #63cc45, -1px -1px #63cc45, 1px -1px #63cc45,
      -1px 1px #63cc45;

    @media (max-width: 768px) {
      font-size: 2.3rem;
    }
  }

  h3 {
    color: #f5f5f5;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
`;
export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f5f5f5;
  color: #f5f5f5;
  width: 200px;
  height: 50px;

  @media (max-width: 768px) {
    width: 100px;
  }
`;

export const Group = styled.div`
  display: flex;
  gap: 2rem;

  :hover {
    transform: scale(1.2);
    transition: 0.5s;
    color: #1da0ba;
    border: 1px solid #1da0ba;
  }
`;

export const StyledImage = styled(Image)`
  width: 400px;
  height: 400px;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;
