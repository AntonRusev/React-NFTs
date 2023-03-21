import { Routes, Route } from 'react-router-dom';

import './App.css';
import { Gallery } from './components/Gallery/Gallery';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { NftDetails } from './components/NftDetails/NftDetails';

function App() {
    return (
        <div className="container">
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/gallery/:nftId' element={<NftDetails />} />
                <Route path='*' element={<h1>404</h1>} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
