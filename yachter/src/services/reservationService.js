import * as request from '../lib/request'
const baseUrl = 'http://localhost:3030/data/reservations';

export const getAllReservations = async () => {
    let result = await request.get(baseUrl);

    return result;
};

export const getReservationsByMemberId = async (memberId) => {
    const query = new URLSearchParams({
        where: `_ownerId="${memberId}"`
    });
    
    let result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const getReservationsByYachtId = async (yachtId) => {
    const query = new URLSearchParams({
        where: `yachtId="${yachtId}"`
    });
    
    let result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const getReservationsByYachtOwnerId = async (yachtOwnerId) => {
    const query = new URLSearchParams({
        where: `yachtOwnerId="${yachtOwnerId}"`
    });
    
    let result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const createReservation = async (reservationData) => {
    let result = await request.post(baseUrl, reservationData);

    return result;
};

export const deleteReservation = async (reservationId) => await request.remove(`${baseUrl}/${reservationId}`);