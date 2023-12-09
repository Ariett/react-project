import { useContext } from "react";

import Button from "react-bootstrap/esm/Button";

import YatchsContext from "../../../../contexts/yachtsContext";

export default function YachtsOwnerActions({
    reservationId,
    reservationOwnerId
}) {
    const { yachtReservationStatusHandler } = useContext(YatchsContext);

    const hadleConfirmClick = () => {
        yachtReservationStatusHandler(reservationId, reservationOwnerId, 'Confirmed');
    };

    const hadleDeclineClick = () => {
        yachtReservationStatusHandler(reservationId, reservationOwnerId, 'Declined');
    };

    return (
        <>
            <Button
                variant="success"
                onClick={hadleConfirmClick}
            >
                <i className="fa-solid fa-check"></i>
            </Button>

            <Button
                variant="danger"
                style={{ marginLeft: "20px !important" }}
                onClick={hadleDeclineClick}
            >
                <i className="fa-solid fa-x"></i>
            </Button>
        </>
    )
}