import { Link } from "react-router-dom";

export const GalleryItem = ({
    _id,
    nftName,
    description,
}) => {
    return (
        <li>
            <span>{nftName} - {description} - </span><Link to={`/gallery/${_id}`}>Details</Link>
        </li>
    );
};