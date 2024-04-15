import styled from "styled-components";

export const Feed = styled.div<{ openmenucheck: boolean }>`
  width: ${({ openmenucheck }) =>
    openmenucheck ? "calc(100vw - 250px)" : "100%"};
  padding: 25px 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 15px;
`;

export const BigImage = styled.img`
  height: 120px;
  width: 120px;
  margin-bottom: 15px;
`;

export const Title = styled.span`
  font-size: 2rem;
  font-weight: 400;
  font-style: bold;
`;

export const Subtitle = styled.span`
  font-size: 1rem;
  margin-bottom: 15px;
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

  &:hover {
    background-color: #dcdcdc;
  }
`;

export const ButtonIcon = styled.img<{ margin?: string }>`
  width: 20px;
  margin: ${({ margin }) => margin};
`;
