import styled from "styled-components";

export const Search = styled.div<{ openmenucheck: boolean }>`
  width: ${({ openmenucheck }) =>
    openmenucheck ? "calc(100vw - 250px)" : "100%"};
  padding: 40px 15px 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
`;

export const VideoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 5px 10px;
  margin: 5px 0;
`;

export const Thumbnail = styled.img`
  width: 365px;
  min-width: 365px;
  max-height: 201px;
  border-radius: 12px;
  background-position: 50% 50%;
`;

export const Description = styled.div`
  width: 95%;
  margin-left: 12px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const VideoTitle = styled.span`
  font-weight: 600;
  font-size: 1.25rem;
  overflow: hidden;
  color: #0f0f0f;
  margin-bottom: 3px;
`;

export const TextSpan = styled.span`
  color: #606060;
  font-size: 0.9rem;
  margin-bottom: 3px;
`;

export const ImgChannel = styled.div`
  background-color: violet;
  background-size: cover;
  background-position: center;
  width: 30px;
  height: 30px;
  min-width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 5px;
  margin-left: 0;
`;

export const CImageTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px 0;

  span {
    color: #606060;
    font-size: 0.9rem;
  }
`;

export const VideoDescription = styled.div`
  height: 2.6rem;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 3px;
`;
