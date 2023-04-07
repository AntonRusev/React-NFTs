import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { ModalContext } from "../../contexts/ModalContext";

import * as nftsService from '../../services/nftsService';
import * as commentService from "../../services/commentService";


import { ConfirmModal } from '../common/ConfirmModal';
import { AddComment } from "./AddComment/AddComment";

import '../Gallery.css';

export const NftDetails = () => {
    const [nft, setNft] = useState({});
    const { nftId } = useParams();

    const { userId, isAuthenticated, username } = useContext(AuthContext);
    const { isModalActive, onModalActivate } = useContext(ModalContext);

    const navigate = useNavigate();

    useEffect(() => {
        Promise.all([
            nftsService.getOne(nftId),
            commentService.getAll(nftId)
        ])
            .then(([nftData, comments]) => {
                setNft({
                    ...nftData,
                    comments
                });
            })
            .catch(err => console.log(err));
    }, [nftId]);

    const onBackBtnClick = () => {
        navigate('/gallery');
    };

    const onCommentSubmit = async (e, formValues) => {
        e.preventDefault();

        const newComment = await commentService.create(nftId, formValues);

        setNft(state => ({
            ...state,
            comments: [
                ...state.comments,
                {
                    ...newComment,
                    author: {
                        username: username
                    }
                }
            ]
        }));
    };

    return (
        <main id="main">
            <div className="hero">
                <div className="details-info">

                    {isModalActive && <ConfirmModal />}

                    <div className="details-upper-row">
                        <button className="explore-btn" onClick={onBackBtnClick}>Back</button>
                    </div>

                    <h1 className="details-title">{nft.nftName}</h1>

                    <div className="img-holder">
                        <img className="sample-img" src={nft.imageUrl} alt="dog" />
                    </div>

                    <p className="details-price">
                        <i className="fa-brands fa-bitcoin"></i>
                        {nft.price}
                    </p>

                    <div className="details-description">
                        <p>{nft.description}</p>
                    </div>


                    <div className="details-btns-row">
                        {(userId === nft._ownerId)
                            &&
                            <>
                                <Link to={`/gallery/${nftId}/edit`} className="explore-btn">EDIT</Link>
                                <button onClick={() => onModalActivate({ text: nftId, type: 'orange' })} className="explore-btn">DELETE</button>
                            </>
                        }
                    </div>

                </div>

                <div className="details-comments">
                    {
                        !nft.comments?.length
                            ? <p className="no-comment">No comments.</p>
                            : <h2>Comments:</h2>
                    }

                    <ul>
                        {nft.comments && nft.comments.map(x => (
                            <li key={x._id} className="comment">
                                <p><span>{x.author.username}:</span> {x.comment.comment}</p>
                            </li>
                        ))}
                    </ul>


                    {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
                </div>
            </div>
        </main>
    );
};