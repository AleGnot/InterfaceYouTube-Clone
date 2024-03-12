import { createContext, useState, ReactNode } from "react";

type MenuContextProps = {
    children: ReactNode;
}

type MenuContextType = {
    isMenuOpen: boolean,
    setIsMenuOpen: (newState: boolean) => void,
}

const initialState = {
    isMenuOpen: true,
    setIsMenuOpen: () => {},
}

export const MenuContext = createContext<MenuContextType>(initialState);

export const MenuStore = ({ children }: MenuContextProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(initialState.isMenuOpen);

    return (
        <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
            {children}
        </MenuContext.Provider>
    )
}