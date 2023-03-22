import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

export const Header = () => {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <header id="header">
            <h1 className="logo">NFTs</h1>
            <nav className="nav">
                <ul className="home-nav">
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='/gallery'>GALLERY</Link></li>
                </ul>
                <ul className="user-nav">
                    {!isAuthenticated && (
                        <>
                            <li><Link to='/login'>LOGIN</Link></li>
                            <li><Link to='/register'>REGISTER</Link></li>
                        </>)}
                    {isAuthenticated && (
                        <>
                            <li><Link to="/profile">MY PROFILE</Link></li>
                            <li><Link to="/logout">LOGOUT</Link></li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};