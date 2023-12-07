import { useContext } from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/esm/Button";

import MemberContext from "../../../contexts/memberContext";
import AuthContext from "../../../contexts/authContext";

import { formatDate } from "../../../utils/generalUtils";

export default function ReservationRow({
    _id,
    _ownerId,
    yachtId,
    yachtName,
    startDate,
    endDate,
    _createdOn,
    index
}) {
    const { reservationDeleteHandler } = useContext(MemberContext);
    const { userId } = useContext(AuthContext);

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

            {userId === _ownerId && (
                <td>
                    <Button
                        variant="danger"
                        style={{ marginLeft: "20px" }}
                        onClick={hadleDeleteClick}
                    >
                        <i className="fa-solid fa-trash"></i>
                    </Button>
                </td>
            )}
        </tr>
    )
}