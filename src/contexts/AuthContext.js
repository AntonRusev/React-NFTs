import { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import * as authService from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        if (auth.accessToken) {
            localStorage.setItem('userData', JSON.stringify(auth));
        } else {
            const userData = JSON.parse(localStorage.getItem('userData'));
                if (userData) {
                    setAuth(userData);
                };
        };
    },[auth, auth.accessToken]);

    const onAuthSubmit = async (e, formValues) => {
        e.preventDefault();
        let result = {};

        const { rePass, ...values } = formValues;

        const inputFields = Object.keys(formValues).length;

        try {
            if (inputFields > 2) {
                result = await authService.register(values);
            } else {
                result = await authService.login(values);
            }
            setAuth(result);

            navigate('/gallery');
        } catch (err) {
            console.log('There is a problem');
            throw new Error(err);
        };
    };

    const onLogout = async () => {
        await authService.logout();

        if (auth) {
            localStorage.removeItem('userData');
        };

        setAuth({});
    };

    const authContextValue = {
        onAuthSubmit,
        onLogout,
        userId: auth._id,
        accessToken: auth.accessToken,
        username: auth.username,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken
    };

    return (
        <>
            <AuthContext.Provider value={authContextValue}>
                {children}
            </AuthContext.Provider>
        </>
    );
}