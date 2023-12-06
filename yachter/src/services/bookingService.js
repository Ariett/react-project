import * as request from '../lib/request'
const baseUrl = 'http://localhost:3030/data/bookings';

export const getAllBookings = async () => {
    let result = await request.get(baseUrl);

    return result;
};

export const getBookingsByMemberId = async (memberId) => {
    const query = new URLSearchParams({
        where: `_ownerId="${memberId}"`
    });
    
    let result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const getBookingsByYachtId = async (yachtId) => {
    const query = new URLSearchParams({
        where: `yachtId="${yachtId}"`
    });
    
    let result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const createBooking = async (bookingData) => {
    let result = await request.post(baseUrl, bookingData);

    return result;
};