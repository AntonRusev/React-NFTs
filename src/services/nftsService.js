import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/catalog';

export const getAll = async () => {
    const nfts = await request.get(baseUrl);

    return nfts;
};

export const create = async (nftData) => {
    const result = await request.post(baseUrl, nftData);

    return result;
};

export const getOne = async (nftId) => {
    const result = await request.get(`${baseUrl}/${nftId}`);

    return result;
}