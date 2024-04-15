import styled from "styled-components";

export const ChContainer = styled.div<{ openmenucheck: boolean }>`
  width: ${({ openmenucheck }) =>
        openmenucheck ? "calc(100vw - 250px)" : "100%"};
  padding: 25px 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const MyData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 10px;

    h1 {
        font-size: 2rem;
        font-weight: 500;
        font-style: bold;
    }

    span {
        font-size: 1.2rem;
        opacity: 85%;
    }

    h2 {
        font-size: 1rem;
        font-style: none;
        font-weight: 400;
        opacity: 85%;
        margin: 15px 0 15px;
        cursor: pointer;
    }
`;

export const ButtonContainer = styled.div`
  height: 40px;
  width: 250px;  
  border-radius: 10px;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #dcdcdc;
  border: solid 1px #dcdcdc;

  span {
    font-size: 1rem;
    font-weight: 500;
    white-space: nowrap;
  }

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const ModalFrame = styled.div<{ uploading: boolean }>`
    display: ${({ uploading }) => uploading ? "flex" : "none"};
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.442);
`;

export const ModalContainer = styled.div`
    width: 650px;
    height: 480px;
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    justify-content: center;
    align-items: center;
    border-radius: 15px;

    background-color: #fff;
`;

export const TitleInput = styled.span`
  align-self: flex-start;
  margin-bottom: -25px;
  margin-left: 60px;
  height: 1.2rem;
  padding: 1px 4px;
  z-index: 2;
  color: #4a4a4a;
  background-color: #fff;
`;


export const Inputs = styled.div`
  width: 80%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid #878787;
  padding: 15px 15px 13px;
  z-index: 1;

  input {
    border: none;
    width: 100%;
    font-size: 1.1rem;
    
    &::placeholder {
        font-size: 0.9rem;
    }
  }
  input:focus {
    outline: none;
  }
`;

export const Invalidation = styled.span<{ valid: boolean }>`
  display: ${({ valid }) => (valid ? "flex" : "none")};
  align-self: flex-start;
  background-color: #fff;
  margin-top: -15px;
  margin-left: 60px;
  height: 1.2rem;
  padding: 1px 4px;
  z-index: 2;
  color: #f23535;
`;

export const CloseModal = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-bottom: 470px;
    margin-left: -25px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    span {
        font-size: 1.5rem;
        font-weight: 600;
        font-style: bold;
        color: #fff;
        margin: 0 0 7px 2px;
    }

    background-color: #F20505;
`;