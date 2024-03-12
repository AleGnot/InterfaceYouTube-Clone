import { createContext, useState, ReactNode } from "react";

type DropDownContextProps = {
    children: ReactNode;
}

type DropDownContextType = {
    isDropOpen: boolean,
    setIsDropOpen: (newState: boolean) => void,
}

const initialState = {
    isDropOpen: false,
    setIsDropOpen: () => { },
}

export const DropDownContext = createContext<DropDownContextType>(initialState);

export const DropDownStore = ({ children }: DropDownContextProps) => {
    const [isDropOpen, setIsDropOpen] = useState(initialState.isDropOpen);

    return (
        <DropDownContext.Provider value={{ isDropOpen, setIsDropOpen }}>
            {children}
        </DropDownContext.Provider>
    )
}