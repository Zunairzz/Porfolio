import React, {createContext, useState, useEffect} from 'react';

export const AuthContext = createContext(undefined);

const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
        setLoading(false);
    }, [/* maybe pass a key here to trigger again */]);


    const login = (token) => {
        console.log("Login user")
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
    };

    // const logout = () => {
    //     console.log('Logout user');
    //     localStorage.removeItem('token');
    //     setIsAuthenticated(false);
    // };

    return (
        <AuthContext.Provider value={{isAuthenticated, login, loading}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
