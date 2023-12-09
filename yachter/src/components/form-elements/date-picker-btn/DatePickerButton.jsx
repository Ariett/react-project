import { useState, useContext, useEffect, useRef, forwardRef } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Button from "react-bootstrap/esm/Button";

import MemberContext from "../../../contexts/memberContext";
import YatchsContext from "../../../contexts/yachtsContext";

export default function DatePickerButton({
    btnText,
    btnVariant,
    btnStyle,
    yachtId,
    yachtName,
    yachtOwnerId
}) {
    const { reservationCreateHandler } = useContext(MemberContext);
    const { yachtsReservations, getReservationDates, } = useContext(YatchsContext);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [excludedIntervals, setExcludedIntervals] = useState([]);

    useEffect(() => {
        setExcludedIntervals(() => getReservationDates(yachtsReservations, yachtId));
    }, [yachtId, getReservationDates, yachtsReservations]);

    // Used to make the reservation callback
    const prevStartDateRef = useRef(null);
    const prevEndDateRef = useRef(null);
    useEffect(() => {
        // Compare current and previous values
        if (
            startDate &&
            endDate &&
            (startDate !== prevStartDateRef.current || endDate !== prevEndDateRef.current)
        ) {
            setExcludedIntervals(state => [...state,
            {
                start: new Date(startDate),
                end: new Date(endDate)
            }]);
            // Perform the API call
            reservationCreateHandler(yachtId, yachtName, yachtOwnerId, startDate.getTime(), endDate.getTime());

            // Update previous values
            prevStartDateRef.current = startDate;
            prevEndDateRef.current = endDate;

            setStartDate(null);
            setEndDate(null);
        }
    }, [startDate, endDate, yachtId, reservationCreateHandler]);

    const onChange = (dates) => {
        let [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    btnText = btnText ? btnText : 'Book now';

    const ExampleCustomInput = forwardRef(({ onClick }, ref) => (
        <Button
            variant={btnVariant}
            // style={btnStyle}
            // className="example-custom-input"
            onClick={onClick}
            ref={ref}
        >
            {btnText}
        </Button>
    ));

    return (
        <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            customInput={<ExampleCustomInput />}
            isClearable={false}
            excludeDateIntervals={excludedIntervals}
            withPortal
            minDate={Date.now()}
        />
    );
};