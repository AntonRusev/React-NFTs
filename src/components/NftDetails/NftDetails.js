import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { NftContext } from "../../contexts/NftContext";

import * as nftsService from '../../services/nftsService';

export const NftDetails = () => {
    const [nft, setNft] = useState({});
    const { nftId } = useParams();

    const { userId } = useContext(AuthContext);
    const { onDeleteClick } = useContext(NftContext);

    const navigate = useNavigate();

    useEffect(() => {
        nftsService.getOne(nftId)
            .then(result => {
                setNft(result);
            })
            .catch(err => console.log(err));
    }, [nftId]);

    const onBackBtnClick = () => {
        navigate('/gallery');
    }

    return (
        <>
            <h1>Details for "{nft.nftName}"</h1>
            <div>
                <p>{nft.price}</p>
            </div>
            <div><img className="sample-img" src={nft.imageUrl} alt="dog" /></div>

            {(userId === nft._ownerId) &&
                <div>
                    <Link to={`/gallery/${nftId}/edit`}>EDIT</Link>
                    <button onClick={() => onDeleteClick(nftId)}>DELETE</button>
                </div>
            }
            <button onClick={onBackBtnClick}>Back</button>
        </>
    );
};