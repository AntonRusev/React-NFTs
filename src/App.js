import { Routes, Route } from 'react-router-dom';

import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';

function App() {
    return (
        <div className="container">
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
            
            <Footer />
        </div>
    );
}

export default App;
