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
    const { yachtReservationCreateHandler, yachtReservationDeleteHandler } = useContext(YachtsProvider);
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

    const reservationCreateHandler = async (yachtId, yachtName, startDate, endDate) => {
        let result = await yachtReservationCreateHandler(yachtId, yachtName, startDate, endDate);
        setMemberReservations(state => [...state, result]);
    };
    
    const reservationDeleteHandler = async (reservationId) => {
        await yachtReservationDeleteHandler(reservationId);
        setMemberReservations(state => state.filter(reservation => reservation._id !== reservationId));
    };

    const values = {
        memberFavoriteYachts,
        memberLikes,
        likeClickHandler,
        removeLikeClickHandler,

        memberReservations,
        reservationCreateHandler,
        reservationDeleteHandler,
    };

    return (
        <MemberContext.Provider value={values}>
            {children}
        </MemberContext.Provider>
    );
};

MemberContext.displayName = 'MemberContext';

export default MemberContext;
