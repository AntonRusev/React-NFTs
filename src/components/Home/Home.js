import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <main id="main" className='home'>
        <div className="hero">
            <h2 className="welcome">Welcome to the NFTs gallery!</h2>
            <p className="desc">Here we strive to gather and put on display as many valuable pictures of <strong>N</strong>oses, <strong>F</strong>eet and <strong>T</strong>ail<strong>s</strong> of our dearest pets!</p>
            <Link to='/gallery' className="explore-btn">Explore</Link>
        </div>
        <div className="sample-pics">
            <div className="img-holder">
                <img className="sample-img" src="https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div className="img-holder">
                <img className="sample-img" src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div className="img-holder">
                <img className="sample-img" src="https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div className="orange"></div>
        </div>
    </main>
    );
}