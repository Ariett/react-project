import * as request from '../lib/request'
const baseUrl = 'http://localhost:3030/data/yachts';

export const getAll = async () => {
    const result = await request.get(baseUrl);
    return Object.values(result);
};

export const getAllByYachtOwnerId = async (yachtOwnerId) => {
    const query = new URLSearchParams({
        where: `_ownerId="${yachtOwnerId}"`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const getLatestYachts = async (yachtOwnerId) => {
    // ${baseUrl}?sortBy=_createdOn desc&offset=0&pageSize=3)
    const query = new URLSearchParams({
        // sortBy: `_createdOn desc`,
        offset: 0,
        pageSize: 3,
    });

    // const result = await request.get(`${baseUrl}?${query}`);
    const result = await request.get(`${baseUrl}?sortBy=_createdOn desc&offset=0&pageSize=3`);

    return result;
};

export const getOneWithOwnerData = async (yachtId) => {
    const query = new URLSearchParams({
        where: `_id="${yachtId}"`,
        load: 'author=_ownerId:users'
    });

    const result = await request.get(`${baseUrl}?${query}`);
    return result ? result[0] : [];
};

export const getOne = async (yachtId) => {
    const result = await request.get(`${baseUrl}/${yachtId}`);
    return result;
};

export const create = async (yachtData) => {
    const result = await request.post(baseUrl, yachtData);

    return result;
};

export const update = async (yachtId, yachtData) => {
    const result = await request.patch(`http://localhost:3030/data/yachts/${yachtId}`, yachtData);

    return result;
};

export const remove = async (yachtId) => request.remove(`${baseUrl}/${yachtId}`);