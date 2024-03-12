import styled from "styled-components";

export const Container = styled.header`
  width: 200px;
  padding: 0;
`;

export const TumbNailImg = styled.div<{ src: string }>`
  width: 100%;
  height: 380px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 12px;
`;

export const DescriptContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-weight: 600;
  color: #0f0f0f;
`;

export const TextCard = styled.span`
  color: #606060;
  font-size: 0.9rem;
`;
