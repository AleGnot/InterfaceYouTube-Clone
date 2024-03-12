import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  padding: 10px 0;
  border-bottom: solid 1px #dcdcdc;
  display: flex;
  flex-direction: column;
`;

export const EndSection = styled.div`
  width: 100%;
  padding: 10px 0 14px;
  display: flex;
  flex-direction: column;
`;

export const ButtonDrop = styled.div`
  width: 100%;
  min-height: 45px;
  cursor: pointer;
  padding: 2px 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    font-weight: 300;
    margin: 0 0 0 20px;
    font-size: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    background-color: #dcdcdc;
  }
`;

export const ButtonIcon = styled.img`
  width: 20px;
`;
