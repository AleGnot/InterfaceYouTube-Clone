import styled from "styled-components";

export const Container = styled.div<{ openmenucheck: boolean }>`
    width: ${({ openmenucheck }) => openmenucheck? '250px' : '90px'};
    height: calc(100vh - 55px);
    box-sizing: border-box;
    padding: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    position: sticky;
    top: 55px;

    &::-webkit-scrollbar-thumb {
        background-color: transparent;
    }

    &:hover {
        &::-webkit-scrollbar-thumb {
            background-color: #aaa7a7;
        }
    }
`;

export const FirstSection = styled.div<{ openmenucheck: boolean }>`
    width: 100%;
    box-sizing: border-box;
    padding: ${({ openmenucheck }) => openmenucheck? '10px 0px 10px 0px' : '0px'};
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;

    ::after {
        position: absolute;
        content: '';
        background-color: #DCDCDC;
        width: 100%;
        height: ${({ openmenucheck }) => openmenucheck? '1px' : '0px'};
        bottom: 0;
        left: 0;
    }
`;

export const MenuItem = styled.div<{ openmenucheck: boolean }>`
    width: 98%;
    min-height: ${({ openmenucheck }) => openmenucheck? '45px' : '70px'};
    border-radius: 10px;
    cursor: pointer;
    padding: 2px 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: ${({ openmenucheck }) => openmenucheck? 'row' : 'column'};
    align-items: center;
    justify-content: ${({ openmenucheck }) => openmenucheck? 'none' : 'center'};

    span {
        font-weight: ${({ openmenucheck }) => openmenucheck? '400' : '300'};
        margin: ${({ openmenucheck }) => openmenucheck? '0 0 0 20px' : '5px 0 0'};
        font-size: ${({ openmenucheck }) => openmenucheck? '1rem' : '0.8rem'};
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
