import styled from "styled-components";

export const Feed = styled.div<{ openmenucheck: boolean }>`
  width: ${({ openmenucheck }) =>
    openmenucheck ? "calc(100vw - 250px)" : "100%"};
  padding: 25px 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
`;

export const BigImage = styled.img`
  height: 100px;
  width: 100px;
  margin-bottom: 15px;
`;

export const HistoryContent = styled.div<{ logado: boolean }>`
  width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ logado }) => (logado ? "flex-start" : "center")};
  align-self: ${({ logado }) => (logado ? "flex-start" : "")};

  h1 {
    font-size: ${({ logado }) => (logado ? "2.3rem" : "1.5rem")};
    font-weight: 400;
    font-style: bold;
    align-self: ${({ logado }) => (logado ? "flex-start" : "")};
  }

  span {
    font-size: ${({ logado }) => (logado ? "1.1rem" : "0.9rem")};
    margin: ${({ logado }) => (logado ? "15px 0" : "0 0 15px 0")};
  }
`;

export const ButtonsContainer = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  padding: 20px 0;
  row-gap: 5px;
`;

export const ButtonCell = styled.div`
  width: 98%;
  min-height: 45px;
  border-radius: 10px;
  cursor: pointer;
  padding: 2px 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    font-weight: 400;
    margin: 10px 0 0;
    font-size: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  a {
    text-decoration: none;
    font-weight: 800;
    margin: 0 10px 4px 5px;
  }

  &:hover {
    background-color: #dcdcdc;
  }
`;

export const UnloggedButton = styled.div`
  height: 40px;
  width: 130px;
  border-radius: 25px;
  padding: 0 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  border: 1px solid #dcdcdc;

  h2 {
    font-size: 1rem;
    font-weight: 400;
    font-style: none;
  }

  &:hover {
    background-color: #dcdcdc;
  }
`;

export const ButtonIcon = styled.img`
  width: 20px;
`;
