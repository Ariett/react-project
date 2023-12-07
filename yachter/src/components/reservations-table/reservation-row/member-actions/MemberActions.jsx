import { useContext } from "react";

import Button from "react-bootstrap/esm/Button";

import MemberContext from "../../../../contexts/memberContext";

export default function MemberActions({
    reservationId
}) {
    const { reservationDeleteHandler } = useContext(MemberContext);

    const hadleDeleteClick = () => {
        reservationDeleteHandler(reservationId);
    };

    return (
        <Button
            variant="danger"
            style={{ marginLeft: "20px" }}
            onClick={hadleDeleteClick}
        >
            <i className="fa-solid fa-trash"></i>
        </Button>
    )
}