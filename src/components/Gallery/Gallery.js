import { useContext } from 'react';

import { Link } from 'react-router-dom';

import { NftContext } from '../../contexts/NftContext';

import { GalleryItem } from '../GalleryItem/GalleryItem';

export const Gallery = () => {
    const {nfts} = useContext(NftContext);

    return (
        <>
        <div>NFTS in the Gallery - {nfts.length}</div>
        <div>
        <Link to={'/create'}>Add your own NFT</Link>
        </div>
        <ul>
            {nfts.map(nft => <GalleryItem key={nft._id} {...nft}/>)}
        </ul>
        </>
    );
};
