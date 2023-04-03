import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { ModalContext } from "../../contexts/ModalContext";

import * as nftsService from '../../services/nftsService';
import * as commentService from "../../services/commentService";


import { ConfirmModal } from '../common/ConfirmModal';
import { AddComment } from "./AddComment/AddComment";

export const NftDetails = () => {
    const [nft, setNft] = useState({});
    const { nftId } = useParams();

    const { userId, isAuthenticated, username } = useContext(AuthContext);
    const { modal, onModalActivate } = useContext(ModalContext);

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
        <>
            {modal !== '' && <ConfirmModal />}
            <h1>Details for "{nft.nftName}"</h1>
            <div>
                <p>{nft.price}</p>
            </div>
            <button onClick={onBackBtnClick}>Back</button>
            <div><img className="sample-img" src={nft.imageUrl} alt="dog" /></div>

            {(userId === nft._ownerId) &&
                <div>
                    <Link to={`/gallery/${nftId}/edit`}>EDIT</Link>
                    <button onClick={() => onModalActivate(nftId)}>DELETE</button>
                </div>
            }

            <div className="details-comments">
                <h2>Comments:</h2>
                <ul>
                    {nft.comments && nft.comments.map(x => (
                        <li key={x._id} className="comment">
                            <p>{x.author.username}: {x.comment.comment}</p>
                        </li>
                    ))}
                </ul>

                {!nft.comments?.length && (
                    <p className="no-comment">No comments.</p>
                )}
            </div>
            {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
        </>
    );
};