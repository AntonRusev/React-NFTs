import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as nftsService from '../../services/nftsService';

export const NftDetails = () => {
    const [nft, setNft] = useState({});
    const { nftId } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        nftsService.getOne(nftId)
        .then(result => {
            setNft(result);
        })
        .catch(err => console.log(err));
    },[nftId]);

    const onBackBtnClick = () => {
        navigate('/gallery');
    }

    return (
        <>
        <h1>Details for "{nft.nftName}"</h1>
        <div><img className="sample-img" src={nft.imageUrl} alt="dog" /></div>
        <button onClick={onBackBtnClick} >Back</button>
        </>
    );
};