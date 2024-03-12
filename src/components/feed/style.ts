import styled from "styled-components";

export const Feed = styled.div<{ openmenucheck: boolean }>`
  width: ${({ openmenucheck }) =>
    openmenucheck ? "calc(100vw - 250px)" : "100%"};
  padding: 25px 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 17px;
  row-gap: 35px;
`;

export const ShortsContainer = styled.div<{ checkopen: boolean }>`
  height: ${({ checkopen }) => (checkopen ? "500px" : "")};
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  column-gap: 17px;
  row-gap: 15px;
  overflow-y: hidden;
`;

export const ShortsIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const Shortstxt = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
`;

export const DivideLines = styled.div`
  content: "";
  background-color: #dcdcdc;
  width: 40%;
  height: 1px;
  bottom: 0;
  left: 0;
  border-radius: 5px;
`;

export const ShowMore = styled.div`
  height: 35px;
  width: 350px;
  border-radius: 25px;
  padding: 0 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  border: 1px solid #dcdcdc;

  &:hover {
    background-color: #dcdcdc;
  }
`;

export const EndSec = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: -25px;
`;
