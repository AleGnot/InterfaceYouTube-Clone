import styled from "styled-components";

export const BodyDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f4f9;
  flex-direction: column;
  row-gap: 15px;
`;

export const Disclaymer = styled.span`
  color: #878787;
  font-size: 0.9rem;
  margin-left: 300px;
  font-style: italic;

  a {
    text-decoration: none;
    color: #327ad9;
  }
`;

export const ContainerMain = styled.div`
  min-height: 360px;
  width: 880px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  border-radius: 30px;
  padding: 35px;
  column-gap: 10px;
`;

export const LogoContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 15px;
  flex-direction: column;

  h1 {
    font-size: 2.25rem;
    font-weight: 400;
    font-style: bold;
  }

  span {
    font-size: 1.1rem;
  }
`;

export const LogoG = styled.img`
  width: 48px;
  height: 48px;
`;

export const FormContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  row-gap: 15px;
`;

export const TitleInput = styled.span`
  background-color: #fff;
  margin-bottom: -25px;
  margin-right: calc(440px - 17%);
  height: 1.2rem;
  padding: 1px 4px;
  z-index: 2;
  color: #4a4a4a;
`;

export const Inputs = styled.div`
  width: 90%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid #878787;
  padding: 15px 15px 13px;
  z-index: 1;

  input {
    border: none;
    width: 100%;
    font-size: 1.1rem;
  }
  input:focus {
    outline: none;
  }
`;

export const Invalidation = styled.span<{ valid: boolean }>`
  display: ${({ valid }) => (valid ? "flex" : "none")};
  background-color: #fff;
  margin-top: -15px;
  margin-right: 175px;
  height: 1.2rem;
  padding: 1px 4px;
  z-index: 2;
  color: #f23535;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 20px;
  margin: 0 15px;

  span {
    align-self: center;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    background-color: none;
    border-radius: 5px;
    padding: 5px 10px;

    &:hover {
      background-color: #f2f2f2;
    }
  }
`;

export const LogButton = styled.button`
  height: 40px;
  width: 110px;
  padding: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  border-radius: 25px;
  background-color: #327ad9;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;

  &:hover {
    background-color: #0d65d9;
    color: #fff;
  }
`;

export const CheckBox = styled.div`
  height: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 275px 0 0;

  span {
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    background-color: none;
    border-radius: 5px;
    padding: 5px 10px;

    &:hover {
      background-color: none;
    }
  }

  img {
    width: 25px;
  }
`;
