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

    const getBookingData = (bookings, yachtId) => {
        // Return early if there aren't any reservations
        if (bookings.length === 0) { return [] }

        return bookings.filter(booking => booking.yachtId === yachtId);
    };

    const getBookingDates = (bookings, yachtId) => {
        const yachtsBookingData = getBookingData(bookings, yachtId);
        // Return early if there aren't any reservations
        if (yachtsBookingData.length === 0) { return [] }

        return (yachtsBookingData.map(booking => ({
            start: booking.startDate,
            end: booking.endDate,
        })));
    };
    
    const yachtBookingHandler = async (yachtId, startDate, endDate) => {
        let result = await bookingService.createBooking({yachtId, startDate, endDate});
        setYachtsBookings(state => [...state, result]);

        return result;
    };

    const values = {
        yachtBookingHandler,
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
