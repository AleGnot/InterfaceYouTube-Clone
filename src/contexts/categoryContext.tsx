import { ReactNode, createContext, useState } from "react";

type CategoryContextProps = {
    children: ReactNode;
}

type CategoryType = {
    categoryId: string,
    setCategoryId: (id: string) => void,
}

export const CategoryContext = createContext<CategoryType>({} as CategoryType);

export const CategoryStore = ({ children }: CategoryContextProps) => {
    const [categoryId, setCategoryId] = useState('0');

    return (
        <CategoryContext.Provider value={{ categoryId, setCategoryId }}>
            {children}
        </CategoryContext.Provider>
    )
}