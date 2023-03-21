import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import * as nftsService from '../../services/nftsService';
import { GalleryItem } from '../GalleryItem/GalleryItem';

export const Gallery = () => {
    const [nfts, setNfts] = useState([]);

    // const navigate = useNavigate();

    useEffect(() => {
        nftsService.getAll()
            .then(result => setNfts(result))
            .catch(err => console.log(err))
    }, []);

    // TODO
    // const onCreateNftSubmit = async (data) => {


    //     const newNft = await nftsService.create(data);

    //     navigate('/gallery')
    // };

    return (
        <>
        <div>NFTS in the Gallery - {nfts.length}</div>
        <ul>
            {nfts.map(nft => <GalleryItem key={nft._id} {...nft} />)}
        </ul>
        </>
    );
};
