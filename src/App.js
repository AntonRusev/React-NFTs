import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import * as authService from './services/authService';
import * as nftsService from './services/nftsService';

import { AuthContext } from './contexts/AuthContext';
import { NftContext } from './contexts/NftContext';

import './App.css';

import { Gallery } from './components/Gallery/Gallery';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { NftDetails } from './components/NftDetails/NftDetails';
import { Logout } from './components/Logout/Logout';
import { CreateNft } from './components/CreateNft/CreateNft';
import { NotFound } from './components/NotFound/NotFound';
import { Profile } from './components/Profile/Profile';

function App() {
    const [auth, setAuth] = useState({});
    const [nfts, setNfts] = useState([]);

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

    useEffect(() => {
        nftsService.getAll()
            .then(result => setNfts(result))
            .catch(err => console.log(err))
    }, []);

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

        if (auth) {
            localStorage.removeItem('userData');
        };

        setAuth({});
    }

    const onCreateNftSubmit = async (e, data) => {
        e.preventDefault();

        const newNft = await nftsService.create(data);

        setNfts(state => [...state, newNft]);

        navigate('/gallery');
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

    const nftContextValue = {
        onCreateNftSubmit,
        nfts
    }

    return (
        <AuthContext.Provider value={authContextValue}>
            <NftContext.Provider value={nftContextValue}>
                <div className="container">
                    <Header />

                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/logout' element={<Logout />} />
                        <Route path='/gallery' element={<Gallery />} />
                        <Route path='/create' element={<CreateNft />} />
                        <Route path='/gallery/:nftId' element={<NftDetails />} />
                        <Route path='/profile' element={<Profile />} />
                        <Route path='*' element={<NotFound  />} />
                    </Routes>

                    <Footer />
                </div>
            </NftContext.Provider>
        </AuthContext.Provider>
    );
};

export default App;
