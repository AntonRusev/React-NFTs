import { Link } from "react-router-dom";

export const GalleryItem = ({
    _id,
    nftName,
    description,
}) => {
    return (
        <li>
            <Link to={`/gallery/${_id}`}>{nftName} - {description}</Link>
        </li>
    );
};