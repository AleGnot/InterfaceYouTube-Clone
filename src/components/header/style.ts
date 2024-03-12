import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 55px;
  background-color: #fff;
  padding: 0 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonContainer = styled.div<{ margin: string; userBG?: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: ${({ margin }) => margin};
  display: flex;
  justify-content: ${({ userBG }) => (userBG ? "center" : "flex-start")};
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background-color: ${({ userBG }) => (userBG ? "#f0f4f9" : "")};

  span {
    display: none;
    height: 1.5rem;
    width: contain;
    background-color: rgb(0, 0, 0, 0.7);
    color: #fff;
    margin-top: 15px;
    padding: 5px 7px;
    border-radius: 5px;
    font-size: 0.9rem;
    white-space: nowrap;
  }

  &:hover {
    background-color: #dcdcdc;

    span {
      display: flex;
    }
  }
`;

export const ButtonIcon = styled.img<{ margin?: string }>`
  width: 20px;
  margin: ${({ margin }) => margin};
`;

export const SearchContainer = styled.div`
  display: flex;
`;

export const SearchInputContainer = styled.div`
  width: 450px;
  height: 35px;
  border: 1px solid #d3d3d3;
  border-radius: 40px 0 0 40px;
  display: flex;
  align-items: center;
  padding: 0 16px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 25px;
  outline: none;
  border: none;
`;

export const SearchButton = styled.div`
  border-radius: 0 40px 40px 0;
  height: 35px;
  width: 70px;
  background-color: #f8f8f8;
  border: 1px solid #d3d3d3;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  cursor: pointer;

  span {
    display: none;
    height: 1.5rem;
    background-color: rgb(0, 0, 0, 0.7);
    color: #fff;
    margin-top: 15px;
    padding: 5px 7px;
    font-size: 0.9rem;
    border-radius: 5px;
  }

  &:hover {
    span {
      display: flex;
    }
  }
`;

export const HeaderButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
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
