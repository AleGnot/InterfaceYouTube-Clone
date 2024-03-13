import { ReactNode, createContext, useState } from "react";

type SearchContextProps = {
    children: ReactNode;
}

type SearchType = {
    searchQ: string;
    setSearchQ: (inputValue: string) => void;
}

export const SearchContext = createContext<SearchType>({} as SearchType);

export const SearchStore = ({ children }: SearchContextProps) => {
    const [searchQ, setSearchQ] = useState('');

    return (
        <SearchContext.Provider value={{ searchQ, setSearchQ }}>
            {children}
        </SearchContext.Provider>
    )
}
