import { createContext, useEffect, useState } from "react";
import api from "../api";

export const UserContext = createContext({} as any);

export const UserStorage = ({ children }: any) => {
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState({ email: ' OO ' });
    const [token, setToken] = useState(localStorage.getItem('token') as string);

    /* User information function */
    const getUser = (token: string) => {
        api.get('/user/get-user', { headers: { Authorization: token } }).then(({ data }) => {
            setUser(data.user);
            setLogin(true);
        }).catch((eror) => {
            console.log('Usuário não autenticado', eror)
        })
    }

    /* Token information */
    useEffect(() => {
        getUser(token);
    }, [token]);

    /* Logout function */
    const logOut = () => {
        localStorage.removeItem('token');
        setLogin(false);
        setUser({ email: ' OO ' });
    }

    /* Login function */
    const handleLogin = (email: string, password: string): Promise<Boolean> => {
        return new Promise((resolve, reject) => {
            api.post('/user/sign-in', { email, password }).then(({ data }) => {
                setLogin(true);

                localStorage.setItem('token', data.token);

                setToken(data.token);
                getUser(data.token);

                resolve(true);
            }).catch((error) => {
                if (error.response && error.response.data && error.response.data.error) {
                    const errorMessage = error.response.data.error;
                    console.log(errorMessage);
                    reject(errorMessage);
                } else {
                    console.log('Não foi possível realizar o login', error)
                    reject('Erro ao realizar o login. Por favor, tente novamente.');
                }
            })
        })
    }

    /* Create account function */
    const handleSignIn = (name: string, email: string, password: string): Promise<boolean> => {
        return new Promise((resolve, reject) => {
            api.post('/user/sign-up', { name, email, password }).then(() => {
                console.log("Usuário criado com sucesso!")

                resolve(true);
            }).catch((error) => {
                if (error.response && error.response.data && error.response.data.error) {
                    const errorMessage = error.response.data.error;
                    console.log(errorMessage);
                    reject(errorMessage);
                } else {
                    console.log('Não foi possível criar usuário', error)
                    reject('Erro ao realizar o cadastro. Por favor, tente novamente.');
                }
            })
        })
    }

    return (
        <UserContext.Provider value={{
            login,
            user,
            logOut,
            handleLogin,
            handleSignIn
        }}>
            {children}
        </UserContext.Provider>
    )
}