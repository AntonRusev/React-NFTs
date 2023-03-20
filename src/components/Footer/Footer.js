import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer id="footer">
            <p className="author-info">This website was made as a project for the React JS course at SoftUni, by Anton Rusev. Year of 2023</p>
            <ul className="media-links">
                <li><Link to="#"><i className="fa-brands fa-facebook"></i></Link></li>
                <li><Link to="#"><i className="fa-brands fa-github"></i></Link></li>
                <li><Link to="#"><i className="fa-brands fa-discord"></i></Link></li>
            </ul>
        </footer>
    );
}