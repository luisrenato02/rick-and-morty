import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  padding: 0.5rem;
  background-color: #147082;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-size: 20px;
  gap: 1rem;
  bottom: 0;
  color: #f5f5f5;
`;
export const Ul = styled.ul`
  display: flex;
  background-color: transparent;
  width: 50%;
  justify-content: space-around;
  list-style: none;
  :hover {
    cursor: pointer;
  }
  li {
    :hover {
      transform: scale(1.2);
      transition: 0.5s;
    }
    background-color: transparent;
  }
  a {
    background-color: transparent;
  }
  img {
    background-color: transparent;
  }
`;
