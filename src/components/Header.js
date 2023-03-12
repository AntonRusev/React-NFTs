import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header id="header">
            <h1 className="logo">NFTs</h1>
            <nav className="nav">
                <ul className="home-nav">
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='/catalog'>GALLERY</Link></li>
                </ul>
                <ul className="user-nav">
                    <li><Link to='/login'>LOGIN</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                    {/* <li><a href="#">USER PROFILE</a></li>
                    <li><a href="#">LOGOUT</a></li>  */}
                </ul>
            </nav>
        </header>
    );
};