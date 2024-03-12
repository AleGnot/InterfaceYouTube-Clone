import styled from "styled-components";

export const SecondSection = styled.div<{ openmenucheck: boolean }>`
    width: 100%;
    box-sizing: border-box;
    padding: 0px;
    display: ${({ openmenucheck }) => openmenucheck? 'flex' : 'none'};
    align-items: center;
    flex-direction: column;
`;

export const MenuItem = styled.div`
    width: 98%;
    min-height: 45px;
    border-radius: 10px;
    cursor: pointer;
    padding: 2px 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
        font-weight: 400;
        margin-left: 20px;
        font-size: 1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    &:hover {
        background-color: #DCDCDC;
    }
`;

export const ButtonIcon = styled.img`
    width: 20px;
`;