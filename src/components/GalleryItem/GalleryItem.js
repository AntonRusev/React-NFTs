import { Link } from "react-router-dom";

export const GalleryItem = ({
    _id,
    imageUrl,
    nftName,
    description,
}) => {
    return (
        <Link to={`/gallery/${_id}`}>
            <li className="nft-item">
                <article className="card">
                    <img className="img-bg" src={imageUrl} alt="nft-item" />
                    <div className="content">
                        <h2 className="title">{nftName}</h2>
                        <p className="description">{description}</p>
                    </div>
                </article>
            </li>
        </Link>
    );
};