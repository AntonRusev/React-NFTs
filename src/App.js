import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { NftProvider } from './contexts/NftContext';
import { ModalContext } from './contexts/ModalContext';
import { AlertModal } from './components/common/AlertModal';

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
import { EditNft } from './components/EditNft/EditNft';

import { GuestRouteGuard, UserRouteGuard } from './components/common/RouteGuard';

function App() {
    const { isModalActive } = useContext(ModalContext);
    return (
        <AuthProvider>
            <NftProvider>

                <div className="container">
                    {isModalActive && <AlertModal />}

                    <Header />

                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route element={<UserRouteGuard />}>
                            <Route path='/login' element={<Login />} />
                            <Route path='/register' element={<Register />} />
                        </Route>
                        <Route path='/gallery' element={<Gallery />} />
                        <Route path='/gallery/:nftId' element={<NftDetails />} />
                        <Route element={<GuestRouteGuard />}>
                            <Route path='/logout' element={<Logout />} />
                            <Route path='/create' element={<CreateNft />} />
                            <Route path='/gallery/:nftId/edit' element={<EditNft />} />
                            <Route path='/profile' element={<Profile />} />
                        </Route>
                        <Route path='*' element={<NotFound />} />
                    </Routes>

                    <Footer />
                </div>

            </NftProvider>
        </AuthProvider>
    );
};

export default App;