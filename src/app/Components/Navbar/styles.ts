import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  width: 100%;
  position: fixed;
  top: 0;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 5rem 0.5rem 5rem;
  background-color: #272c3c;
  box-shadow: 0 -2px 5px 3px rgba(29, 160, 186, 0.4);
`;
export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  list-style: none;
  :hover {
    cursor: pointer;
    color: #147082;
  }

  li {
    font-size: 26px;
    color: #f5f5f5;
  }
  a {
    text-decoration: none;
  }
`;
export const Hamburg = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const WrapperModal = styled.div`
  display: flex;
  padding: 5rem;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  :hover {
    cursor: pointer;
    color: #147082;
  }
  p {
    color: #f5f5f5;
  }
`;
