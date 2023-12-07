import { Link } from "react-router-dom";

import { formatDate } from "../../../utils/generalUtils";

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
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{yachtName}</td>
            <td><Link to={`/yachts/${yachtId}`}>Yacht details</Link></td>
            <td>{formatDate(startDate)}</td>
            <td>{formatDate(endDate)}</td>

            <td>
                
            </td>
        </tr>
    )
}