import * as request from "./requester";

// const baseUrl = 'http://localhost:3030/data/catalog';
const baseUrl = 'http://localhost:3030/data/nfts';

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

export const edit = async (nftId, data) => {
    const result = await request.put(`${baseUrl}/${nftId}`, data);

    return result;
}

export const remove = async (nftId) => {
    const result = await request.del(`${baseUrl}/${nftId}`);

    return result;
}