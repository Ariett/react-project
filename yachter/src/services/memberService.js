import * as yachtService from '../services/yachtService';
import * as bookingService from '../services/bookingService';

export const getMemberFavoriteYachts = async (memberLikes) => {
    const allYachts = await yachtService.getAll();

    return allYachts.filter(yacht => memberLikes.some(like => like.yachtId === yacht._id));
};