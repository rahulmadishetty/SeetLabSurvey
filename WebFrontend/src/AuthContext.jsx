import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(localStorage.getItem('authToken') || null);
    const [role, setRole] = useState(localStorage.getItem('role') || null);

    useEffect(() => {
        // Update local storage when auth token or role changes
        localStorage.setItem('authToken', authToken);
        localStorage.setItem('role', role);
    }, [authToken, role]);

    const login = (token, userRole) => {
        setAuthToken(token);
        setRole(userRole);
    };

    const logout = () => {
        setAuthToken(null);
        setRole(null);
        localStorage.removeItem('authToken');
        localStorage.removeItem('role');
    };

    return (
        <AuthContext.Provider value={{ authToken, role, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
