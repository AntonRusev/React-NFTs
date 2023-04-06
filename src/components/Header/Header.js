import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

export const Header = () => {
    const { isAuthenticated } = useContext(AuthContext);

    const [click, setClick] = useState(false);


    const handleCLick = () => {
        setClick(!click);
    }

    return (
        <header id="header">
            <div className='head'> 
            <h1 className="logo"><Link to='/'>NFTs</Link></h1>

            <div className="toggle-button" onClick={handleCLick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} ></i>
            </div>
            </div>

            <nav className={click ? "nav" : "nav dropdown"}>


                <ul className="home-nav">
                    <li><Link to='/' onClick={handleCLick}>HOME</Link></li>
                    <li><Link to='/gallery' onClick={handleCLick}>GALLERY</Link></li>
                </ul>
                <ul className="user-nav">
                    {!isAuthenticated && (
                        <>
                            <li><Link to='/login' onClick={handleCLick}>LOGIN</Link></li>
                            <li><Link to='/register' onClick={handleCLick}>REGISTER</Link></li>
                        </>)}
                    {isAuthenticated && (
                        <>
                            <li><Link to="/profile" onClick={handleCLick}>MY PROFILE</Link></li>
                            <li><Link to="/logout" onClick={handleCLick}>LOGOUT</Link></li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};