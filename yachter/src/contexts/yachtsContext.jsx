import { createContext, useEffect, useState } from "react";

import * as bookingService from "../services/bookingService";

const YatchsContext = createContext();

export const YachtsProvider = ({
    children,
}) => {
    const [yachtsBookings, setYachtsBookings] = useState([]);

    useEffect(() => {
        bookingService.getAllBookings()
            .then(result => setYachtsBookings(result));
    }, []);

    const getBookingData = (yachtId) => {
        // Return early if there aren't any reservations
        if (yachtsBookings.length === 0) { return [] }

        return yachtsBookings.filter(booking => booking.yachtId === yachtId);
    };

    const getBookingDates = (yachtId) => {
        const yachtsBookingData = getBookingData(yachtId);
        // Return early if there aren't any reservations
        if (yachtsBookingData.length === 0) { return [] }

        return (yachtsBookingData.map(booking => ({
            start: booking.startDate,
            end: booking.endDate,
        })));

    };

    const values = {
        yachtsBookings,
        getBookingData,
        getBookingDates,
    };

    return (
        <YatchsContext.Provider value={values}>
            {children}
        </YatchsContext.Provider>
    );
};

YatchsContext.displayName = 'YatchsContext';

export default YatchsContext;
