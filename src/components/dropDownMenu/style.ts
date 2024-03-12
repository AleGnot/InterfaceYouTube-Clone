import styled from "styled-components";

export const Container = styled.div<{ isOpen: boolean; isLogged: string }>`
  width: 300px;
  position: fixed;
  ${({ isLogged }) => isLogged};
  z-index: 11;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 20px;
  border: solid 1px rgb(220, 220, 220, 0.5);
  background-color: #fcf5e5;
  overflow-y: auto;

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  &:hover {
    &::-webkit-scrollbar-thumb {
      background-color: #aaa7a7;
    }
  }
`;

export const UserSec = styled.div`
  width: 85%;
  height: 80px;
  padding: 17px 20px;
  border-bottom: solid 1px #dcdcdc;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  column-gap: 20px;
  position: sticky;
  top: 0;
  z-index: 12;
  background-color: #fcf5e5;

  img {
    height: 45px;
    width: 45px;
    border-radius: 50%;
  }

  span {
    font-size: 1.1rem;
    font-weight: 400;
    color: #4a4a4a;
    height: 1.5rem;

    a {
      text-decoration: none;
      color: #327ad9;
      font-size: 1.1rem;
    }
  }
`;

export const ProfileImg = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f4f9;
`;
