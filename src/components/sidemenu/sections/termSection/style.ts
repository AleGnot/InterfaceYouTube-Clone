import styled from "styled-components";

export const AboutSection = styled.div<{ openmenucheck: boolean }>`
    width: 100%;
    box-sizing: border-box;
    padding: 10px 0px 10px 0px;
    display: ${({ openmenucheck }) => openmenucheck? 'flex' : 'none'};
    align-items: center;
    flex-direction: column;
    position: relative;
`;

export const AboutItem = styled.div`
    width: 100%;
    cursor: pointer;
    padding: 1px 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-weight: bold;
    font-size: 0.8rem;
`;

export const WaterMark = styled.span`
    width: 100%;
    font-weight: 400;
    font-size: 0.8rem;
    color: #BABABA;
    text-indent: 0.95rem;
    margin-top: 15px;
`;