import { Link } from "react-router-dom";

import { formatDate } from "../../../utils/generalUtils";
import Button from "react-bootstrap/esm/Button";
import { useContext } from "react";
import MemberContext from "../../../contexts/memberContext";

export default function ReservationRow({
    _id,
    _ownerId,
    yachtId,
    yachtName,
    yachtLink,
    startDate,
    endDate,
    _createdOn,
    index
}) {
    const { reservationDeleteHandler } = useContext(MemberContext);

    const hadleDeleteClick = () => {
        reservationDeleteHandler(_id);
    };


    return (
        <tr>
            <td>{index + 1}</td>
            <td>{yachtName}</td>
            <td><Link to={`/yachts/${yachtId}`}>Yacht details</Link></td>
            <td>{formatDate(startDate)}</td>
            <td>{formatDate(endDate)}</td>

            <td>
                <Button
                    variant="danger"
                    style={{ marginLeft: "20px" }}
                    onClick={hadleDeleteClick}
                >
                    <i className="fa-solid fa-trash"></i>
                </Button>
            </td>
        </tr>
    )
}