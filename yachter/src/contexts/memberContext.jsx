import { createContext, useContext, useEffect, useState } from "react";

import AuthContext from "./authContext";
import * as memberService from "../services/memberService";
import * as likesService from "../services/likesService";
import * as bookingService from "../services/bookingService";

const MemberContext = createContext();

export const MemberProvider = ({
    children,
}) => {
    const { userId } = useContext(AuthContext);
    const [memberLikes, setMemberLikes] = useState([]);
    const [memberFavoriteYachts, setMemberFavoriteYachts] = useState([]);
    const [memberBookings, setMemberBookings] = useState([]);

    useEffect(() => {
        likesService.getMemberLikes(userId)
            .then(result => setMemberLikes(result));
    }, [userId]);

    useEffect(() => {
        memberService.getMemberFavoriteYachts(memberLikes)
            .then(result => setMemberFavoriteYachts(result));
    }, [memberLikes]);

    useEffect(() => {
        bookingService.getBookingsByMemberId(userId)
            .then(result => setMemberBookings(result));
    }, [userId]);

    const likeClickHandler = async (yachtId) => {
        let like = await likesService.addLike(yachtId);
        setMemberLikes(state => [...state, like]);
    };

    const removeLikeClickHandler = (yachtId) => {
        const currentLikeIdIndex = memberLikes.findIndex((memberLike) => memberLike.yachtId === yachtId);
        if (currentLikeIdIndex >= 0) {
            likesService.removeLike(memberLikes[currentLikeIdIndex]._id);
        }
        setMemberLikes(state => state.filter(like => like._id !== memberLikes[currentLikeIdIndex]._id));
    };

    const bookingHandler = async (yachtId, startDate, endDate) => {
        let result = await bookingService.createBooking({yachtId, startDate, endDate});
        setMemberBookings(state => [...state, result]);
    };

    const values = {
        memberFavoriteYachts,
        memberLikes,
        likeClickHandler,
        removeLikeClickHandler,

        memberBookings,
        bookingHandler,
    };

    return (
        <MemberContext.Provider value={values}>
            {children}
        </MemberContext.Provider>
    );
};

MemberContext.displayName = 'MemberContext';

export default MemberContext;
