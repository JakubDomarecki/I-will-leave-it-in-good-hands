import React, {createContext, useContext, useState} from "react";

const LoginContext = createContext();

export const LoginFunction = ({children}) => {
    const [user, setUser] = useState(null)

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };


    return(
        <LoginContext.Provider value={{user, login, logout}}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLogin = () => useContext(LoginContext);
