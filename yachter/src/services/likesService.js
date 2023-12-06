import * as request from '../lib/request'
const baseUrl = 'http://localhost:3030/data/likes';

export const getAllLikes = async () => {
    const result = await request.get(baseUrl);

    return result;
};

export const getMemberLikes =  async (memberId) => {
    const query = new URLSearchParams({
        where: `_ownerId="${memberId}"`
    });

    const result = await request.get(`${baseUrl}?${query}`);
    
    return result;
};

export const addLike = async (yachtId) => {
    const result = await request.post(baseUrl, {yachtId});

    return result;
};

export const removeLike = async (likeId) => await request.remove(`${baseUrl}/${likeId}`);