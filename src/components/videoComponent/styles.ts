import styled from "styled-components";

export const Container = styled.header<{ openmenucheck: boolean }>`
  width: ${({ openmenucheck }) => (openmenucheck ? "330px" : "380px")};
  overflow-y: auto;
  overflow-x: hidden;
`;

export const TumbNailImg = styled.img<{ openmenucheck: boolean }>`
  width: 100%;
  max-height: ${({ openmenucheck }) =>
    openmenucheck ? "185.65px" : "213.75px"};
  border-radius: 12px;
  background-position: 50% 50%;
  transition: 0.3s;
  z-index: -1;

  &:hover {
    transform: scale(1.025);
    border-radius: none;
  }
`;

export const DescriptContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const ChannelImg = styled.div`
  background-color: violet;
  background-size: cover;
  background-position: center;
  width: 40px;
  height: 40px;
  min-width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5px 0 10px;
`;

export const Title = styled.span`
  font-weight: 600;
  max-height: calc(2rem + 10px);
  overflow: hidden;
  color: #0f0f0f;
`;

export const TextCard = styled.span`
  color: #606060;
  font-size: 0.9rem;
`;
