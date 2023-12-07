import { useContext, createContext, useEffect, useState } from "react";

import AuthContext from "./authContext";
import YachtsProvider from "./yachtsContext";

import * as memberService from "../services/memberService";
import * as likesService from "../services/likesService";
import * as reservationService from "../services/reservationService";

const MemberContext = createContext();

export const MemberProvider = ({
    children
}) => {
    const { userId } = useContext(AuthContext);
    const { yachtReservationHandler } = useContext(YachtsProvider);
    const [memberLikes, setMemberLikes] = useState([]);
    const [memberFavoriteYachts, setMemberFavoriteYachts] = useState([]);
    const [memberReservations, setMemberReservations] = useState([]);

    useEffect(() => {
        likesService.getMemberLikes(userId)
            .then(result => setMemberLikes(result));
    }, [userId]);

    useEffect(() => {
        memberService.getMemberFavoriteYachts(memberLikes)
            .then(result => setMemberFavoriteYachts(result));
    }, [memberLikes]);

    useEffect(() => {
        reservationService.getReservationsByMemberId(userId)
            .then(result => setMemberReservations(result));
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

    const reservationHandler = async (yachtId, startDate, endDate) => {
        let result = await yachtReservationHandler(yachtId, startDate, endDate);
        setMemberReservations(state => [...state, result]);
    };

    const values = {
        memberFavoriteYachts,
        memberLikes,
        likeClickHandler,
        removeLikeClickHandler,

        memberReservations,
        reservationHandler,
    };

    return (
        <MemberContext.Provider value={values}>
            {children}
        </MemberContext.Provider>
    );
};

MemberContext.displayName = 'MemberContext';

export default MemberContext;
