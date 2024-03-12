import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 55px;
  background-color: #fff;
  z-index: 9;
`;

export const CategorySection = styled.div<{ openmenucheck: boolean }>`
  width: ${({ openmenucheck }) => (openmenucheck ? "830px" : "950px")};
  min-height: 40px;
  overflow-x: auto;
  white-space: nowrap;
  padding: 0 15px;
  display: flex;
  align-items: flex-end;

  &::-webkit-scrollbar {
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  &:hover {
    &::-webkit-scrollbar-thumb {
      background-color: #dcdcdc;
    }
  }
`;

export const CategoryItem = styled.span<{ margin?: string; selected: boolean }>`
  height: 1.4rem;
  border-radius: 8px;
  padding: 5px 10px;
  margin: ${({ margin }) => (margin ? margin : 0)};
  cursor: pointer;
  transition: 0.5s;
  background-color: ${({ selected }) => (selected ? "#000" : "#dcdcdc")};
  color: ${({ selected }) => (selected ? "#fff" : "#000")};

  &:hover {
    background-color: ${({ selected }) => (selected ? "#000" : "#c9c9c9")};
  }
`;

export const ButtonContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 20px;
  font-size: 20px;

  &:hover {
    background-color: #dcdcdc;
  }
`;
