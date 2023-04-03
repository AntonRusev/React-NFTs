import { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import * as nftsService from '../services/nftsService';

export const NftContext = createContext();

export const NftProvider = ({
    children,
}) => {
    const [nfts, setNfts] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        nftsService.getAll()
            .then(result => setNfts(result))
            .catch(err => console.log(err))
    }, []);

    const onCreateNftSubmit = async (e, data) => {
        e.preventDefault();

        const newNft = await nftsService.create(data);

        setNfts(state => [...state, newNft]);

        navigate('/gallery');
    };

    const onEditNftSubmit = async (e, nftId, data) => {
        e.preventDefault();

        const result = await nftsService.edit(nftId, data);

        setNfts(state => state.map(x => x._id === data._id ? result : x));

        navigate(`/gallery/${data._id}`);
    };

    const onDeleteConfirm = async (nftId) => {
        await nftsService.remove(nftId);

        setNfts(state => state.filter(x => x._id !== nftId));

        navigate('/gallery');
    }

    const nftContextValue = {
        onCreateNftSubmit,
        onEditNftSubmit,
        onDeleteConfirm,
        nfts
    };

    return (
        <>
            <NftContext.Provider value={nftContextValue}>
                {children}
            </NftContext.Provider>
        </>
    );
}