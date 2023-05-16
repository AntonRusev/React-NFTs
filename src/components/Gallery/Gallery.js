import { useContext } from 'react';

import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import { NftContext } from '../../contexts/NftContext';

import { GalleryItem } from '../GalleryItem/GalleryItem';

import '../Gallery.css';

export const Gallery = () => {
    const { nfts } = useContext(NftContext);
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <main id="main">
            <div className="hero">
                <h1 className='gallery-title'>Welcome to our Gallery!</h1>

                <h2 className='gallery-subtitle'>Currently it hosts {nfts.length} NFTs!</h2>

                <div>
                    <p className='paragraph'>If you'd like to add your own NFTs</p>
                    {
                        isAuthenticated
                            ? <Link className='explore-btn' to={'/create'}>Create</Link>
                            : <Link className='explore-btn' to={'/login'}>Login</Link>
                    }
                </div>
            </div>

            <div className='gallery'>
                <ul className='gallery-items'>
                    {nfts.map(nft => <GalleryItem key={nft._id} {...nft} />)}
                </ul>
            </div>
        </main>
    );
};
