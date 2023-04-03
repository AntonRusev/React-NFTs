import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/comments';

export const getAll = async (nftId) => {
    const nftQuery = encodeURIComponent(`nftId="${nftId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);

    const result = await request.get(`${baseUrl}?where=${nftQuery}&load=${relationQuery}`);
    const comments = Object.values(result);

    return comments;
};

export const create = async (nftId, comment) => {
    const result = await request.post(baseUrl, { nftId, comment });

    return result;
};