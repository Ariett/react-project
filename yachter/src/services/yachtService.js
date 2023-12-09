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

export const getOne = async (yachtId) => {
    const result = await request.get(`${baseUrl}/${yachtId}`);
    return result;
};

export const getOneWithOwnerData = async (yachtId) => {
    const query = new URLSearchParams({
        where: `_id="${yachtId}"`,
        load: 'author=_ownerId:users'
    });

    const result = await request.get(`${baseUrl}?${query}`);
    return result ? result[0] : {};
};

export const getYachtsByType = async (type, exludedYachtId = false) => {
    const query = new URLSearchParams({
        where: `typeName="${type}"`,
    });

    let result = [];
    if (type === "all") {
        result = await getAll();
    } else {
        result = await request.get(`${baseUrl}?${query}`);
        if (exludedYachtId) {
            result = result.filter(yacht => yacht._id !== exludedYachtId);
        }
    }
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