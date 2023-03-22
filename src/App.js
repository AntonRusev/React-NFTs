import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext';
import * as authService from './services/authService';

import './App.css';

import { Gallery } from './components/Gallery/Gallery';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { NftDetails } from './components/NftDetails/NftDetails';
import { Logout } from './components/Logout/Logout';

function App() {
    const [auth, setAuth] = useState({});

    const navigate = useNavigate();

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
        }
    };

    const onLogout = async () => {
        await authService.logout();

        setAuth({});
    }

    const contextValue = {
        onAuthSubmit,
        onLogout,
        userId: auth._id,
        accessToken: auth.accessToken,
        username: auth.username,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken
    };

    return (
        <AuthContext.Provider value={contextValue}>
            <div className="container">
                <Header />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/gallery' element={<Gallery />} />
                    <Route path='/gallery/:nftId' element={<NftDetails />} />
                    <Route path='*' element={<h1>404</h1>} />
                </Routes>

                <Footer />
            </div>
        </AuthContext.Provider>
    );
};

export default App;
