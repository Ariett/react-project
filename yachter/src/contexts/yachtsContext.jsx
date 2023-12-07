import { createContext, useEffect, useState } from "react";

import * as reservationService from "../services/reservationService";

const YatchsContext = createContext();

export const YachtsProvider = ({
    children,
}) => {
    const [yachtsReservations, setYachtsReservations] = useState([]);

    useEffect(() => {
        reservationService.getAllReservations()
            .then(result => setYachtsReservations(result));
    }, []);

    console.log('yachtsReservations', yachtsReservations);

    const getReservationData = (reservations, yachtId) => {
        // Return early if there aren't any reservations
        if (reservations.length === 0) { return [] }

        return reservations.filter(reservation => reservation.yachtId === yachtId);
    };

    const getReservationDates = (reservations, yachtId) => {
        const yachtsReservationData = getReservationData(reservations, yachtId);
        // Return early if there aren't any reservations
        if (yachtsReservationData.length === 0) { return [] }

        return (yachtsReservationData.map(reservation => ({
            start: reservation.startDate,
            end: reservation.endDate,
        })));
    };

    const getYachtsOwnerReservations = (yachtOwnerId) => {
        // Return early if there aren't any reservations
        if (yachtsReservations.length === 0) { return [] }

        return yachtsReservations.filter(reservation => reservation.yachtOwnerId === yachtOwnerId);
    };

    const yachtReservationCreateHandler = async (yachtId, yachtName, yachtOwnerId, startDate, endDate) => {
        let result = await reservationService.createReservation({
            yachtId,
            yachtName,
            yachtOwnerId,
            startDate,
            endDate
        });
        setYachtsReservations(state => [...state, result]);

        return result;
    };

    const yachtReservationDeleteHandler = async (reservationId) => {
        let result = await reservationService.deleteReservation(reservationId);
        setYachtsReservations(state => state.filter(reservation => reservation._id !== reservationId));
    };

    const yachtReservationStatusHandler = async (yachtId, status, reservationOwnerId) => {
        // let result = await reservationService.deleteReservation(reservationId);
        // setYachtsReservations(state => state.filter(reservation => reservation._id !== reservationId));
    };

    const values = {
        yachtReservationCreateHandler,
        yachtReservationDeleteHandler,
        yachtsReservations,
        getReservationData,
        getReservationDates,
        getYachtsOwnerReservations,
    };

    return (
        <YatchsContext.Provider value={values}>
            {children}
        </YatchsContext.Provider>
    );
};

YatchsContext.displayName = 'YatchsContext';

export default YatchsContext;
