import styled from "styled-components";

export const MenuSection = styled.div<{ openmenucheck: boolean }>`
    width: 100%;
    box-sizing: border-box;
    padding: 10px 0px 10px 0px;
    display: ${({ openmenucheck }) => openmenucheck? 'flex' : 'none'};
    align-items: center;
    flex-direction: column;
    position: relative;

    ::after {
        position: absolute;
        content: '';
        background-color: #DCDCDC;
        width: 100%;
        height: 1px;
        bottom: 0;
        left: 0;
    }

    h1 {
        width: 100%;
        font-weight: 400;
        font-size: 18px;
        text-indent: 1.25rem;
    }
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
